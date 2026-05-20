import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Nimer",
  description: "Terms and Conditions for Nimer services.",
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg, #07070e)", color: "var(--fg, #eef0f8)", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <a href="/" style={{ color: "#6366f1", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>
          ← Back to nimer.dev
        </a>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
          Terms and Conditions
        </h1>
        <p style={{ color: "#7a859e", fontSize: 14, marginBottom: 48 }}>
          Last updated: May 5, 2026
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By accessing or using Nimer ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service. Nimer is operated by Majdi Bali ("we", "us", or "our").`,
          },
          {
            title: "2. Description of Service",
            body: `Nimer provides a Python SDK and web dashboard that intelligently routes Claude API requests to the most cost-effective model (Haiku, Sonnet, or Opus) based on task complexity. The Service includes a 14-day free trial followed by paid subscription plans.`,
          },
          {
            title: "3. User Accounts",
            body: `You must create an account to use the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`,
          },
          {
            title: "4. API Keys",
            body: `You are responsible for keeping your Nimer API keys secure. Do not share your API keys publicly. We are not liable for any damages resulting from unauthorized use of your API keys. You may revoke and regenerate API keys at any time from your dashboard.`,
          },
          {
            title: "5. Acceptable Use",
            body: `You agree not to use the Service to: (a) violate any applicable laws or regulations; (b) infringe the intellectual property rights of others; (c) transmit harmful, offensive, or malicious content; (d) attempt to gain unauthorized access to our systems; (e) resell or sublicense the Service without prior written consent.`,
          },
          {
            title: "6. Payment and Billing",
            body: `Paid plans are billed monthly. Payments are processed through our US company via Stripe (or another processor we disclose at checkout). By subscribing, you authorize us to charge your payment method on a recurring basis. Subscriptions auto-renew unless cancelled before the renewal date. The Scale plan may be fulfilled manually via direct contact when noted on the pricing page.`,
          },
          {
            title: "7. Free Trial",
            body: `New accounts receive a 14-day free trial. No credit card is required for the trial. After the trial period, continued access to paid features requires a subscription. We reserve the right to modify or discontinue the free trial at any time.`,
          },
          {
            title: "8. Refunds",
            body: `If you are not satisfied with the Service, contact us at nimershahm@gmail.com within 7 days of your first charge for a full refund. Refund requests after 7 days are evaluated on a case-by-case basis.`,
          },
          {
            title: "9. Data and Privacy",
            body: `We collect and process data as described in our Privacy Policy. We do not store the content of your API requests. We collect usage metadata (token counts, model used, cost) to provide the Service. Your data is not sold to third parties.`,
          },
          {
            title: "10. Service Availability",
            body: `We strive to maintain 99.9% uptime but do not guarantee uninterrupted availability. We are not liable for any losses resulting from service downtime, maintenance, or technical issues. We will notify users of planned maintenance when possible.`,
          },
          {
            title: "11. Intellectual Property",
            body: `The Nimer SDK is open source and licensed under the MIT License. The dashboard, API, and all associated software remain the property of Nimer. You may not copy, modify, or distribute the dashboard software without permission.`,
          },
          {
            title: "12. Limitation of Liability",
            body: `To the maximum extent permitted by law, Nimer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or data, arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 3 months preceding the claim.`,
          },
          {
            title: "13. Termination",
            body: `We reserve the right to suspend or terminate your account at any time for violation of these Terms. You may cancel your account at any time from the dashboard. Upon termination, your access to the Service will cease and your data may be deleted after 30 days.`,
          },
          {
            title: "14. Changes to Terms",
            body: `We may update these Terms at any time. We will notify users of material changes via email. Continued use of the Service after changes constitutes acceptance of the new Terms.`,
          },
          {
            title: "15. Contact",
            body: `For questions about these Terms, contact us at: nimershahm@gmail.com`,
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: "#eef0f8" }}>
              {section.title}
            </h2>
            <p style={{ color: "#a0a4b4", lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              {section.body}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
