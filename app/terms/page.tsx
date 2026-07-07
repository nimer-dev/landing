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
          Last updated: July 8, 2026
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By accessing or using nimer.dev ("the Website"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Website. Nimer (ByNimer) is an AI research effort operated by Majdi Bali ("we", "us", or "our").`,
          },
          {
            title: "2. About Nimer",
            body: `Nimer is an artificial-intelligence research company. This Website is an informational and research publication site: it presents our research papers, project updates, and an option to follow our work. We do not sell a product or service through this Website, and no account, payment, or subscription is required to use it.`,
          },
          {
            title: "3. Use of the Website",
            body: `You may read, reference, and share the content on this Website for personal, educational, and non-commercial purposes, with attribution. You agree not to: (a) violate any applicable laws or regulations; (b) attempt to gain unauthorized access to our systems or disrupt the Website; (c) scrape, mirror, or republish the Website at scale without prior written consent; (d) misrepresent our research or attribute claims to us that we have not made.`,
          },
          {
            title: "4. Updates and Email Sign-up",
            body: `If you choose to submit your email address to follow our work, you consent to receive occasional updates about our research. We do not send spam and do not sell your email address. You may unsubscribe at any time by contacting us at nimershahm@gmail.com.`,
          },
          {
            title: "5. Research Content and Accuracy",
            body: `The research, results, and figures published here describe ongoing scientific work. They are provided "as is" for informational purposes, may be preliminary, and may be revised, superseded, or withdrawn as the research progresses. Nothing on this Website is professional, legal, financial, or medical advice, and it should not be relied upon as such.`,
          },
          {
            title: "6. Intellectual Property",
            body: `All content on this Website — including research papers, text, figures, diagrams, logos, and the Nimer name — is the property of Nimer or its owner and is protected by applicable intellectual-property laws. Certain inventions described in our research are the subject of one or more pending patent applications ("patent-pending"). No license to any patent, trademark, or other intellectual-property right is granted by your use of this Website, except the limited permission to read and reference content described in Section 3. Any source code we release separately is governed by the license accompanying that code.`,
          },
          {
            title: "7. Third-Party Links",
            body: `This Website may link to third-party sites (for example, our social media profiles or hosting providers). We are not responsible for the content, policies, or practices of those third parties, and linking does not imply endorsement.`,
          },
          {
            title: "8. Privacy",
            body: `We collect only the minimal information needed to operate this Website. If you submit your email address, we store it solely to send you the updates you requested. We do not sell personal data to third parties. Basic, aggregate technical information (such as standard server logs) may be processed by our hosting and form providers to deliver and secure the Website.`,
          },
          {
            title: "9. Disclaimer of Warranties",
            body: `This Website and its content are provided "as is" and "as available", without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, or non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.`,
          },
          {
            title: "10. Limitation of Liability",
            body: `To the maximum extent permitted by law, Nimer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or data, arising from your use of, or inability to use, this Website or its content.`,
          },
          {
            title: "11. Changes to These Terms",
            body: `We may update these Terms at any time. Material changes will be reflected by updating the "Last updated" date above. Your continued use of the Website after changes take effect constitutes acceptance of the revised Terms.`,
          },
          {
            title: "12. Contact",
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
