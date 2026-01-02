# Chat Widget Setup Guide

## Overview
You've successfully built Sarah, your AI admissions assistant! This guide will help you complete the setup and test the chat widget.

## ✅ What's Already Done

1. **Google Gemini SDK installed** ✓
2. **Knowledge base created** (`functions/academyKnowledge.js`) ✓
3. **Firebase Functions created**:
   - `chatWithSarah` - Handles chat conversations ✓
   - `bookAppointment` - Books consultation appointments ✓
4. **Chat Widget Component** (`src/components/ChatWidget.jsx`) ✓
5. **Integrated into website** (App.jsx) ✓

## 🔑 Required: Get Google Gemini API Key

### Step 1: Sign Up for Google AI Studio

1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Get API Key"**
4. Click **"Create API key in new project"** (or select existing project)
5. Copy the API key (starts with `AIza...`)

**Cost:** FREE tier includes:
- 60 requests per minute
- Unlimited requests (with rate limits)
- No credit card required

### Step 2: Set API Key in Firebase Functions

Open your terminal and run this command:

```bash
firebase functions:config:set gemini.key="YOUR_API_KEY_HERE"
```

Replace `YOUR_API_KEY_HERE` with your actual Gemini API key.

**Example:**
```bash
firebase functions:config:set gemini.key="AIzaSyD1234567890abcdefghijklmnopqrstuvw"
```

### Step 3: Verify Configuration

Check that the key was set correctly:

```bash
firebase functions:config:get
```

You should see:
```json
{
  "gemini": {
    "key": "AIzaSy..."
  },
  "sendgrid": {
    "key": "SG..."
  }
}
```

## 🧪 Testing Locally

### Option 1: Test with Firebase Emulators (Recommended)

1. **Set environment variable for local testing:**

Create a file called `.runtimeconfig.json` in the `functions/` directory:

```json
{
  "gemini": {
    "key": "YOUR_GEMINI_API_KEY_HERE"
  },
  "sendgrid": {
    "key": "YOUR_SENDGRID_KEY_HERE"
  }
}
```

2. **Start the emulators:**

```bash
npm run dev
```

This will start both the Vite dev server (frontend) and Firebase emulators (backend).

3. **Test the chat:**
   - Open http://localhost:5173
   - Click the chat bubble in the bottom-right corner
   - Try sending a message like "Tell me about your programs"

### Option 2: Deploy and Test on Production

If you prefer to skip local testing and go straight to production:

```bash
# Deploy functions
cd functions
npm run deploy

# Deploy website
cd ..
npm run build
firebase deploy --only hosting
```

## 📋 Test Checklist

Use these test scenarios to verify everything works:

### Basic Chat Tests:
- [ ] Chat bubble appears in bottom-right corner
- [ ] Click bubble to open chat window
- [ ] See welcome message from Sarah
- [ ] Send message: "What is NextGen DON Academy?"
- [ ] Receive AI response
- [ ] Send follow-up question
- [ ] AI remembers conversation context

### Appointment Booking Tests:
- [ ] Say: "I'd like to schedule a consultation"
- [ ] Appointment form appears
- [ ] Fill out form and submit
- [ ] See confirmation message
- [ ] Check Firestore for appointment record
- [ ] Verify email sent to admin and user

### Error Handling Tests:
- [ ] Test with invalid API key (should show friendly error)
- [ ] Test with network offline (should handle gracefully)
- [ ] Verify all required fields in appointment form

## 🚀 Deployment

### Deploy Functions

```bash
cd functions
firebase deploy --only functions
```

This deploys:
- `chatWithSarah` function
- `bookAppointment` function
- Existing email functions

### Deploy Website

```bash
npm run build
firebase deploy --only hosting
```

### Full Deployment (Both)

```bash
npm run build
firebase deploy
```

## 📊 Monitoring & Analytics

### View Chat Logs in Firestore

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **Firestore Database**
4. Find the `chatLogs` collection
5. See all conversations with timestamps

**Data collected:**
- User messages
- AI responses
- Appointment interest detection
- Conversation length
- Timestamps

### View Appointments

Check the `appointments` collection in Firestore to see:
- Name, email, phone
- Preferred date/time
- Status (pending, confirmed, completed)
- Source (always "chat_widget" for AI bookings)

### View Function Logs

```bash
firebase functions:log
```

Or view in Firebase Console → Functions → Logs

## 🎨 Customization

### Change Chat Bubble Position

Edit `src/components/ChatWidget.jsx`:

