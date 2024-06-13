interface howToUseData {
    featureName: string;
    featureDescription: string;
    imageLink: string;
    formatImage: 'left' | 'right';
  }

const howToUseData: howToUseData[] = [
    {
        featureName: "Step 1: Add Tabslap to Google Chrome",
        featureDescription: "Head to the Chrome Web Store and add Tabslap to your browser. You can also click Add Tabslap to Chrome via the Navbar.",
        imageLink: "/step_1.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 2: Turn on and Refresh the Page",
        featureDescription: "Make sure that the Tabslap extension is enabled in your browser. Please Refresh the page if you have just installed Tabslap. Note all pages need to be refreshed after installing Tabslap. We recommend restarting your browser after installing Tabslap.",
        imageLink: "/step_2.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 3: Select Model to Use",
        featureDescription: "Choose between different AI models like GPT-3.5 or GPT-4 for personalized interactions. To check costs/billing for each of these models, please refer to OpenAI usage costs at https://openai.com/pricing",
        imageLink: "/step_3.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 4: Setup your Activation Key",
        featureDescription: "Enter your activation key first to start using Tabslap. Get your Activation key: https://safegpt.lemonsqueezy.com/checkout/buy/ccbea37a-e676-45b7-8052-e2f45c0210ca - if you already bought the key, you can find it in your email or your lemonsqeezy orders. Note you can have a maximum of 5 activation keys.",
        imageLink: "/step_4.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 5: Setup your OpenAI API Key",
        featureDescription: "Enter your activation key and OpenAI API key to start using Tabslap: https://platform.openai.com/account/api-keys - We never access any of your data. You can read on Chrome extension permissions and also our Privacy Policy for more information. Also note OpenAI will bill you per month based on your usage.",
        imageLink: "/step_5.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 6: Customize Your Commenting Style",
        featureDescription: "Set your preferred style of commenting, including the tone and length of replies.",
        imageLink: "/step_6.gif",
        formatImage: "right"
    },
    {
        featureName: "You are all set!",
        featureDescription: "Select the text across Facebook, Reddit, LinkedIn, ProductHunt, Instagram, X and YouTube! and Tabslap will popup in the bottom middle of your screen. If you don not see Tabslap, please refresh the page or check if the extension is enabled as shown in step 1.",
        imageLink: "/step_7.gif",
        formatImage: "right"
    },

  ];

  
  export default howToUseData;
  