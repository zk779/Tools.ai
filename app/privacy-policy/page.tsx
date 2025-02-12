export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At GetDesiredFormat, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our file conversion services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, use our
            services, or contact us for support. This may include:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Personal information (e.g., name, email address)</li>
            <li>Usage data (e.g., file types converted, frequency of use)</li>
            <li>Device and browser information</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, as well as to:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Process and deliver your file conversions</li>
            <li>Communicate with you about our services</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to
            restrict or object to certain processing of your data.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@getdesiredformat.com.</p>
        </section>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  )
}

