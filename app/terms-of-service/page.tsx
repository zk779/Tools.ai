export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the GetDesiredFormat website and services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>
            GetDesiredFormat provides online file conversion and manipulation services. We reserve the right to modify,
            suspend, or discontinue any part of the service at any time without notice.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Maintaining the confidentiality of your account</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of the service complies with all applicable laws</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
          <p>
            You retain all rights to the content you upload to our service. By using our service, you grant us a license
            to process and convert your files as necessary to provide the service.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            GetDesiredFormat shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of or inability to use the service.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
            changes via email or through the website.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in
            which GetDesiredFormat is established, without regard to its conflict of law provisions.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at terms@getdesiredformat.com.
          </p>
        </section>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  )
}

