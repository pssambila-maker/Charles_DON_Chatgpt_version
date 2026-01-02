# NextGen DON Academy - Phase 2: AI Admissions Assistant
## Implementation Plan for Approval

---

## 🎯 Project Overview

**Goal:** Add an AI-powered Admissions Assistant named "Sarah" to the NextGen DON Academy website.

**Capabilities:**
1. **Text Chat Widget** - Floating chat bubble on website
2. **Voice Calls** - Handle incoming phone calls via Twilio
3. **Appointment Booking** - Schedule consultations directly to Firestore
4. **Knowledge Base** - Answer questions about DON programs

---

## 📋 Phase Breakdown

### Phase 2A: Backend Infrastructure (Python + FastAPI)
**What we'll build:**
- Python FastAPI server for handling AI conversations
- WebSocket support for real-time voice calls
- Integration with OpenAI GPT-4o Realtime API
- Twilio voice call handling
- Firebase Firestore integration for appointments

**New Technology Stack:**
- **Python 3.11+** (new)
- **FastAPI** (web framework)
- **Google Cloud Run** (serverless deployment - better than Cloud Functions for WebSockets)
- **Twilio** (voice call infrastructure)
- **OpenAI API** (GPT-4o Realtime)

### Phase 2B: AI Knowledge Base
**What we'll create:**
- System instructions file with academy information
- Course details (Foundations of DON Leadership, etc.)
- Contact information
- Conversation guidelines

### Phase 2C: Frontend Chat Widget
**What we'll add to existing React site:**
- Floating chat bubble (bottom-right)
- Chat window interface
- Real-time messaging
- Professional branding (navy + white)

### Phase 2D: Appointment System
**What we'll integrate:**
- Tool calling for booking appointments
- Direct write to Firestore `appointments` collection
- Email notifications (using existing SendGrid setup)

---

## 🏗️ Architecture Changes

### Current Architecture
```
React Website → Firebase Hosting
Forms → Firestore
Cloud Functions → SendGrid Emails
```

### New Architecture
```
React Website → Firebase Hosting
├── Chat Widget → FastAPI Backend (Cloud Run) → OpenAI API
├── Forms → Firestore
└── Cloud Functions → SendGrid Emails

Phone Calls → Twilio → FastAPI Backend (Cloud Run) → OpenAI Realtime
                                ↓
                           Firestore (Appointments)
```

---

## 📊 Detailed Implementation Steps

### Step 1: Project Structure Setup
**Create new directories:**
```
Charles_DON/
├── backend/           # NEW: Python backend
│   ├── main.py       # FastAPI application
│   ├── academy_data.py  # Knowledge base
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
├── src/
│   └── components/
│       └── ChatWidget.jsx  # NEW: Chat component
```

### Step 2: Backend Development (Python FastAPI)

**Files to create:**

#### `backend/academy_data.py`
```python
SYSTEM_INSTRUCTIONS = """
You are Sarah, the Admissions Assistant for NextGen DON Academy.

ABOUT THE ACADEMY:
- We train aspiring Directors of Nursing (DONs) for long-term care facilities
- Professional certification program
- Focus on leadership, compliance, and operational excellence

KEY COURSES:
1. Foundations of DON Leadership
   - Emotional intelligence
   - Building credibility
   - Leadership styles

2. Staff Development & Retention
   - Team building strategies
   - Retention best practices
   - Performance management

3. Financial Stewardship
   - Budgeting for nursing departments
   - Resource optimization
   - Cost-effective care delivery

CONTACT INFORMATION:
- Phone: (248) 795-9750
- Email: info@nextgendonacademy.com
- Location: 995 N. Pontiac Trail, Walled Lake, MI 48390

YOUR GOAL:
- Answer questions professionally
- Provide helpful information
- Guide to scheduling: "Would you like to schedule a quick 15-minute consultation?"

STYLE:
- Professional but warm
- Knowledgeable about nursing leadership
- Encouraging and supportive
- Concise responses (especially for voice)
"""
```

#### `backend/main.py`
- FastAPI application
- Twilio webhook handler (`/incoming-call`)
- WebSocket endpoint (`/media-stream`)
- Chat endpoint (`/api/chat`)
- OpenAI integration
- Firebase Firestore connection
- Tool calling for appointments

#### `backend/requirements.txt`
```
fastapi==0.109.0
uvicorn==0.27.0
websockets==12.0
twilio==8.11.0
openai==1.10.0
firebase-admin==6.3.0
python-dotenv==1.0.0
```

