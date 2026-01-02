const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { defineString } = require('firebase-functions/params');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { SYSTEM_INSTRUCTIONS } = require('./academyKnowledge');

admin.initializeApp();

// Define environment parameters (new v7 approach)
const sendgridKey = defineString('SENDGRID_KEY');
const geminiKey = defineString('GEMINI_KEY');

// SendGrid setup
const ADMIN_EMAIL = 'info@nextgendonacademy.com';
const FROM_EMAIL = 'info@nextgendonacademy.com'; // Must be verified in SendGrid

/**
 * Send email notification when a new enquiry is submitted
 */
exports.onEnquiryCreated = onDocumentCreated('enquiries/{enquiryId}', async (event) => {
        const enquiry = event.data.data();
        const enquiryId = event.params.enquiryId;

        console.log('New enquiry received:', enquiryId);

        // Initialize SendGrid with the API key
        const apiKey = sendgridKey.value();
        if (apiKey) {
            sgMail.setApiKey(apiKey);
        }

        try {
            // Email to the user (confirmation)
            const userEmail = {
                to: enquiry.email,
                from: FROM_EMAIL,
                subject: 'Thank you for your enquiry - NextGen DON Academy',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                            .header { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
                            .button { display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1 style="margin: 0;">NextGen DON Academy</h1>
                                <p style="margin: 10px 0 0 0;">Advancing Leadership. Elevating Care.</p>
                            </div>
                            <div class="content">
                                <h2 style="color: #1d4ed8;">Thank You for Your Enquiry!</h2>
                                <p>Dear ${enquiry.name},</p>
                                <p>Thank you for your interest in NextGen DON Academy's Director of Nursing Leadership Certification Program.</p>
                                <p>We have received your enquiry and our team will review your message and respond within <strong>24 hours</strong>.</p>
                                <p><strong>Your enquiry details:</strong></p>
                                <ul style="background: white; padding: 20px; border-radius: 8px;">
                                    <li><strong>Name:</strong> ${enquiry.name}</li>
                                    <li><strong>Email:</strong> ${enquiry.email}</li>
                                    <li><strong>Phone:</strong> ${enquiry.phone || 'Not provided'}</li>
                                    <li><strong>Message:</strong> ${enquiry.message}</li>
                                </ul>
                                <p>In the meantime, feel free to explore our website to learn more about our programs and what makes NextGen DON Academy the premier choice for nursing leadership development.</p>
                                <div style="text-align: center;">
                                    <a href="https://netgen-don-academy.web.app" class="button">Visit Our Website</a>
                                </div>
                                <p>If you have any urgent questions, please don't hesitate to call us at <strong>+1 (248) 795-9750</strong>.</p>
                                <p>Best regards,<br><strong>NextGen DON Academy Team</strong></p>
                            </div>
                            <div class="footer">
                                <p>995 N. Pontiac Trail, Walled Lake, MI 48390</p>
                                <p>Phone: +1 (248) 795-9750 | Email: info@nextgendonacademy.com</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };

            // Email to admin (notification)
            const adminEmail = {
                to: ADMIN_EMAIL,
                from: FROM_EMAIL,
                subject: `🔔 New Enquiry from ${enquiry.name}`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                            .alert { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                            .details { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed; }
                            .field { margin: 10px 0; }
                            .label { font-weight: bold; color: #1d4ed8; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="alert">
                                <h2 style="margin: 0;">📧 New Enquiry Received!</h2>
                                <p style="margin: 5px 0 0 0;">Action Required: Follow up within 24 hours</p>
                            </div>
                            <div class="details">
                                <div class="field">
                                    <span class="label">Name:</span> ${enquiry.name}
                                </div>
                                <div class="field">
                                    <span class="label">Email:</span> <a href="mailto:${enquiry.email}">${enquiry.email}</a>
                                </div>
                                <div class="field">
                                    <span class="label">Phone:</span> <a href="tel:${enquiry.phone}">${enquiry.phone || 'Not provided'}</a>
                                </div>
                                <div class="field">
                                    <span class="label">Message:</span><br>
                                    <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px;">
                                        ${enquiry.message}
                                    </div>
                                </div>
                                <div class="field">
                                    <span class="label">Submitted:</span> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
                                </div>
                                <div class="field">
                                    <span class="label">Enquiry ID:</span> ${enquiryId}
                                </div>
                            </div>
                            <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
                                💡 <strong>Quick Actions:</strong> Reply to ${enquiry.email} or call ${enquiry.phone || 'the provided number'} to follow up.
                            </p>
                        </div>
                    </body>
                    </html>
                `
            };

            // Send both emails
            await sgMail.send(userEmail);
            console.log('Confirmation email sent to user:', enquiry.email);

            await sgMail.send(adminEmail);
            console.log('Notification email sent to admin');

            return { success: true };
        } catch (error) {
            console.error('Error sending enquiry emails:', error);
            return { success: false, error: error.message };
        }
    });

/**
 * Send email notification when someone subscribes to newsletter
 */
exports.onNewsletterSubscribe = onDocumentCreated('newsletter/{subscriberId}', async (event) => {
        const subscriber = event.data.data();
        const subscriberId = event.params.subscriberId;

        console.log('New newsletter subscriber:', subscriberId);

        // Initialize SendGrid with the API key
        const apiKey = sendgridKey.value();
        if (apiKey) {
            sgMail.setApiKey(apiKey);
        }

        try {
            // Email to the subscriber (welcome email)
            const welcomeEmail = {
                to: subscriber.email,
                from: FROM_EMAIL,
                subject: 'Welcome to NextGen DON Academy Newsletter! 🎉',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                            .header { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
                            .highlight { background: white; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1 style="margin: 0;">🎉 Welcome to Our Community!</h1>
                                <p style="margin: 10px 0 0 0;">NextGen DON Academy Newsletter</p>
                            </div>
                            <div class="content">
                                <p>Hi there! 👋</p>
                                <p>Thank you for subscribing to the NextGen DON Academy newsletter!</p>
                                <p>You've just taken an important step toward staying informed about the latest in nursing leadership, DON certification programs, and healthcare excellence.</p>

                                <div class="highlight">
                                    <h3 style="margin-top: 0; color: #1d4ed8;">What to Expect:</h3>
                                    <ul style="margin: 0; padding-left: 20px;">
                                        <li>🎓 <strong>Program Updates:</strong> Be the first to know about new courses and certification opportunities</li>
                                        <li>📚 <strong>Leadership Tips:</strong> Monthly insights on nursing leadership and management best practices</li>
                                        <li>🌟 <strong>Success Stories:</strong> Inspiring stories from our DON graduates</li>
                                        <li>📅 <strong>Events:</strong> Early access to webinars, workshops, and special events</li>
                                        <li>💡 <strong>Industry News:</strong> Updates on CMS standards and healthcare regulations</li>
                                    </ul>
                                </div>

                                <p>Our mission is to empower Directors of Nursing with the leadership, clinical expertise, and operational excellence needed to elevate the standard of care.</p>

                                <p><strong>Ready to take the next step?</strong> Explore our <a href="https://netgen-don-academy.web.app/program" style="color: #0ea5e9;">Director of Nursing Leadership Certification Program</a>.</p>

                                <p>Have questions? Reply to this email or call us at <strong>+1 (248) 795-9750</strong>.</p>

                                <p>We're excited to have you on this journey with us!</p>

                                <p>Best regards,<br><strong>The NextGen DON Academy Team</strong></p>
                            </div>
                            <div class="footer">
                                <p>995 N. Pontiac Trail, Walled Lake, MI 48390</p>
                                <p>Phone: +1 (248) 795-9750 | Email: info@nextgendonacademy.com</p>
                                <p style="margin-top: 15px; font-size: 12px;">
                                    You're receiving this email because you subscribed to our newsletter.<br>
                                    If you wish to unsubscribe, please <a href="mailto:info@nextgendonacademy.com?subject=Unsubscribe">contact us</a>.
                                </p>
                            </div>
                        </div>
                    </body>
                    </html>
                `
            };

            // Email to admin (notification)
            const adminEmail = {
                to: ADMIN_EMAIL,
                from: FROM_EMAIL,
                subject: `📬 New Newsletter Subscriber: ${subscriber.email}`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                            .alert { background: #10b981; color: white; padding: 20px; border-radius: 8px; }
                            .details { background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="alert">
                                <h2 style="margin: 0;">📬 New Newsletter Subscriber!</h2>
                            </div>
                            <div class="details">
                                <p><strong>Email:</strong> ${subscriber.email}</p>
                                <p><strong>Subscribed:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
                                <p><strong>Subscriber ID:</strong> ${subscriberId}</p>
                            </div>
                            <p style="margin-top: 20px; color: #64748b;">
                                💡 Consider adding this subscriber to your email marketing platform (e.g., Mailchimp, HubSpot).
                            </p>
                        </div>
                    </body>
                    </html>
                `
            };

            // Send both emails
            await sgMail.send(welcomeEmail);
            console.log('Welcome email sent to subscriber:', subscriber.email);

            await sgMail.send(adminEmail);
            console.log('Notification email sent to admin');

            return { success: true };
        } catch (error) {
            console.error('Error sending newsletter emails:', error);
            return { success: false, error: error.message };
        }
    });

/**
 * Chat with Sarah - AI Admissions Assistant
 * Uses Google Gemini API for conversational AI
 */
exports.chatWithSarah = onCall(async (request) => {
    const { message, conversationHistory } = request.data;

    console.log('Chat request received:', { message, historyLength: conversationHistory?.length || 0 });

    // Validate input
    if (!message || typeof message !== 'string') {
        throw new HttpsError(
            'invalid-argument',
            'Message is required and must be a string'
        );
    }

    try {
        // Get Gemini API key from environment parameters
        const GEMINI_API_KEY = geminiKey.value();

        if (!GEMINI_API_KEY) {
            console.error('Gemini API key not configured');
            throw new HttpsError(
                'failed-precondition',
                'AI service is not configured. Please contact support.'
            );
        }

        // Initialize Google Generative AI
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Build conversation history for context
        const chatHistory = [];

        // Add system instructions as first message
        chatHistory.push({
            role: 'user',
            parts: [{ text: SYSTEM_INSTRUCTIONS }]
        });
        chatHistory.push({
            role: 'model',
            parts: [{ text: 'Understood. I am Sarah, the Senior Admissions Advisor for NextGen DON Academy. I\'m here to help you learn about our Director of Nursing leadership programs and answer any questions you may have. How can I assist you today?' }]
        });

        // Add previous conversation if provided
        if (conversationHistory && Array.isArray(conversationHistory)) {
            conversationHistory.forEach(msg => {
                chatHistory.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                });
            });
        }

        // Start chat with history
        const chat = model.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        // Send user message and get response
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const responseText = response.text();

        console.log('AI response generated successfully');

        // Detect if user wants to book an appointment
        const appointmentKeywords = [
            'book', 'schedule', 'appointment', 'consultation',
            'meeting', 'call', 'talk to someone', 'speak with'
        ];
        const wantsAppointment = appointmentKeywords.some(keyword =>
            message.toLowerCase().includes(keyword) ||
            responseText.toLowerCase().includes(keyword)
        );

        // Save conversation to Firestore for analytics
        try {
            await admin.firestore().collection('chatLogs').add({
                userMessage: message,
                aiResponse: responseText,
                wantsAppointment,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                conversationLength: (conversationHistory?.length || 0) + 1
            });
        } catch (logError) {
            console.error('Error logging conversation:', logError);
            // Don't fail the function if logging fails
        }

        return {
            response: responseText,
            wantsAppointment,
            timestamp: new Date().toISOString()
        };

    } catch (error) {
        console.error('Error in chatWithSarah:', error);

        // Return user-friendly error
        if (error.code?.includes('quota')) {
            throw new HttpsError(
                'resource-exhausted',
                'AI service is temporarily busy. Please try again in a moment.'
            );
        }

        throw new HttpsError(
            'internal',
            'Sorry, I\'m having trouble responding right now. Please try again or call us at (248) 795-9750.'
        );
    }
});

/**
 * Book an appointment through the chat interface
 * Saves to Firestore and sends email notifications
 */
exports.bookAppointment = onCall(async (request) => {
    const { name, email, phone, preferredDate, preferredTime, notes } = request.data;

    console.log('Appointment booking request:', { name, email, phone });

    // Validate required fields
    if (!name || !email || !phone) {
        throw new HttpsError(
            'invalid-argument',
            'Name, email, and phone are required'
        );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new HttpsError(
            'invalid-argument',
            'Invalid email address'
        );
    }

    try {
        // Save appointment to Firestore
        const appointmentRef = await admin.firestore().collection('appointments').add({
            name,
            email,
            phone,
            preferredDate: preferredDate || 'Not specified',
            preferredTime: preferredTime || 'Not specified',
            notes: notes || '',
            source: 'chat_widget',
            status: 'pending',
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        console.log('Appointment saved to Firestore:', appointmentRef.id);

        // Send confirmation emails
        const apiKey = sendgridKey.value();
        if (apiKey) {
            sgMail.setApiKey(apiKey);
            try {
                // Email to user
                const userEmail = {
                    to: email,
                    from: FROM_EMAIL,
                    subject: 'Appointment Request Confirmed - NextGen DON Academy',
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                                .header { background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                                .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                                .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <h1 style="margin: 0;">Appointment Request Received!</h1>
                                    <p style="margin: 10px 0 0 0;">NextGen DON Academy</p>
                                </div>
                                <div class="content">
                                    <p>Dear ${name},</p>
                                    <p>Thank you for requesting a consultation with NextGen DON Academy!</p>
                                    <p><strong>Your appointment details:</strong></p>
                                    <ul style="background: white; padding: 20px; border-radius: 8px;">
                                        <li><strong>Name:</strong> ${name}</li>
                                        <li><strong>Phone:</strong> ${phone}</li>
                                        <li><strong>Preferred Date:</strong> ${preferredDate || 'To be scheduled'}</li>
                                        <li><strong>Preferred Time:</strong> ${preferredTime || 'To be scheduled'}</li>
                                    </ul>
                                    <p>Our team will contact you within <strong>24 hours</strong> to confirm your appointment time.</p>
                                    <p>If you have any immediate questions, call us at <strong>(248) 795-9750</strong>.</p>
                                    <p>Best regards,<br><strong>Sarah & The NextGen DON Academy Team</strong></p>
                                </div>
                                <div class="footer">
                                    <p>995 N. Pontiac Trail, Walled Lake, MI 48390</p>
                                    <p>Phone: +1 (248) 795-9750 | Email: info@nextgendonacademy.com</p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                };

                // Email to admin
                const adminEmail = {
                    to: ADMIN_EMAIL,
                    from: FROM_EMAIL,
                    subject: `📅 New Appointment Request from ${name}`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <body>
                            <h2>📅 New Appointment Request (via Chat Widget)</h2>
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                                <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
                                <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
                                <p><strong>Notes:</strong> ${notes || 'None'}</p>
                                <p><strong>Appointment ID:</strong> ${appointmentRef.id}</p>
                            </div>
                            <p>⏰ <strong>Action Required:</strong> Contact ${name} within 24 hours to confirm appointment.</p>
                        </body>
                        </html>
                    `
                };

                await sgMail.send(userEmail);
                console.log('Confirmation email sent to user');

                await sgMail.send(adminEmail);
                console.log('Notification email sent to admin');

            } catch (emailError) {
                console.error('Error sending appointment emails:', emailError);
                // Don't fail the function if email fails
            }
        }

        return {
            success: true,
            appointmentId: appointmentRef.id,
            message: 'Appointment request received! We\'ll contact you within 24 hours to confirm.'
        };

    } catch (error) {
        console.error('Error booking appointment:', error);
        throw new HttpsError(
            'internal',
            'Failed to book appointment. Please try again or call us at (248) 795-9750.'
        );
    }
});
