function PrivacyNPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    At Tiffin Wala, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Last Updated */}
                <div className="bg-green-500 text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">Last Updated:</span>
                        <span>{new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    {/* Information We Collect */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            Information We Collect
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="font-semibold text-gray-700 mb-3">Personal Information</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Name and contact details
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Delivery address
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Payment information
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Dietary preferences
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="font-semibold text-gray-700 mb-3">Usage Data</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Order history
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Device information
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        Location data
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        App usage patterns
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            How We Use Your Information
                        </h2>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-blue-700 mb-3">Service Delivery</h3>
                                    <ul className="space-y-2 text-blue-600">
                                        <li>• Process your tiffin orders</li>
                                        <li>• Manage deliveries</li>
                                        <li>• Handle payments</li>
                                        <li>• Provide customer support</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-700 mb-3">Improvement</h3>
                                    <ul className="space-y-2 text-blue-600">
                                        <li>• Enhance service quality</li>
                                        <li>• Personalize meal plans</li>
                                        <li>• Send relevant offers</li>
                                        <li>• Improve user experience</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            Data Security
                        </h2>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="text-green-800">
                                        We implement industry-standard security measures including encryption, secure servers,
                                        and regular security audits to protect your personal information from unauthorized access,
                                        alteration, or disclosure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            Your Rights
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: "Access", desc: "View your personal data" },
                                { title: "Correction", desc: "Update inaccurate information" },
                                { title: "Deletion", desc: "Request data removal" },
                                { title: "Portability", desc: "Export your data" },
                                { title: "Objection", desc: "Opt-out of processing" },
                                { title: "Restriction", desc: "Limit data usage" }
                            ].map((right, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-gray-800 mb-2">{right.title}</h3>
                                    <p className="text-sm text-gray-600">{right.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            Contact Us
                        </h2>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <p className="text-gray-700 mb-4">
                                For any privacy-related questions or to exercise your rights, please contact our Data Protection Officer:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-green-600">📧</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-600">privacytiffinwala@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-green-600">📞</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <p className="text-gray-600">+91 7796419792</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Consent Section */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                        <p className="text-yellow-800 font-semibold">
                            By using Tiffin Wala services, you consent to our Privacy Policy and agree to its terms.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="max-w-4xl mx-auto mt-8 text-center">
                <p className="text-gray-500 text-sm">
                    We may update this policy periodically. Please check this page for the latest version.
                </p>
            </div>
        </div>
    );
}

export default PrivacyNPolicy;