interface FAQData {
    question: string;
    answer: string;
  }
  
  const FAQDataMain: FAQData[] = [
    {
      question: "I am seeing: You exceeded your current quota, please check your plan and billing details",
      answer: "This is an issue with your OpenAI API key. Please check your OpenAI API key and ensure it is valid and has not exceeded its usage limits. OpenAI is now prepaid, so you need to add funds to your account to continue using Tabslap.",
    },
    {
      question: "Can I use Tabslap Social in my language?",
      answer: "We just rolled out support for generating comments in various languages. We currently support English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, Korean, Arabic, Hindi.",
    },
    {
      question: "How can i request a refund?",
      answer: "Go to lemonsqueezy orders page from your email or reach out to yash@tabslap.me, no questions asked."
    },
    {
      question: "How many free comments can I generate in free forever plan?",
      answer: "You can generate 5 comments per day in free forever plan."
    },
    {
      question: "Automatic commenter is available?",
      answer: "We are working on it. It will be available soon.",
    },
    {
      question: "What platforms does Tabslap currently support?",
      answer: "Tabslap currently supports Facebook, LinkedIn, Instagram, Reddit, Product Hunt, YouTube, Twitter, and plans to add Hacker News, Indie Hackers, Quora, Medium, Pinterest, TikTok, Twitch, and more.",
    },
    {
      question: "When I Click on Add activation key or add OpenAI key, nothing happens",
      answer: "You have either activated the maximum number of licenses, that is 3, or your activation key is invalid. Please check your activation key on: https://app.lemonsqueezy.com/orders",
    },
    {
      question: "Is Tabslap available as a browser extension?",
      answer: "Yes, Tabslap is available as a browser extension that can be added to Chrome for easy access and use.",
    },
    {
      question: "Can I use more than 3 activation keys?",
      answer: "No, you can only use a maximum of 3 activation keys for Tabslap. You can however deactivate an existing key and use a new one.",
    },
    {
      question: "Can Tabslap autocomment on autopilot?",
      answer: "Working on it. We will keep you posted.",
    },
    {
      question: "Can I customize my commenting style with Tabslap?",
      answer: "Yes, Tabslap allows you to customize your commenting style, with options like professional, casual, and humorous, to make it more personal.",
    },
    {
      question: "Does Tabslap offer engagement analytics?",
      answer: "No, data is store locally. We do not track any data.",
    },
    {
      question: "What GPT Models are supported by Tabslap?",
      answer: "We support GPT-3.5, GPT-4, Turbo and GPT-4o.",
    },
    {
      question: "What makes Tabslap different from other social media tools?",
      answer: "Lifetime and Fully Private.",
    },
    {
      question: "Is there a trial version of Tabslap available?",
      answer: "No, but you can ask for a refund within 7 days of purchase.",
    },
    {
      question: "Does Tabslap work on mobile devices?",
      answer: "No, it currently only works on Chrome browser on desktop devices.",
    },
    {
      question: "Can I use Tabslap for multiple social media accounts?",
      answer: "Yes.",
    },
    {
      question: "What are the system requirements for Tabslap?",
      answer: "Functional Chrome browser.",
    },
    {
      question: "How does Tabslap handle user data and privacy?",
      answer: "Stored locally, we do not get or track any data.",
    },
    {
      question: "Can businesses use Tabslap for their social media management?",
      answer: "Yes, you can customise Tabslap to respond in your brand's voice and style.",
    },
    {
      question: "Is customer support available for Tabslap users?",
      answer: "Yep. yash@tabslap.me.",
    },
    {
        question: "Does Tabslap support Claude, Gemini AI Models?",
        answer: "No, but drop us a message if you want us to add it.",
      },
      {
        question: "What should I do after installing Tabslap?",
        answer: "Please see activation guide at https://tabslap.me/activation-guide",
      },
      {
        question: "Is Tabslap Free forever?",
        answer: "Yes, Tabslap AI is free forever. You can also opt in for one time payment. After this you directly pay OpenAI for usage. We are not involved in billing.",
      },
      {
        question: "How do I set up my OpenAI API key in Tabslap?",
        answer: "If you do not know what you are doing, please read OpenAI Docs here: https://openai.com/index/openai-api/, takes about 2 minutes.",
      },
      {
        question: "Can I customize my commenting style with Tabslap?",
        answer: "Yes, style, length, language and tone, one time setup.",
      },
      {
        question: "Where does Tabslap appear when I'm using it?",
        answer: "Bottom middle of your screen.",
      },
      {
        question: "What should I do if I can't see Tabslap after installation?",
        answer: "If Tabslap doesn't appear, try refreshing the page or check if the extension is enabled in your browser. You might also need to restart your browser.",
      },
      {
        question: "How do I disable Tabslap?",
        answer: "Go to your extensions find and disable Tabslap. You should see a slider inside Settings.",
      },
      {
        question: "Will OpenAI bill me for using Tabslap?",
        answer: "Yes, OpenAI will bill you per month based on your usage of Tabslap, as it requires an OpenAI API key.",
      },
      {
        question: "Is there a demo available for Tabslap?",
        answer: "Yes, watch it here: https://youtu.be/8VJTHIgxy1Q?si=XtV7C_3aT9xnVeQw",
      },
      {
        question: "Does Tabslap access my personal data?",
        answer: "Nope.",
      },
      {
        question: "How do I ensure Tabslap is working correctly?",
        answer: "To ensure Tabslap is working, follow the setup steps, choose your AI model, enter the necessary keys, and customize your settings. If issues persist, contact support. Refreshing the page or restarting your browser may also help.",
      },
      {
        question: "How can I contact support for Tabslap?",
        answer: "For any questions or issues with Tabslap, you can reach out to their support team at yash@tabslap.me.",
      },
      {
        question: "What are Chrome extension permissions for Tabslap?",
        answer: "Chrome extension permissions for Tabslap are designed to ensure a smooth operation while respecting your privacy. Details can be found in Tabslap's privacy policy.",
      },
      {
        question: "Is there a guide for first-time Tabslap users?",
        answer: "Yes, please see the activation guide at https://tabslap.me/activation-guide.",
      },
      {
        question: "Can I change the AI model in Tabslap after initial setup?",
        answer: "Yes, you can change the AI model in Tabslap after the initial setup to suit your preferences and needs.",
      },
      {
        question: "What are the benefits of using Tabslap?",
        answer: "Tabslap offers benefits like time-saving commenting, personalized interactions, insights into content virality, and a more efficient management of social media presence.",
      },
  ];

  
    export default FAQDataMain;