#### `backend/Dockerfile`
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
```

### Step 3: Frontend Chat Widget

**Create:** `src/components/ChatWidget.jsx`

**Features:**
- Floating bubble (bottom-right, 60px circle)
- Click to open chat window
- Send/receive messages
- Professional styling (navy #0f172a, white)
- Smooth animations (Framer Motion)
- Mobile responsive

**Integration:**
- Import in `App.jsx`
- Position: `fixed bottom-6 right-6`
- Z-index: 1000 (above content, below modals)

### Step 4: Appointment Booking System

**Firestore Collection:**
```javascript
appointments/
  {appointmentId}/
    - name: string
    - phone: string
    - email: string (optional)
    - preferredDate: string
    - preferredTime: string
    - message: string (optional)
    - status: "pending" | "confirmed" | "cancelled"
    - createdAt: timestamp
    - createdBy: "ai-assistant"
```

**Email Notifications:**
- Use existing SendGrid setup
- Confirmation to user
- Alert to admin

---

## 💰 Cost Analysis

### New Services Required

**OpenAI API:**
- GPT-4o Realtime: ~$0.06/minute audio
- GPT-4o Text: ~$0.01/1K tokens
- Estimated: $50-100/month (low traffic)

**Twilio:**
- Phone number: $1/month
- Inbound calls: $0.0085/minute
- Estimated: $20-50/month (low traffic)

**Google Cloud Run:**
- Free tier: 2M requests/month
- Estimated: FREE (within limits)

**Total Estimated Monthly Cost:**
- Low traffic: $70-150/month
- Medium traffic: $200-400/month

**Current Costs (for reference):**
- Firebase: FREE (current usage)
- SendGrid: FREE (current usage)

---

## ⚠️ Technical Considerations

### Challenges & Solutions

**Challenge 1: WebSocket Complexity**
- **Solution:** Use Cloud Run instead of Cloud Functions
- **Benefit:** Better WebSocket support, easier scaling

**Challenge 2: Voice Call Latency**
- **Solution:** Use OpenAI Realtime API (optimized for voice)
- **Benefit:** ~300ms response time

**Challenge 3: Two Programming Languages**
- **Current:** JavaScript (React, Firebase Functions)
- **New:** Python (FastAPI backend)
- **Solution:** Keep them separate - microservices architecture
- **Benefit:** Best tool for each job

**Challenge 4: OpenAI API Costs**
- **Solution:** Implement rate limiting, conversation timeouts
- **Benefit:** Prevent abuse, control costs

**Challenge 5: Firestore Security**
- **Solution:** Use Firebase Admin SDK (backend only)
- **Benefit:** Secure server-side access

---

## 🔒 Security Requirements

### API Keys to Secure
1. **OpenAI API Key** - Environment variable
2. **Twilio Auth Token** - Environment variable
3. **Firebase Service Account** - JSON key file
4. **SendGrid API Key** - Already secured

### CORS Configuration
- Allow only your domain: `netgen-don-academy.web.app`
- Restrict Cloud Run endpoint access

### Rate Limiting
- Max 10 chat messages per minute per IP
- Max 5 minutes per voice call

---

## 📅 Implementation Timeline

### Week 1: Backend Foundation
- [ ] Set up Python project structure
- [ ] Create knowledge base (`academy_data.py`)
- [ ] Build FastAPI application (`main.py`)
- [ ] Test locally with OpenAI API
- [ ] Deploy to Cloud Run

### Week 2: Voice Integration
- [ ] Set up Twilio account
- [ ] Configure phone number
- [ ] Implement WebSocket handler
- [ ] Test voice calls
- [ ] Connect to OpenAI Realtime

### Week 3: Frontend Chat Widget
- [ ] Create `ChatWidget.jsx` component
- [ ] Implement chat UI
- [ ] Connect to backend `/api/chat`
- [ ] Style to match branding
- [ ] Test on mobile

### Week 4: Appointment Booking
- [ ] Implement tool calling
- [ ] Firestore integration
- [ ] Email notifications
- [ ] End-to-end testing
- [ ] Production deployment

**Total Estimated Time:** 4 weeks (full-time) or 6-8 weeks (part-time)

---

## 🎯 Success Metrics

### Phase 2A (Backend)
- [ ] FastAPI server deployed to Cloud Run
- [ ] Health check endpoint responding
- [ ] OpenAI integration working

### Phase 2B (Voice)
- [ ] Twilio number configured
- [ ] Test call successfully handled
- [ ] AI responds to questions
- [ ] Appointment booking works

### Phase 2C (Chat Widget)
- [ ] Widget appears on website
- [ ] Chat messages send/receive
- [ ] Professional appearance
- [ ] Mobile responsive

### Phase 2D (Complete System)
- [ ] Appointments saved to Firestore
- [ ] Email notifications sent
- [ ] Voice and text both working
- [ ] < 2 second response time

---

## 🔄 Testing Plan

### Unit Tests
- Backend endpoints (FastAPI)
- Chat message handling
- Appointment booking logic

### Integration Tests
- OpenAI API connection
- Twilio webhook handling
- Firestore writes
- Email sending

### User Acceptance Tests
- Make test voice call
- Use chat widget
- Book appointment
- Verify emails received
- Check Firestore data

---

## 📝 Documentation Updates

**New docs to create:**
- `PHASE_2_BACKEND_SETUP.md` - Python backend setup
- `TWILIO_CONFIGURATION.md` - Phone setup guide
- `OPENAI_API_SETUP.md` - API key and usage
- `CHAT_WIDGET_CUSTOMIZATION.md` - Styling guide

**Existing docs to update:**
- `WEBSITE_ARCHITECTURE.md` - Add backend architecture
- `COMPONENTS_LIBRARY.md` - Add ChatWidget

---

## ⚡ Quick Start (Post-Approval)

**If approved, first steps:**

1. **Create Accounts:**
   - OpenAI API account
   - Twilio account
   - Google Cloud account (for Cloud Run)

2. **Get API Keys:**
   - OpenAI API key
   - Twilio Auth Token & Phone Number
   - Firebase Service Account JSON

3. **Initial Setup:**
   ```bash
   cd backend
   pip install -r requirements.txt
   python main.py  # Test locally
   ```

---

## 🤔 Questions for Decision

### Before We Proceed

**1. Budget Approval:**
- Are you comfortable with $70-150/month additional costs?
- Should we implement strict usage limits?

**2. Phone Number:**
- Use new dedicated number or forward existing (248) 795-9750?
- Voicemail fallback needed?

**3. Chat Widget Behavior:**
- Always visible or only on certain pages?
- Require email before chatting?
- Business hours only or 24/7?

**4. Appointment Booking:**
- Auto-confirm or require admin approval?
- Calendar integration needed (Google Calendar)?
- Reminder emails/SMS?

**5. Data Privacy:**
- Save chat transcripts? (for training/improvement)
- HIPAA compliance needed? (healthcare conversations)
- How long to retain data?

---

## 🎨 UI/UX Mockup

### Chat Widget States

**1. Closed (Default):**
```
Bottom-right corner
Navy circle (60px)
White chat icon
Pulse animation
```

**2. Open (Active):**
```
Chat window (350px × 500px)
Header: "Chat with Sarah" (navy background)
Messages area (white background)
Input box (bottom)
Send button (sky blue)
```

**3. Example Conversation:**
```
User: "Tell me about your DON program"

