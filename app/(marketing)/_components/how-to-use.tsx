interface howToUseData {
    featureName: string;
    featureDescription: string;
    imageLink: string;
    formatImage: 'left' | 'right';
  }

const howToUseData: howToUseData[] = [
    {
        featureName: "Step 1: Add Olly to Google Chrome",
        featureDescription: "Head to the Chrome Web Store and add Olly to your browser. You can also click here add Olly to Chrome via the Navbar.",
        imageLink: "/step_1.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 2: Turn on and Refresh the Page",
        featureDescription: "Make sure that the Olly extension is enabled in your browser. Please Refresh the page if you have just installed Olly.",
        imageLink: "/step_2.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 3: Select Model to Use",
        featureDescription: "Choose between different AI models like GPT-3.5 or GPT-4 for personalized interactions. To check costs/billing for each of these models, please refer to OpenAI usage costs.",
        imageLink: "/step_3.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 4: Setup your Activation Key",
        featureDescription: "Enter your activation key and OpenAI API key to start using Olly.",
        imageLink: "/step_4.gif",
        formatImage: "right"
    },
    {
        featureName: "Step 5: Setup your OpenAI API Key",
        featureDescription: "Enter your activation key and OpenAI API key to start using Olly.",
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
        featureName: "Step 7: Read the Disclaimer",
        featureDescription: "Understand how your settings affect OpenAI usage charges and read other important information.",
        imageLink: "",
        formatImage: "right"
    },
    {
        featureName: "Ready to Start",
        featureDescription: "Once everything is set up, you are ready to engage with your community using Olly!",
        imageLink: "/1.png",
        formatImage: "right"
    },

  ];

  
  export default howToUseData;
  