```jsx
// Current: bottom-right
className="fixed bottom-6 right-6"

// Bottom-left:
className="fixed bottom-6 left-6"

// Top-right:
className="fixed top-6 right-6"
```

### Change Colors

The chat widget uses your existing color scheme:
- **Navy Blue** (`navy-600`) for chat bubble and user messages
- **Amber** (`amber-500`) for notification badge
- **White** for assistant messages

To change colors, search for these classes in `ChatWidget.jsx`:
- `bg-navy-600` → Main color
- `bg-amber-500` → Accent color

### Modify Sarah's Personality

Edit `functions/academyKnowledge.js`:

The `SYSTEM_INSTRUCTIONS` constant controls:
- Sarah's tone and voice
- Response style
- Sales approach
- Knowledge base

## 🔧 Troubleshooting

### "AI service is not configured" Error

**Cause:** Gemini API key not set in Firebase config

**Fix:**
```bash
firebase functions:config:set gemini.key="YOUR_KEY"
firebase deploy --only functions
```

### Chat bubble appears but no welcome message

**Cause:** Frontend issue, check browser console

**Fix:**
1. Open browser DevTools (F12)
2. Check Console for errors
3. Verify Firebase is initialized

### Messages don't send

**Cause:** Function not deployed or API key invalid

**Fix:**
1. Check function logs: `firebase functions:log`
2. Verify API key is correct
3. Redeploy functions: `cd functions && npm run deploy`

### Appointment form doesn't show

**Cause:** Detection keywords not triggering

**Fix:** Edit `functions/index.js` line 354-357 to add more keywords:

```javascript
const appointmentKeywords = [
  'book', 'schedule', 'appointment', 'consultation',
  'meeting', 'call', 'talk to someone', 'speak with',
  'demo', 'tour', 'visit' // Add more keywords
];
```

## 💰 Costs & Limits

### Google Gemini Free Tier

**Free limits:**
- 60 requests/minute
- 1,500 requests/day
- No credit card required

**Exceeding limits:**
- Returns quota error
- User sees: "AI service is temporarily busy"
- Automatically retries after rate limit resets

**When to upgrade:**
- If you get more than 1,500 chats per day
- Cost after free tier: ~$0.001 per message (very cheap)

### Firestore Free Tier

**Current usage:**
- 2 collections: `chatLogs`, `appointments`
- Reads: ~2 per chat (very low)
- Writes: ~2 per chat (very low)

**Free limits:**
- 50,000 reads/day
- 20,000 writes/day
- 1GB storage

You're well within free tier limits.

## 📈 Success Metrics

After deploying, track these KPIs:

### Week 1:
- Number of chat conversations
- Number of appointment bookings
- Conversion rate (chats → appointments)
- Most common questions

### Month 1:
- Total chats
- Average conversation length
- Appointment show-up rate
- User satisfaction (ask for feedback)

### Decision Point (Month 2):
Based on these metrics, decide:
- **High engagement?** → Upgrade to GPT-4o ($15-30/month)
- **Moderate engagement?** → Continue with free tier
- **Low engagement?** → Improve prompts or stop

## 🎯 Next Steps

1. **Get Gemini API Key** (5 minutes)
   - Visit https://makersuite.google.com/app/apikey
   - Copy your key

2. **Set API Key in Firebase** (1 minute)
   ```bash
   firebase functions:config:set gemini.key="YOUR_KEY"
   ```

3. **Test Locally** (10 minutes)
   - Create `.runtimeconfig.json`
   - Run `npm run dev`
   - Test chat conversations

4. **Deploy** (5 minutes)
   ```bash
   npm run build
   firebase deploy
   ```

5. **Monitor** (Ongoing)
   - Check Firestore for chat logs
   - Review appointment bookings
   - Analyze metrics after 1 week

## 🆘 Need Help?

If you encounter issues:

1. Check Firebase Function logs: `firebase functions:log`
2. Check browser console for frontend errors (F12)
3. Verify Firestore security rules allow writes to `chatLogs` and `appointments`
4. Test with a simple message: "Hello"

## 📝 Summary

**What you have:**
- ✅ Professional chat widget with AI-powered responses
- ✅ Automatic appointment booking
- ✅ Email notifications (via existing SendGrid)
- ✅ Conversation logging for analytics
- ✅ Mobile responsive design
- ✅ FREE to test and run (Google Gemini free tier)

**Total cost so far:** $0

**Time to launch:** ~15 minutes (get API key + deploy)

**Ready to launch!** 🚀

---

**Questions?** Review this guide or check the Firebase Console for detailed logs and data.
