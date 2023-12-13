import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const todayDate = new Date().toLocaleDateString();

    return (
        <div className="flex justify-center items-center bg-white p-4">
            <div className="max-w-6xl bg-white p-6 rounded-lg">
                <h1 className="text-xl font-semibold text-center mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-4">Last updated: {todayDate}</p>

                <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                <p>Olly, your personal AI social media assistant, is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the handling of information in relation to the Olly extension, including what information we do not collect, how we use data, and your rights concerning privacy.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">2. Information We Do Not Collect</h2>
                <p>Olly is built to enhance your social media experience without collecting any personal information. The extension facilitates smart, AI-powered interactions on various social media platforms without storing or processing any personal user data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">3. Data Storage and Security</h2>
                <p>As Olly does not collect personal information, there is no risk of personal data breaches. The extension stores user preferences locally, which are utilized solely to personalize your experience and do not contain any personal data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">4. Permissions and Functionality</h2>
                <p>Olly requires certain browser permissions, like access to your active tab, to function effectively. These permissions are used strictly for operational purposes and do not involve the collection or processing of personal data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">5. Adherence to Privacy Laws</h2>
                <p>Olly is dedicated to complying with relevant privacy laws and regulations. Our practices are designed to uphold legal standards and respect your privacy rights.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">6. Policy Updates</h2>
                <p>Our Privacy Policy may be updated to reflect changes in our practices or legal obligations. We will inform users of any significant changes by updating the [Last updated] date at the top of this policy. Regular review of this policy is recommended.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">7. Contact Us</h2>
                <p>For any questions or concerns about our Privacy Policy or practices, please reach out to us at yash@yashthakker.com.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
