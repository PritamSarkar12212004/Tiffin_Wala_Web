import { useState } from 'react';

function AccountDeletePage() {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        reason: '',
        confirmDeletion: false,
        feedback: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    const reasons = [
        "Found a better alternative",
        "Privacy concerns",
        "Too expensive",
        "Service quality issues",
        "Moving to different location",
        "Dietary requirements changed",
        "Technical issues with app",
        "Not using the service anymore",
        "Other"
    ];

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted</h2>
                    <p className="text-gray-600 mb-6">
                        Your account deletion request has been received. We'll process it within 7 business days and send a confirmation to your registered phone number.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left mb-6">
                        <h3 className="font-semibold text-yellow-800 mb-2">What happens next?</h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• All your personal data will be permanently deleted</li>
                            <li>• Order history and preferences will be removed</li>
                            <li>• You'll receive a confirmation message</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Delete Your Account
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    We're sorry to see you go. Please provide your details to request account deletion.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Registered Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your registered phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Reason for Leaving *
                        </label>
                        <select
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                            <option value="">Select a reason</option>
                            {reasons.map((r, i) => (
                                <option key={i} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>

                    {/* Feedback */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Feedback (Optional)
                        </label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            rows={4}
                            placeholder="We'd love to hear how we can improve..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Confirmation */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="confirmDeletion"
                            checked={formData.confirmDeletion}
                            onChange={handleChange}
                            className="mt-1 mr-3 w-5 h-5 text-red-500 bg-white border-red-300 rounded focus:ring-red-500"
                            required
                        />
                        <label className="text-sm text-gray-700">
                            I confirm that I want to permanently delete my account. This action cannot be undone.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!formData.confirmDeletion || isSubmitting}
                        className={`w-full py-3 rounded-xl font-semibold transition-colors
              ${formData.confirmDeletion && !isSubmitting
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        {isSubmitting ? 'Processing...' : 'Delete My Account'}
                    </button>
                </form>

                {/* Support */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Need help? Contact our support team at{' '}
                    <a href="mailto:support@tiffinwala.com" className="text-green-500 hover:text-green-600 font-semibold">
                        support@tiffinwala.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default AccountDeletePage;
    