Sarah: "Our DON Leadership Program prepares you to lead
long-term care facilities with confidence. We cover
emotional intelligence, staff development, and financial
stewardship. Would you like to schedule a 15-minute
consultation to learn more?"

User: "Yes, I'd like to schedule"

Sarah: "Great! What's your name and preferred date/time?"
[Appointment form appears]
```

---

## ✅ Approval Checklist

**Review and approve:**
- [ ] Overall architecture and approach
- [ ] Technology choices (Python, FastAPI, Cloud Run)
- [ ] Cost estimates ($70-150/month)
- [ ] Timeline (4-8 weeks)
- [ ] Security measures
- [ ] Testing plan
- [ ] Questions answered above

**Next Steps After Approval:**
1. Create OpenAI and Twilio accounts
2. Set up backend project structure
3. Begin Phase 2A: Backend Foundation
4. Weekly progress updates

---

## 📞 Alternative Approaches (If Concerned)

### Option A: Text-Only First (Lower Cost)
- Skip voice integration initially
- Just chat widget
- Test demand before adding phone
- Cost: ~$30-50/month

### Option B: Pre-Built Solution (Faster)
- Use service like Voiceflow or Landbot
- Less customization
- Faster deployment
- Cost: ~$100-200/month

### Option C: Recommended Approach (Balanced)
- Build custom (as planned)
- Full control and customization
- Better long-term value
- Cost: $70-150/month

---

## 🚀 Ready to Proceed?

**If approved, I will:**
1. Create backend project structure
2. Set up Python FastAPI application
3. Integrate OpenAI API
4. Build chat widget
5. Configure Twilio
6. Deploy to Cloud Run
7. Test end-to-end
8. Deploy to production

**Estimated start-to-finish:** 4-8 weeks

---

**Decision Required:** Should we proceed with Phase 2 implementation?

**Your approval means:**
- ✅ Budget approved (~$70-150/month ongoing)
- ✅ Timeline acceptable (4-8 weeks)
- ✅ Technical approach validated
- ✅ Ready to create new accounts (OpenAI, Twilio)

---

**Version:** 1.0
**Created:** January 2026
**Status:** Awaiting Approval
