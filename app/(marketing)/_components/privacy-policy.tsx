import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const todayDate = new Date().toLocaleDateString();

    return (
        <div className="flex justify-center items-center bg-white p-4">
            <div className="max-w-6xl bg-white p-6 rounded-lg">
                <h1 className="text-xl font-semibold text-center mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-4">Last updated: 13th June, 2024.</p>

                <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                <p>TabSlap, the ultimate free Chrome tab productivity extension, is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the handling of information in relation to the TabSlap extension, including what information we currently do not collect, how we may use data in the future, and your rights concerning privacy.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">2. Information We Currently Do Not Collect</h2>
                <p>At present, TabSlap does not collect any personal information or user data. The extension is designed to enhance your productivity and browsing experience without storing or processing any personal data.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">3. Future Data Collection and Security</h2>
                <p>In the future, if TabSlap decides to collect user data to improve its functionality and user experience, we assure you that any collected data will be stored securely and will not be sold to third parties. We are committed to maintaining the highest standards of data protection and privacy.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">4. Data Storage and User Preferences</h2>
                <p>TabSlap stores user preferences locally, which are utilized solely to personalize your experience and do not contain any personal data. These preferences are not transmitted or stored on our servers.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">5. Permissions and Functionality</h2>
                <p>TabSlap requires certain browser permissions, like access to your tabs and browsing activity, to function effectively. These permissions are used strictly for operational purposes, such as monitoring tabs, providing reminders, and enhancing productivity features. TabSlap does not collect or process any personal data through these permissions.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">6. Adherence to Privacy Laws</h2>
                <p>TabSlap is dedicated to complying with relevant privacy laws and regulations. Our practices are designed to uphold legal standards and respect your privacy rights. As we evolve and introduce new features, we will ensure that our data collection and handling practices align with the most up-to-date privacy regulations.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">7. Policy Updates</h2>
                <p>Our Privacy Policy may be updated to reflect changes in our practices or legal obligations. We will inform users of any significant changes by updating the &#8220;Last Updated Date&#8221; at the top of this policy. Regular review of this policy is recommended to stay informed about how we protect your privacy.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">8. Contact Us</h2>
                <p>For any questions or concerns about our Privacy Policy or practices, please reach out to us at support@tabslap.me.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;