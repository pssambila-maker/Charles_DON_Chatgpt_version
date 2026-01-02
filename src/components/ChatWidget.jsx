import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getFunctions, httpsCallable } from 'firebase/functions';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Firebase Functions
  const functions = getFunctions();
  const chatWithSarah = httpsCallable(functions, 'chatWithSarah');
  const bookAppointment = httpsCallable(functions, 'bookAppointment');

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hi! I'm Sarah, Senior Admissions Advisor at NextGen DON Academy. I'd love to help you learn about our Director of Nursing leadership programs. What questions do you have?",
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message to chat
    const newUserMessage = {
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        content: msg.content
      }));

      // Call Firebase Function
      const result = await chatWithSarah({
        message: userMessage,
        conversationHistory
      });

      // Add AI response to chat
      const aiMessage = {
        role: 'assistant',
        content: result.data.response,
        timestamp: result.data.timestamp
      };
      setMessages(prev => [...prev, aiMessage]);

      // Show appointment form if AI detects interest
      if (result.data.wantsAppointment && !showAppointmentForm) {
        setShowAppointmentForm(true);
      }

    } catch (error) {
      console.error('Chat error:', error);

      // Add error message
      const errorMessage = {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble responding right now. Please try again or call us at (248) 795-9750.",
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const appointmentData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredDate: formData.get('preferredDate'),
      preferredTime: formData.get('preferredTime'),
      notes: formData.get('notes') || ''
    };

    setIsLoading(true);

    try {
      const result = await bookAppointment(appointmentData);

      // Add success message
      const successMessage = {
        role: 'assistant',
        content: result.data.message || "Thank you! Your appointment request has been received. We'll contact you within 24 hours to confirm.",
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, successMessage]);
      setShowAppointmentForm(false);

    } catch (error) {
      console.error('Appointment booking error:', error);

      const errorMessage = {
        role: 'assistant',
        content: "I'm sorry, there was an error booking your appointment. Please call us at (248) 795-9750.",
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}

        {/* Notification badge */}
        {!isOpen && messages.length === 0 && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Sarah</h3>
                <p className="text-xs text-white/80">Senior Admissions Advisor</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" title="Online"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-navy-600 text-white rounded-br-sm'
                        : msg.isError
                        ? 'bg-red-100 text-red-800 rounded-bl-sm'
                        : 'bg-white text-slate-800 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-white/60' : 'text-slate-400'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Appointment Form */}
              {showAppointmentForm && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <h4 className="font-semibold text-navy-600 mb-3">Book Your Consultation</h4>
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
                    />
                    <input
                      type="date"
                      name="preferredDate"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
                    />
                    <input
                      type="time"
                      name="preferredTime"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
                    />
                    <textarea
                      name="notes"
                      placeholder="Any specific topics you'd like to discuss? (Optional)"
                      rows={2}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm resize-none"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-navy-600 text-white py-2 rounded-lg hover:bg-navy-700 transition-colors text-sm font-medium"
                      >
                        Book Appointment
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAppointmentForm(false)}
                        className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-navy-500 disabled:bg-slate-100 text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center hover:bg-navy-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                Powered by AI • Typically responds in seconds
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 640px) {
          .fixed.bottom-24.right-6 {
            width: calc(100vw - 2rem);
            right: 1rem;
            left: 1rem;
            bottom: 5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
