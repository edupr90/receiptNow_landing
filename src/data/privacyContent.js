export const privacyContent = [
  {
    title: '1. Purpose of the App',
    body: `ReceiptNow is a **smart receipt scanner and expense tracking tool**.

- The App is **not a bank, financial institution, or financial advisor**.
- We do not provide investment, tax, accounting, or legal advice.
- You are solely responsible for your financial decisions and for verifying the accuracy of any data extracted by the App's smart features.

**Disclaimer:** We are not liable for any financial loss, damages, or decisions made using this App. All automatically extracted data, including but not limited to extracted receipt amounts, merchant names, dates, and categorizations, is provided on a best-effort basis and may contain errors. You acknowledge and accept full responsibility for reviewing and confirming the accuracy of all information before relying on it.`,
  },
  {
    title: '2. Data Collection & Privacy',
    body: `How your data is stored depends on whether you have signed in and enabled Cloud Sync.

**Free tier & signed-out users — local-only storage**

- All information you enter or scan (receipts, expenses, budgets, categories) is stored **locally on your device**.
- We **do not collect, transmit, or store this data on external servers**.
- Receipt images are sent to Google Gemini (via Firebase AI) only at the moment of scanning, for the sole purpose of extracting receipt data. Images are not retained beyond the processing session, and the extracted data is returned directly to your device. See Section 2.1 for details.
- You are fully in control of your information. If you delete the App or reset your device, we cannot access, recover, or restore your data on your behalf.

**Paid plans with Cloud Sync — optional cloud storage**

When you sign in with Google or Apple on a paid plan (Plus, Pro, or Unlimited), Cloud Sync is enabled so you can access your data across your devices. With Cloud Sync enabled:

- Your **receipt data** (merchant, amounts, dates, notes), **receipt images**, **line items**, **categories**, **tags**, **budgets**, and **app settings** are stored in Firebase Firestore and Firebase Storage, scoped to your user account.
- Same-platform devices (e.g., two iPhones, or two Android devices) on the same account share a synced state. iOS and Android devices on the same account keep independent scan limits because subscriptions are platform-specific.
- We never sell, rent, or share your data with third parties for advertising.
- You can sign out at any time to stop syncing, or delete your account from the "Delete Account" option in the app to permanently remove your cloud-stored data.

**Important:** Local data on your device is not removed when you sign out or delete your account — only cloud data is removed. If you uninstall the App, local data is permanently deleted and cannot be recovered. We recommend using the built-in **manual backup** feature in the App to create a backup file before uninstalling or switching devices.`,
  },
  {
    title: '2.1 Third-Party Services',
    body: `The App uses the following third-party services to process or store limited data:

- **Google Gemini (via Firebase AI)** — Receipt images are securely transmitted to Google's servers for smart processing. Images are not retained beyond the processing session. Extracted data is returned directly to your device.
- **Firebase Authentication** — Used when you sign in with Google or Apple. Stores your account identifier, email, and display name to authenticate you across devices.
- **Firebase Firestore & Firebase Storage (Cloud Sync, paid plans only)** — When Cloud Sync is enabled, your receipt data, receipt images, line items, categories, tags, budgets, and app settings are stored under your user account so they can be synchronized across your devices. Data is owned by you and removed when you delete your account.
- **In-app purchases & subscriptions** — Handled by Apple App Store or Google Play.
- **Subscription management** — Handled by RevenueCat.
- **Advertisements** (for free-tier users) — Handled by Google AdMob. Ads are not targeted based on your financial data or receipt content.
- **Analytics & crash reporting** — Handled by Firebase. Only anonymized, non-financial data (device model, OS version, app performance metrics) is collected.

Each third party operates under its own privacy policy:

- Google Privacy Policy: https://policies.google.com/privacy
- Apple Privacy Policy: https://www.apple.com/legal/privacy/
- RevenueCat Privacy Policy: https://www.revenuecat.com/privacy`,
  },
  {
    title: '3. Subscription Options',
    body: `Pricing shown is for the U.S. store; **prices may vary by region and currency**. Subscriptions **auto-renew** unless canceled. You can cancel anytime in your App Store or Google Play settings.

**Free Tier:**
- 5 smart scans per week
- Advertisements displayed
- No export functionality

**Plus ($2.99/month):**
- 30 smart scans per week
- Ad-free experience
- Full export capabilities (PDF, CSV, Excel, ZIP)
- Cloud Sync across devices

**Pro ($5.99/month):**
- 60 smart scans per week
- Ad-free experience
- Full export capabilities (PDF, CSV, Excel, ZIP)
- Cloud Sync across devices
- Includes 3-day free trial

**Unlimited ($29.99/year):**
- Unlimited smart scans
- Ad-free experience
- Full export capabilities (PDF, CSV, Excel, ZIP)
- Cloud Sync across devices

**How Subscriptions Work:**
- Payment is charged to your **Apple ID** or **Google Play** account at confirmation of purchase.
- Subscriptions **renew automatically** unless you turn off auto-renew at least 24 hours before the end of the current period.
- Your account will be charged for renewal within 24 hours prior to the end of the current period.
- Manage or cancel your subscription in **App Store** / **Google Play** account settings after purchase.
- If your subscription lapses, premium features will no longer be available, and your plan will revert to the free tier.

**Terms of Use (EULA):**
For iOS users, your use of subscriptions is also governed by the Apple Standard End User License Agreement (EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/`,
  },
  {
    title: '4. Camera & Photo Permissions',
    body: `The App requests access to your device's camera and photo library solely for scanning receipts.

- **Camera Access:** Used only for scanning receipts in real-time. No images are captured without your explicit action. The camera feed is not recorded or transmitted beyond receipt processing.
- **Photo Library Access:** Used only for importing receipt images you explicitly select. No background scanning or indexing of your photo library occurs.

These permissions can be revoked at any time through your device settings. The App will continue to function with reduced functionality if these permissions are not granted.`,
  },
  {
    title: '5. Limitation of Liability & Disclaimer of Warranties',
    body: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.

**User Assumption of Risk & Liability:**

By using ReceiptNow, you expressly acknowledge and agree that:

- You use the App entirely at your own risk. The entire risk as to the quality, accuracy, and performance of the App rests with you.
- You are solely responsible for any decisions, actions, or financial consequences that result from your use of the App or reliance on any data or information provided by the App, including automatically extracted receipt data.
- You are solely responsible for verifying the accuracy, completeness, and reliability of all data extracted, displayed, or exported by the App before relying on it for any purpose, including but not limited to tax filings, expense reports, budgeting, or financial record-keeping.
- You are solely responsible for maintaining backups of your data. Since all data is stored locally on your device, loss of data due to device failure, App deletion, software updates, or any other cause is your responsibility.

**Limitation of Liability:**

To the maximum extent permitted by applicable law, in no event shall ReceiptNow, its developer, affiliates, licensors, or service providers be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses, arising out of or in connection with:

- Your use of or inability to use the App
- Any errors, inaccuracies, or omissions in processed data or any other content provided by the App
- Unauthorized access to or alteration of your data
- Loss of data resulting from device failure, App deletion, or any other cause
- Any third-party conduct or content, including but not limited to processing services
- Any other matter relating to the App

You agree to indemnify, defend, and hold harmless ReceiptNow and its developer from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of the App or your violation of these terms.

This limitation of liability applies regardless of the legal theory on which the claim is based, whether in contract, tort (including negligence), strict liability, or otherwise, even if ReceiptNow has been advised of the possibility of such damages.`,
  },
  {
    title: '6. Children\'s Privacy',
    body: `The App is not directed toward children under 13. We do not knowingly collect data from children. Since all data is local-only, parents remain responsible for supervising device use.`,
  },
  {
    title: '7. Your Rights',
    body: `You have full and immediate control over your data at all times:

**Access:** View all your data at any time within the App.

**Export:** Download your data in PDF, CSV, Excel, or ZIP format through the Reports feature.

**Backup:** Save and restore your data using the built-in backup feature. Transfer your data to another device or create backups to prevent data loss.

**Correction:** Edit or correct any receipt data within the App.

**Deletion:** Delete any individual receipt, expense, or all data directly within the App. You may also delete all local data by uninstalling the App. If you have Cloud Sync enabled, you can remove your cloud-stored data at any time by using the "Delete Account" option inside the app, which permanently deletes your Firebase account and all associated cloud data.

**Opt-Out:** You can opt out of analytics data collection in the App settings. Ad personalization can be disabled in your device settings. You can sign out at any time to stop Cloud Sync without deleting your account.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update these terms occasionally. Continued use of the App after updates means you accept the changes. When we make material changes, we will update the "Last Updated" date at the top of this page and may notify you through the App.`,
  },
  {
    title: '9. Contact & Support',
    body: `If you have any questions about these Terms or the Privacy Policy, please contact us at:

**Email:** bybsupport@budgetyourbudget.com`,
  },
]
