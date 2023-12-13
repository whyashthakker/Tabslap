// PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const todayDate = new Date().toLocaleDateString();

    return (
        <div className="flex justify-center items-center bg-white p-4">
            <div className="max-w-6xl bg-white p-6 rounded-lg">
                <h1 className="text-xl font-semibold text-center mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-4">Last updated: December 7th, 2023.</p>

                <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                <p>safeGPT, a Chrome extension, is committed to safeguarding your privacy. This Privacy Policy explains how we handle information related to your use of the safeGPT extension, including the types of information we do not collect, our data use practices, and your privacy rights.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">2. Non-collection of Personal Information</h2>
                <p>safeGPT is designed to operate without collecting any personal information. The extension enhances your browsing experience on chat.openai.com by providing features such as real-time redaction of sensitive data, content generation, and interactive web communication, all without storing or processing personal user data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">3. Data Storage and Security</h2>
                <p>As safeGPT does not collect, store, or transmit personal information, there is no risk of personal data breaches. User settings and preferences, which are stored locally, do not contain personal data and are used solely to maintain your personalized experience with safeGPT.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">4. Permissions and Usage</h2>
                <p>safeGPT requires browser permissions, such as access to storage and the active tab, to perform its functions. These permissions are strictly for operational purposes and do not involve the collection, processing, or transmission of personal data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">5. Compliance with Privacy Laws</h2>
                <p>safeGPT is committed to complying with privacy laws and regulations. We ensure that our practices align with legal standards and respect user privacy rights.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">6. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy to reflect changes in our practices or legal requirements. We will notify users of any significant changes by updating the Last updated date at the top of this policy. You are encouraged to review this policy periodically.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">7. Contact Information</h2>
                <p>If you have questions or concerns about our Privacy Policy or practices, please contact us at support@explainx.ai.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
