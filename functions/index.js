const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

// SendGrid API Key will be set via environment variable
// Set it with: firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
const SENDGRID_API_KEY = functions.config().sendgrid?.key;
if (SENDGRID_API_KEY) {
    sgMail.setApiKey(SENDGRID_API_KEY);
}

// Your admin email for notifications
const ADMIN_EMAIL = 'info@nextgendonacademy.com';
const FROM_EMAIL = 'info@nextgendonacademy.com'; // Must be verified in SendGrid

/**
 * Send email notification when a new enquiry is submitted
 */
exports.onEnquiryCreated = functions.firestore
    .document('enquiries/{enquiryId}')
    .onCreate(async (snap, context) => {
        const enquiry = snap.data();
        const enquiryId = context.params.enquiryId;

        console.log('New enquiry received:', enquiryId);

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
exports.onNewsletterSubscribe = functions.firestore
    .document('newsletter/{subscriberId}')
    .onCreate(async (snap, context) => {
        const subscriber = snap.data();
        const subscriberId = context.params.subscriberId;

        console.log('New newsletter subscriber:', subscriberId);

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
