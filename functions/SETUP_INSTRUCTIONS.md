# Email Notifications Setup Guide

This guide will help you set up automated email notifications for NextGen DON Academy using Firebase Cloud Functions and SendGrid.

## Overview

Two automated email flows are configured:

### 1. Enquiry Form Notifications
When someone submits the Contact or Enquiry form:
- **To User**: Confirmation email with enquiry details
- **To You**: Alert email with their information for follow-up

### 2. Newsletter Subscriptions
When someone subscribes to the newsletter:
- **To User**: Welcome email explaining what to expect
- **To You**: Notification of new subscriber

## Setup Steps

### Step 1: Create a SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and sign up for a free account
   - Free plan includes 100 emails/day (sufficient for starting out)

2. **Verify your sender email address:**
   - Go to Settings → Sender Authentication
   - Click "Verify a Single Sender"
   - Enter `info@nextgendonacademy.com` as the sender email
   - Complete the verification process (check the inbox of info@nextgendonacademy.com)

3. **Create an API Key:**
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Name it: `NextGen DON Academy Functions`
   - Choose "Restricted Access" and enable "Mail Send" permission
   - Click "Create & View"
   - **IMPORTANT:** Copy the API key immediately (it won't be shown again)
   - Example: `SG.xxxxxxxxxxxxxxxxxxxxx...`

### Step 2: Configure Firebase Functions

Open your terminal and run:

```bash
cd functions
firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
```

Replace `YOUR_SENDGRID_API_KEY` with the actual API key from SendGrid.

**Example:**
```bash
firebase functions:config:set sendgrid.key="SG.abc123xyz789..."
```

Verify it was set correctly:
```bash
firebase functions:config:get
```

### Step 3: Deploy the Functions

From the project root directory:

```bash
firebase deploy --only functions
```

This will deploy two cloud functions:
- `onEnquiryCreated` - Triggers when new enquiry is added
- `onNewsletterSubscribe` - Triggers when new subscriber is added

### Step 4: Test the Email Notifications

1. Visit your website: https://netgen-don-academy.web.app

2. **Test Enquiry Form:**
   - Go to Contact or Enquiry page
   - Fill out the form with your test email
   - Submit
   - Check your inbox for:
     - Confirmation email to the submitter
     - Notification email to info@nextgendonacademy.com

3. **Test Newsletter:**
   - Subscribe with a test email
   - Check for welcome email

## Email Templates Included

### Enquiry Confirmation Email (to User)
- Professional header with NDA branding
- Confirmation of receipt
- Summary of their enquiry
- 24-hour response time commitment
- Contact information
- Link to website

### Enquiry Notification Email (to Admin)
- Alert-style notification
- Full enquiry details (name, email, phone, message)
- Timestamp
- Quick action suggestions

### Newsletter Welcome Email (to Subscriber)
- Friendly welcome message
- What to expect from the newsletter
- Link to program details
- Contact information
- Unsubscribe option

### Newsletter Notification Email (to Admin)
- Simple notification of new subscriber
- Email address and timestamp

## Customization

To customize the email templates, edit `functions/index.js`:

- Line 35-95: User confirmation email for enquiries
- Line 98-168: Admin notification email for enquiries
- Line 206-295: Welcome email for newsletter
- Line 298-338: Admin notification for newsletter

After making changes, redeploy:
```bash
firebase deploy --only functions
```

## Monitoring

### View Function Logs
```bash
firebase functions:log
```

### Check Function Status
Go to [Firebase Console](https://console.firebase.google.com/) → Functions

### SendGrid Dashboard
Monitor email delivery, opens, and clicks at [SendGrid Dashboard](https://app.sendgrid.com/)

## Costs

- **SendGrid Free Tier:** 100 emails/day (3,000/month) - FREE
- **Firebase Functions:**
  - Free tier: 2M invocations/month
  - Your volume will easily stay within free tier

## Upgrading Email Volume

If you exceed 100 emails/day:

1. **SendGrid Essentials:** $19.95/month for 50,000 emails
2. **Firebase Blaze Plan:** Pay-as-you-go (functions will still be free at your volume)

## Troubleshooting

### Emails not sending?

1. **Check SendGrid API Key:**
   ```bash
   firebase functions:config:get
   ```

2. **Verify sender email in SendGrid:**
   - Must verify info@nextgendonacademy.com

3. **Check function logs:**
   ```bash
   firebase functions:log --only onEnquiryCreated
   ```

4. **Test function manually:**
   - Go to Firebase Console → Firestore
   - Add a test document to 'enquiries' collection
   - Check if function triggers

### Emails going to spam?

1. Complete SendGrid domain authentication (recommended for production)
2. Add SPF and DKIM records to your domain DNS
3. Guide: Settings → Sender Authentication → Authenticate Your Domain

## Next Steps (Optional Enhancements)

1. **Add SMS notifications** for urgent enquiries (Twilio)
2. **Email drip campaign** for newsletter subscribers
3. **Admin dashboard** to view all enquiries/subscribers
4. **Integrate with CRM** (HubSpot, Salesforce)
5. **A/B test email templates**

## Support

If you need help:
- SendGrid Docs: https://docs.sendgrid.com/
- Firebase Functions Docs: https://firebase.google.com/docs/functions

---

**Ready to go live?** Follow Steps 1-3 above to activate your email notifications!
