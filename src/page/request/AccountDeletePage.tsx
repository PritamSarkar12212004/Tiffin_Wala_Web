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
            {/* ...same form code as before... */}
        </div>
    );
}

export default AccountDeletePage;
