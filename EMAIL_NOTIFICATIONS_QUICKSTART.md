# Email Notifications - Quick Start

## 🚀 What's Been Set Up

Automated email notifications for your NextGen DON Academy website:

### ✅ Enquiry Forms (Contact & Enquiry Pages)
- **User receives:** Confirmation email with their details
- **You receive:** Alert with their name, email, phone, message

### ✅ Newsletter Subscriptions
- **User receives:** Welcome email explaining what to expect
- **You receive:** Notification of new subscriber

## 📋 To Activate (3 Steps)

### 1. Get SendGrid API Key (5 minutes)

1. Sign up at [SendGrid.com](https://sendgrid.com/) (FREE - 100 emails/day)
2. Verify sender email: `info@nextgendonacademy.com`
3. Create API Key with "Mail Send" permission
4. Copy the API key (starts with `SG.`)

### 2. Configure Firebase (1 minute)

Open terminal and run:
```bash
firebase functions:config:set sendgrid.key="YOUR_API_KEY_HERE"
```

### 3. Deploy Functions (2 minutes)

```bash
firebase deploy --only functions
```

## ✨ That's It!

Your email notifications are now live. Test by submitting a form on your website.

## 📧 Email Examples

### Enquiry Confirmation (to user):
```
Subject: Thank you for your enquiry - NextGen DON Academy

Dear [Name],

Thank you for your interest in NextGen DON Academy's Director
of Nursing Leadership Certification Program.

We have received your enquiry and our team will review your
message and respond within 24 hours.

[Their enquiry details displayed]
```

### Enquiry Alert (to you):
```
Subject: 🔔 New Enquiry from [Name]

📧 New Enquiry Received!
Action Required: Follow up within 24 hours

Name: [Name]
Email: [Email]
Phone: [Phone]
Message: [Message]
```

## 🔍 Monitor & Test

**View logs:**
```bash
firebase functions:log
```

**Check SendGrid dashboard:**
https://app.sendgrid.com/

## 📖 Full Documentation

See `functions/SETUP_INSTRUCTIONS.md` for detailed guide and troubleshooting.

## 💡 Next Steps (Optional)

- Add SMS notifications for urgent enquiries
- Create email drip campaign for subscribers
- Build admin dashboard to view all submissions
- Integrate with your CRM

---

**Questions?** Check the full setup guide in `functions/SETUP_INSTRUCTIONS.md`
