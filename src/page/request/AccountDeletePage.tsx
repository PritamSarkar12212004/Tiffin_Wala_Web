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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
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
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted</h2>
                    <p className="text-gray-600 mb-6">
                        Your account deletion request has been received. We'll process it within 7 business days and send a confirmation to your registered phone number.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
                        <h3 className="font-semibold text-yellow-800 mb-2">What happens next?</h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• All your personal data will be permanently deleted</li>
                            <li>• Order history and preferences will be removed</li>
                            <li>• You'll receive a confirmation message</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full mt-6 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Delete Your Account
                </h1>
                <p className="text-gray-600 max-w-md mx-auto">
                    We're sorry to see you go. Please provide your details to request account deletion.
                </p>
            </div>

            {/* Warning Banner */}
            <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-red-800 mb-2">Important Notice</h3>
                            <ul className="text-red-700 text-sm space-y-1">
                                <li>• This action is permanent and cannot be undone</li>
                                <li>• All your data including orders and preferences will be deleted</li>
                                <li>• Any active subscriptions will be cancelled</li>
                                <li>• You'll need to create a new account if you wish to use our services again</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                            Registered Phone Number *
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                placeholder="Enter your registered phone number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">
                            Enter the phone number associated with your Tiffin Wala account
                        </p>
                    </div>

                    {/* Reason for Deletion */}
                    <div className="space-y-2">
                        <label htmlFor="reason" className="block text-sm font-semibold text-gray-700">
                            Reason for Leaving *
                        </label>
                        <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                            <option value="">Select a reason</option>
                            {reasons.map((reason, index) => (
                                <option key={index} value={reason}>{reason}</option>
                            ))}
                        </select>
                    </div>

                    {/* Additional Feedback */}
                    <div className="space-y-2">
                        <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700">
                            Additional Feedback (Optional)
                        </label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            rows="4"
                            placeholder="We'd love to hear how we can improve our service..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="confirmDeletion"
                                checked={formData.confirmDeletion}
                                onChange={handleChange}
                                required
                                className="w-4 h-4 text-red-500 bg-white border-red-300 rounded focus:ring-red-500 mt-1"
                            />
                            <div>
                                <span className="font-semibold text-red-800">
                                    I understand that this action is permanent and cannot be undone
                                </span>
                                <p className="text-sm text-red-700 mt-1">
                                    By checking this box, I confirm that I want to permanently delete my Tiffin Wala account and all associated data.
                                </p>
                            </div>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.confirmDeletion || isSubmitting}
                            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${formData.confirmDeletion && !isSubmitting
                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </div>
                            ) : (
                                'Delete My Account Permanently'
                            )}
                        </button>
                    </div>

                    {/* Support Info */}
                    <div className="text-center pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Need help? Contact our support team at{' '}
                            <a href="mailto:support@tiffinwala.com" className="text-green-500 hover:text-green-600 font-semibold">
                                support@tiffinwala.com
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AccountDeletePage;