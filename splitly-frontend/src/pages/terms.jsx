import MainLayout from "../layouts/mainLayout";

export default function Terms() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
        <div className="space-y-4">
          <p>
            By using Splitly, you agree to the following terms. These terms are
            meant to keep usage fair and protect the project creator from
            unintended liabilities.
          </p>

          <h4 className="text-xl font-semibold mt-4">Usage</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Splitly is a free tool for personal and non-commercial use.</li>
            <li>
              Anyone is allowed to use the app for managing and splitting shared
              expenses.
            </li>
            <li>
              You agree not to misuse or abuse the platform for illegal or
              malicious purposes.
            </li>
          </ul>

          <h4 className="text-xl font-semibold mt-4">Disclaimer</h4>
          <p>
            Splitly is provided "as is" without any guarantees. While I try to
            ensure the app works correctly, I make no warranties about data
            accuracy, availability, or performance.
          </p>
          <p>
            You use this tool at your own risk. I will not be held responsible
            for any loss, data issues, or conflicts that arise from the use of
            this app.
          </p>

          <h4 className="text-xl font-semibold mt-4">Changes to the Terms</h4>
          <p>
            These terms may be updated at any time. It is your responsibility to
            review them periodically. Continued use of the app constitutes
            acceptance of any changes.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
