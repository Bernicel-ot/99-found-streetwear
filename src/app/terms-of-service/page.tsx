export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 street-font">Terms of Service</h1>
        <p className="mb-6 text-gray-700">By using our website and purchasing products, you agree to the following terms and conditions.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Site</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>Products are for personal use only</li>
          <li>Do not misuse or attempt to harm the website</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Orders & Payments</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>All sales are subject to availability and confirmation</li>
          <li>Prices and product details may change without notice</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Returns & Refunds</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>Contact support@99found.com for return requests</li>
          <li>Refunds are processed according to our policy</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="mb-6 text-gray-700">For questions about these terms, email support@99found.com.</p>
      </div>
    </div>
  );
}
