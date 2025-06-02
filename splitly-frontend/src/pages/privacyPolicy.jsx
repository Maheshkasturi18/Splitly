import MainLayout from "../layouts/mainLayout";

export default function Privacy() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <div className="space-y-4">
          <p>
            Splitly respects your privacy. This app is designed to minimize the
            collection of any personal data, and no registration or personal
            details like email, name, or phone number are required to use it.
          </p>

          <h4 className="text-xl font-semibold mt-4">What We Collect</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>We do not collect any personal information by default.</li>
            <li>
              Temporary data (like group names and expenses) may be stored in
              your browser or in our database if using shared links or group
              saving features.
            </li>
            <li>
              If hosting analytics (like Google Analytics or Vercel Insights),
              anonymous data like page views and browser types may be collected
              for improving performance.
            </li>
          </ul>

          <h4 className="text-xl font-semibold mt-4">Third-Party Services</h4>
          <p>
            If third-party services are used (e.g., hosting or analytics), they
            may have their own privacy policies. As of now, no external login,
            tracking scripts, or advertisements are embedded.
          </p>

          <h4 className="text-xl font-semibold mt-4">Your Consent</h4>
          <p>
            By using this site, you agree to this privacy policy. If you are
            concerned about your privacy, you can simply stop using the app or
            self-host your own version via GitHub.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
