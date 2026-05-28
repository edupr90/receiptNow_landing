export const termsContent = [
  {
    title: '1. Introduction & Acceptance',
    body: `Welcome to ReceiptNow. By downloading, installing, or using the ReceiptNow mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.

These Terms constitute a legally binding agreement between you ("User," "you," or "your") and ReceiptNow ("we," "us," or "our"). We reserve the right to update these Terms at any time, and your continued use of the App constitutes acceptance of any modifications.`,
  },
  {
    title: '2. Description of Service',
    body: `ReceiptNow is a smart receipt scanner and expense tracking application. The App provides the following services:

- Scanning and digitizing paper and digital receipts using smart technology
- Automatic extraction of receipt data including merchant name, date, items, subtotals, tax, and totals
- Expense categorization and tracking
- Budget creation and monitoring
- Financial insights and spending pattern analysis
- Report generation and data export (PDF, CSV)

The Service is provided "as is" and "as available." We do not guarantee uninterrupted or error-free operation of the App.`,
  },
  {
    title: '3. Eligibility',
    body: `You must be at least 13 years of age to use the App. If you are under 18, you must have parental or guardian consent.

The App can be used without creating an account; in that case, all data is stored locally on your device. Users on a paid subscription may optionally sign in with Google or Apple to enable Cloud Sync, which creates an account on our backend (Firebase) to synchronize data across devices. See Section 4 for details.`,
  },
  {
    title: '4. User Content & Data',
    body: `You retain full ownership of all receipt images, financial data, and other content you submit to the App ("User Content").

**Free tier & signed-out users:** All User Content is stored exclusively on your device and is never uploaded to or stored on our servers, with the sole exception of receipt images temporarily transmitted to Google Gemini for smart processing (see Section 5).

**Paid plans with Cloud Sync:** When you sign in with Google or Apple on a paid plan, Cloud Sync is enabled. Your User Content (receipt data, receipt images, line items, categories, tags, budgets, and app settings) is stored in Firebase Firestore and Firebase Storage under your account so it can be synchronized across your devices. You can disable Cloud Sync by signing out, or permanently delete your cloud data via the "Delete Account" option in the app.

You are solely responsible for backing up local data that has not been synchronized. If you delete the App or clear its data while Cloud Sync is disabled, your User Content will be permanently deleted and cannot be recovered.

You are responsible for ensuring that any User Content you submit does not violate any applicable laws or third-party rights.`,
  },
  {
    title: '5. Smart Processing & Accuracy',
    body: `ReceiptNow uses smart technology (powered by Google's Gemini through Firebase) to scan and extract information from receipts. Receipt images are sent to Google's servers for processing only; the extracted data is returned to and stored exclusively on your device. You acknowledge and agree that:

- Extracted data is provided on a best-effort basis and may contain errors
- You are responsible for reviewing and verifying all extracted data before relying on it
- We do not guarantee 100% accuracy of scanned information
- Smart processing may not correctly interpret all receipt formats, handwriting, or damaged receipts
- You should not rely solely on the App for tax, legal, or financial compliance purposes

We continuously work to improve accuracy but cannot be held liable for any errors in data extraction.`,
  },
  {
    title: '6. Acceptable Use',
    body: `You agree not to:

- Use the App for any unlawful purpose or in violation of any applicable laws
- Submit fraudulent, falsified, or misleading receipt data
- Attempt to reverse-engineer, decompile, or disassemble the App
- Interfere with or disrupt the App's infrastructure or services
- Scrape, harvest, or collect data from the App by automated means
- Use the App to infringe on the intellectual property rights of others
- Share your account credentials with third parties
- Attempt to circumvent any security measures or access controls`,
  },
  {
    title: '7. Intellectual Property',
    body: `The ReceiptNow App, including its design, logo, user interface, code, and all related materials, is the intellectual property of ReceiptNow and is protected by copyright, trademark, and other intellectual property laws.

You may not reproduce, modify, distribute, or create derivative works of the App or its content without our prior written consent.`,
  },
  {
    title: '8. Subscriptions & Payments',
    body: `ReceiptNow offers both free and premium subscription tiers:

**Free Tier:** Basic receipt scanning and expense tracking features with usage limitations.

**Premium Subscription:** Access to all features including unlimited scanning, advanced insights, priority smart processing, and ad-free experience.

Subscription billing is managed through the Apple App Store or Google Play Store. By subscribing, you agree to their respective terms of service and billing policies.

- Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period
- You can manage and cancel your subscription through your device's app store settings
- Refunds are handled according to the policies of the applicable app store
- We reserve the right to modify subscription pricing with reasonable notice`,
  },
  {
    title: '9. Data Storage & Deletion',
    body: `**Local storage (default):** Your data is stored locally on your device. We do not store, sync, or back up your data to any cloud service unless you sign in on a paid plan and enable Cloud Sync.

**Cloud Sync (paid plans only):** If you sign in with Google or Apple while on a paid subscription, your User Content is stored in Firebase Firestore and Firebase Storage under your account so it can be synchronized across your devices. You can stop syncing at any time by signing out, or permanently delete your cloud data via the "Delete Account" option in the app.

You have the right to:

- Access all your data at any time within the App
- Export your data in PDF, CSV, Excel, or ZIP format
- Delete any individual receipt or expense entry
- Permanently delete all cloud-stored data (signed-in users) via "Delete Account" in app settings

**Important:** Uninstalling the App or clearing app data will permanently delete all local information on that device. If Cloud Sync is enabled, your cloud data persists until you delete your account. We recommend exporting your data before uninstalling the App if Cloud Sync is not in use.`,
  },
  {
    title: '10. Third-Party Services',
    body: `The App integrates with the following third-party services:

- **Firebase Authentication (Google):** Sign-in with Google or Apple for paid plans
- **Firebase Firestore & Firebase Storage (Google):** Cloud Sync storage for paid plans (receipt data, receipt images, line items, categories, tags, budgets, and app settings)
- **Firebase Analytics & Crash Reporting (Google):** Anonymized usage and performance metrics
- **Google Gemini (via Firebase AI):** Receipt scanning and data extraction (images are processed and not stored)
- **RevenueCat:** Subscription management
- **Google AdMob:** Advertising (free tier only)

Each third-party service operates under its own terms of service and privacy policy. We encourage you to review these policies. We are not responsible for the practices or policies of third-party services.`,
  },
  {
    title: '11. Limitation of Liability',
    body: `To the maximum extent permitted by applicable law:

- We are not liable for any financial decisions made based on data provided by the App
- We are not liable for any data loss resulting from device failure, service interruptions, or technical issues
- We are not liable for errors in smart data extraction
- Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim
- We are not liable for any indirect, incidental, special, consequential, or punitive damages

The App is a financial tracking tool and does not constitute financial, tax, or legal advice.`,
  },
  {
    title: '12. Termination',
    body: `We reserve the right to revoke your license to use the App at any time if:

- You violate these Terms
- You engage in fraudulent or illegal activities
- We are required to do so by law

Upon termination of your license, you should cease using the App. Since all data is stored locally on your device, you may export your data before uninstalling.`,
  },
  {
    title: '13. Changes to Terms',
    body: `We reserve the right to modify these Terms at any time. When we make material changes, we will:

- Update the "Last Updated" date at the top of this page
- Notify you through the App or via email
- Provide a reasonable period to review changes before they take effect

Your continued use of the App after changes take effect constitutes acceptance of the modified Terms.`,
  },
  {
    title: '14. Governing Law',
    body: `These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from or relating to these Terms or the App shall be resolved through binding arbitration or in the courts of competent jurisdiction.`,
  },
  {
    title: '15. Contact Information',
    body: `If you have any questions about these Terms, please contact us at:

**Email:** bybsupport@budgetyourbudget.com

We aim to respond to all inquiries within 5 business days.`,
  },
]
