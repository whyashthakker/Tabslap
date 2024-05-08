const productData = [
  {
    "title": "0 to Hero ChatGPT Marketing + Advertising + Content Creation | GenAICourses.com",
    "file": "0-to-hero-chatgpt-marketing-advertising-content",
    "description": "Learn how to utilize ChatGPT for marketing, advertising, and content creation from scratch to becoming a hero in the field."
  },
  {
    "title": "0 to Hero ChatGPT Marketing + Advertising + Content Creation | GenAICourses.com",
    "file": "0-to-hero-chatgpt-marketing-advertising-content-creation",
    "description": "Become a ChatGPT expert and elevate your marketing, advertising, and content creation strategies. Learn how to leverage ChatGPT to drive growth and innovation in your business."
  },
  {
    "title": "100x Yourself with this Generative AI Course",
    "file": "100x-generative-ai-course",
    "description": "Learn how to utilize ChatGPT for marketing, advertising, and content creation from scratch to becoming a hero (100X) in the field."
  },
  {
    "title": "Become a 10x Product Manager with ChatGPT & Generative AI | GenAICourses.com",
    "file": "10x-product-manager-chatgpt-generative-ai",
    "description": "Supercharge your product management skills with ChatGPT and Generative AI. Learn how to leverage AI to drive innovation and achieve exponential growth in your product management role."
  },
  {
    "title": "4x1 Data Management/Governance/Security/Ethics Masterclass | GenAICourses.com",
    "file": "4x1-data-masterclass",
    "description": "Master the essentials of Data Management, Governance, Security, and Ethics with this comprehensive masterclass. Learn how to effectively manage, govern, secure, and ethically handle data for your business."
  },
  {
    "title": "AGI Course | GenAICourses.com",
    "file": "agi-course",
    "description": "Explore the realm of Artificial General Intelligence (AGI) and learn how to leverage its potential to drive growth and innovation in your business. Join our AGI Course today!"
  },
  {
    "title": "AI Agents for Business Use Cases | GenAICourses.com",
    "file": "ai-agents-for-business-use-cases",
    "description": "Explore how AI agents can be utilized in various business scenarios to enhance productivity and efficiency. Learn practical applications and case studies."
  },
  {
    "title": "AI Course | GenAICourses.com",
    "file": "ai-course",
    "description": "Explore the fundamentals of AI and learn how to leverage it to drive growth and innovation in your business. Join our course today!"
  },
  {
    "title": "AI 101 Fundamentals for Managers & Leaders | GenAICourses.com",
    "file": "ai-fundamentals-for-managers",
    "description": "Master the fundamentals of AI for managers & leaders. Learn how to leverage AI to drive growth and innovation in your business. AI 101 Fundamentals for Managers & Leaders."
  },
  {
    "title": "AI Marketing to Grow your Business | GenAICourses.com",
    "file": "ai-marketing-to-grow-your-business",
    "description": "Discover how to utilize AI marketing strategies to drive growth and innovation in your business. AI Marketing to Grow your Business."
  },
  {
    "title": "Amazing Change Management Plan | GenAICourses.com",
    "file": "amazing-change-management-plan",
    "description": "Discover an amazing change management plan to drive growth and innovation in your business. Learn how to navigate organizational change effectively."
  },
  {
    "title": "Artificial General Intelligence Course | GenAICourses.com",
    "file": "artificial-general-intelligence-course",
    "description": "Discover the fascinating world of Artificial General Intelligence (AGI) and learn how to leverage its potential to drive growth and innovation in your business. Join our AGI Course today!"
  },
  {
    "title": "Artificial Intelligence Risk and Cyber Security Course 2024 | GenAICourses.com",
    "file": "artificial-intelligence-risk-cyber-security-course-2023",
    "description": "Explore the intersection of artificial intelligence, risk management, and cybersecurity in this comprehensive course. Stay ahead of emerging threats and protect your business."
  },
  {
    "title": "Automate Digital Marketing & Social Media with Generative AI | GenAICourses.com",
    "file": "automate-digital-marketing-social-media-generative-ai",
    "description": "Learn how to automate digital marketing and social media tasks using Generative AI. Discover how AI can streamline your marketing efforts and improve efficiency."
  },
  {
    "title": "Become a 10x Product Marketing Manager with AI & ChatGPT | GenAICourses.com",
    "file": "become-10x-product-marketing-manager-ai-chatgpt",
    "description": "Learn how to become a 10x Product Marketing Manager using AI and ChatGPT. Discover advanced strategies and techniques to leverage AI in product marketing."
  },
  {
    "title": "Build a ChatGPT Supercharged Product Innovation Machine 2024 | GenAICourses.com",
    "file": "build-chatgpt-supercharged-product-innovation-machine-2023",
    "description": "Learn how to build a ChatGPT supercharged product innovation machine in 2024. Empower your business with AI-driven product innovation strategies."
  },
  {
    "title": "ChatGPT 101: Supercharge Your Work & Life (750+ Prompts inc) | GenAICourses.com",
    "file": "chatgpt-101-supercharge-your-work-and-life",
    "description": "Learn how to supercharge your work and life with ChatGPT 101. Explore 750+ prompts to enhance productivity and creativity."
  },
  {
    "title": "ChatGPT-4 Masterclass: ChatGPT Playbook for Professionals! | GenAICourses.com",
    "file": "chatgpt-4-masterclass",
    "description": "Unlock the power of ChatGPT-4 and master the art of conversational AI with this comprehensive masterclass. Perfect for professionals seeking to leverage cutting-edge AI."
  },
  {
    "title": "ChatGPT-4 Masterclass: ChatGPT Playbook for Professionals! | GenAICourses.com",
    "file": "chatgpt-4-masterclass-playbook-professionals",
    "description": "Unlock the full potential of ChatGPT-4 with this comprehensive masterclass. Learn how to leverage ChatGPT-4 effectively in various professional settings."
  },
  {
    "title": "ChatGPT AI Ethics: Ethical Intelligence in an AI World | GenAICourses.com",
    "file": "chatgpt-ai-ethics",
    "description": "Explore the ethical dimensions of AI and learn how to cultivate ethical intelligence in the AI-driven world with ChatGPT AI Ethics course."
  },
  {
    "title": "ChatGPT and the New Wave of ML Language Models | GenAICourses.com",
    "file": "chatgpt-and-ml-language-models",
    "description": "Discover ChatGPT and the new wave of ML language models. Learn how to leverage these models to drive growth and innovation in your business. Join our course today!"
  },
  {
    "title": "ChatGPT Complete Course - Learn ChatGPT & Prompt Engineering | GenAICourses.com",
    "file": "chatgpt-complete-course",
    "description": "Master ChatGPT and Prompt Engineering with this comprehensive course. Learn how to utilize ChatGPT effectively and craft powerful prompts for various applications."
  },
  {
    "title": "ChatGPT for Better Business Communication | GenAICourses.com",
    "file": "chatgpt-for-better-business-communication",
    "description": "Learn how to use ChatGPT to enhance business communication and streamline operations. This course is designed for business leaders and professionals seeking to improve their communication skills with AI."
  },
  {
    "title": "ChatGPT For HR | GenAICourses.com",
    "file": "chatgpt-for-hr",
    "description": "Become a ChatGPT Pro in HR! Learn how to leverage AI to drive growth and innovation in your HR processes."
  },
  {
    "title": "ChatGPT Masterclass: ChatGPT Guide for Beginners to Experts! | GenAICourses.com",
    "file": "chatgpt-masterclass-beginners-to-experts",
    "description": "Unlock the full potential of ChatGPT with this comprehensive masterclass. From beginners to experts, learn how to leverage ChatGPT for various applications."
  },
  {
    "title": "ChatGPT Masterclass: The Guide to AI & Prompt Engineering | GenAICourses.com",
    "file": "chatgpt-masterclass-guide",
    "description": "Unlock the full potential of ChatGPT with this masterclass. Learn about AI and Prompt Engineering techniques to enhance your productivity and creativity."
  },
  {
    "title": "ChatGPT Masterclass: The Guide to AI & Prompt Engineering | GenAICourses.com",
    "file": "chatgpt-masterclass-guide-ai-prompt-engineering",
    "description": "Unlock the power of ChatGPT with this comprehensive masterclass. Learn about AI and prompt engineering to drive growth and innovation in your business."
  },
  {
    "title": "ChatGPT Masters: AI Prompt Engineering, Midjourney, Chat GPT | GenAICourses.com",
    "file": "chatgpt-masters-ai-prompt-engineering",
    "description": "Become a master of AI prompt engineering with ChatGPT. Learn the intricacies of Midjourney and harness the power of Chat GPT to its fullest potential."
  },
  {
    "title": "ChatGPT Masters: AI Prompt Engineering, Midjourney, ChatGPT | GenAICourses.com",
    "file": "chatgpt-masters-course",
    "description": "Master AI prompt engineering, Midjourney, and ChatGPT with this comprehensive course. Learn how to utilize these tools effectively for various AI applications."
  },
  {
    "title": "ChatGPT: Presentation Creation Fast With ChatGPT A | GenAICourses.com",
    "file": "chatgpt-presentation-creation-fast",
    "description": "Learn how to use ChatGPT to quickly create presentations and improve your workflow. This course is designed for professionals seeking to enhance their presentation creation process with AI."
  },
  {
    "title": "ChatGPT Productivity + Time Management in 2024 | GenAICourses.com",
    "file": "chatgpt-productivity-time-management-2023",
    "description": "Discover how to boost your productivity and manage your time effectively with ChatGPT in 2024. Learn advanced techniques and strategies to optimize your workflow."
  },
  {
    "title": "ChatGPT: Project Management Mastery With ChatGPT Artificial Intelligence | GenAICourses.com",
    "file": "chatgpt-project-management-mastery",
    "description": "Unlock project management mastery with ChatGPT artificial intelligence. Learn how to streamline your projects and enhance productivity using ChatGPT."
  },
  {
    "title": "ChatGPT, Midjourney, DALL-E 3 & APIs - The Complete Guide | GenAICourses.com",
    "file": "complete-guide-chatgpt-midjourney-dalle-3-apis",
    "description": "Unlock the full potential of ChatGPT, Midjourney, DALL-E 3, and APIs with our comprehensive guide. Learn how to leverage these tools for innovation and growth."
  },
  {
    "title": "Create High-Converting Sales Funnels with ChatGPT in 2024 | GenAICourses.com",
    "file": "create-high-converting-sales-funnels-with-chatgpt-2023",
    "description": "Learn how to create high-converting sales funnels using ChatGPT in 2024. Drive growth and innovation in your business with AI-powered sales strategies."
  },
  {
    "title": "Dominate SEO with ChatGPT: The AI Powered Search Revolution | GenAICourses.com",
    "file": "dominate-seo-chatgpt-ai-revolution",
    "description": "Unlock the power of AI in SEO with ChatGPT. Learn how to revolutionize your search engine optimization strategies and dominate the digital landscape."
  },
  {
    "title": "Executive Briefing: Artificial Intelligence (AI) + ChatGPT | GenAICourses.com",
    "file": "executive-briefing-ai-chatgpt",
    "description": "Gain insights into leveraging Artificial Intelligence (AI) and ChatGPT for business executives. Explore how AI technologies like ChatGPT can drive innovation and growth in your organization."
  },
  {
    "title": "Free GenAI Course | GenAICourses.com",
    "file": "free-genai-course",
    "description": "Access a free course on Generative AI for business leaders and professionals. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "Free Generative AI Course | GenAICourses.com",
    "file": "free-generative-ai-course",
    "description": "Discover the world of generative AI with our free course. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "Future Skills 2030: Prepare for the 4th Industrial Revolution | GenAICourses.com",
    "file": "future-skills-2030-prepare-for-4th-industrial-revolution",
    "description": "Equip yourself with the essential skills needed to thrive in the 4th Industrial Revolution. Prepare for the future with our Future Skills 2030 course."
  },
  {
    "title": "Generative AI for Business Leaders & Professionals | GenAICourses.com",
    "file": "gen-ai-for-business-leaders",
    "description": "Learn how to leverage AI to drive growth and innovation in your business. Generative AI for Business Leaders & Professionals."
  },
  {
    "title": "Why GenAI Bootcamps are the Ideal Way to Master Generative AI",
    "file": "genai-bootcamps",
    "description": "Discover the benefits of GenAI bootcamps and why GenAICourses.com offers the best learning experience for aspiring generative AI professionals."
  },
  {
    "title": "GenAI Ethics | GenAICourses.com",
    "file": "genai-ethics",
    "description": "Explore the ethical considerations in Generative AI for business leaders and professionals. Learn how to integrate ethical principles into AI-driven projects."
  },
  {
    "title": "GenAI for Agriculturists | GenAICourses.com",
    "file": "genai-for-agriculturists",
    "description": "Discover how Generative AI can transform agriculture. Learn how AI can optimize crop yields, predict crop diseases, automate farming processes, and more. GenAI for Agriculturists."
  },
  {
    "title": "GenAI for Architects | GenAICourses.com",
    "file": "genai-for-architects",
    "description": "Discover how Generative AI is transforming architectural design. Learn how to integrate AI technologies into your architectural projects. GenAI for Architects."
  },
  {
    "title": "GenAI for Artists | GenAICourses.com",
    "file": "genai-for-artists",
    "description": "Explore how Generative AI can empower artists. Learn how to leverage AI to drive creativity and innovation in your artwork. GenAI for Artists."
  },
  {
    "title": "GenAI for Beginners | GenAICourses.com",
    "file": "genai-for-beginners",
    "description": "Introduction to Generative AI for beginners. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "GenAI for Designers | GenAICourses.com",
    "file": "genai-for-designers",
    "description": "Explore how Generative AI is revolutionizing the field of design. Learn how to use AI-powered tools and techniques to enhance your creative process and drive innovation in design projects. GenAI for Designers."
  },
  {
    "title": "GenAI for Developers | GenAICourses.com",
    "file": "genai-for-developers",
    "description": "Discover how to apply Generative AI to software development. Learn how to leverage AI to drive growth and innovation in your projects. GenAI for Developers."
  },
  {
    "title": "GenAI for Educators | GenAICourses.com",
    "file": "genai-for-educators",
    "description": "Explore how Generative AI can revolutionize education. Learn how to integrate AI technologies into teaching methods, curriculum development, and student engagement. GenAI for Educators."
  },
  {
    "title": "GenAI for Engineers | GenAICourses.com",
    "file": "genai-for-engineers",
    "description": "Discover how AI is reshaping engineering practices. Learn how to apply Generative AI techniques to engineering tasks, including design optimization, simulation, predictive maintenance, and more. GenAI for Engineers."
  },
  {
    "title": "GenAI for Entrepreneurs | GenAICourses.com",
    "file": "genai-for-entrepreneurs",
    "description": "Discover how GenAI can empower entrepreneurs to innovate and grow their businesses. Learn practical applications of Generative AI to enhance entrepreneurship and drive success."
  },
  {
    "title": "GenAI for Experts | GenAICourses.com",
    "file": "genai-for-experts",
    "description": "Advanced course on Generative AI tailored for experts. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "GenAI for Fashion Designers | GenAICourses.com",
    "file": "genai-for-fashion-designers",
    "description": "Explore how Generative AI is revolutionizing the fashion industry. Learn how to apply AI technologies to enhance your fashion design process. GenAI for Fashion Designers."
  },
  {
    "title": "GenAI for Filmmakers | GenAICourses.com",
    "file": "genai-for-filmmakers",
    "description": "Explore how Generative AI is transforming the filmmaking industry. Learn innovative ways to integrate AI technologies into your filmmaking projects. GenAI for Filmmakers."
  },
  {
    "title": "GenAI for Financiers | GenAICourses.com",
    "file": "genai-for-financiers",
    "description": "Explore the applications of Generative AI in finance. Learn how AI can revolutionize financial analysis, risk management, trading strategies, and more. GenAI for Financiers."
  },
  {
    "title": "GenAI for Gamers | GenAICourses.com",
    "file": "genai-for-gamers",
    "description": "Discover how Generative AI can revolutionize gaming experiences. Learn techniques to apply AI in game development and design. GenAI for Gamers."
  },
  {
    "title": "GenAI for Healthcare Professionals | GenAICourses.com",
    "file": "genai-for-healthcare-professionals",
    "description": "Discover how Generative AI is transforming healthcare. Learn how to apply AI techniques in medical diagnosis, treatment, and patient care. GenAI for Healthcare Professionals."
  },
  {
    "title": "GenAI for Innovators | GenAICourses.com",
    "file": "genai-for-innovators",
    "description": "Explore the intersection of innovation and Generative AI. Learn how to apply cutting-edge AI techniques to fuel creativity and drive innovation in your projects. Join GenAI for Innovators and unlock new possibilities today!"
  },
  {
    "title": "GenAI for Marketers | GenAICourses.com",
    "file": "genai-for-marketers",
    "description": "Discover how Generative AI can transform marketing strategies. Learn innovative ways to utilize AI for market analysis, customer engagement, content creation, and more. GenAI for Marketers."
  },
  {
    "title": "GenAI for Musicians | GenAICourses.com",
    "file": "genai-for-musicians",
    "description": "Discover how Generative AI can revolutionize music creation. Learn how to use AI to enhance your musical compositions and creativity. GenAI for Musicians."
  },
  {
    "title": "GenAI for Researchers | GenAICourses.com",
    "file": "genai-for-researchers",
    "description": "Discover how Generative AI can revolutionize research across various fields. Explore cutting-edge applications and methodologies to enhance your research endeavors. Start your journey with GenAI for Researchers today!"
  },
  {
    "title": "GenAI for Robotics Engineers | GenAICourses.com",
    "file": "genai-for-robotics-engineers",
    "description": "Explore how Generative AI is revolutionizing robotics engineering. Learn advanced techniques to apply AI in robotics projects. GenAI for Robotics Engineers."
  },
  {
    "title": "GenAI for Scientists | GenAICourses.com",
    "file": "genai-for-scientists",
    "description": "Explore how Generative AI is transforming scientific research. Learn how AI is assisting scientists in data analysis, hypothesis generation, experiment design, and more. GenAI for Scientists."
  },
  {
    "title": "GenAI for Students | GenAICourses.com",
    "file": "genai-for-students_",
    "description": "Explore the world of Generative AI tailored for students. Learn how AI can revolutionize education, from assisting in learning tasks to enabling innovative projects. Start your journey with GenAI for Students today!"
  },
  {
    "title": "GenAI for Teachers | GenAICourses.com",
    "file": "genai-for-teachers",
    "description": "Discover how Generative AI can enhance teaching and learning experiences. Explore innovative ways to integrate AI technologies into educational settings. Start your journey with GenAI for Teachers today!"
  },
  {
    "title": "GenAI for Transporters | GenAICourses.com",
    "file": "genai-for-transporters",
    "description": "Explore how Generative AI is revolutionizing transportation. Learn how AI is optimizing logistics, enhancing route planning, improving vehicle performance, and more. GenAI for Transporters."
  },
  {
    "title": "GenAI for Writers | GenAICourses.com",
    "file": "genai-for-writers",
    "description": "Explore how Generative AI can enhance your writing skills and creativity. Learn techniques to leverage AI for writing projects. GenAI for Writers."
  },
  {
    "title": "GenAI Safety | GenAICourses.com",
    "file": "genai-safety",
    "description": "Delve into the safety aspects of Generative AI for business leaders and professionals. Learn strategies to ensure safety and mitigate risks in AI-driven projects."
  },
  {
    "title": "Generative AI Course | GenAICourses.com",
    "file": "generative-ai-course",
    "description": "Unlock the power of generative AI and learn how to leverage it to drive growth and innovation in your business. Join our course today!"
  },
  {
    "title": "Generative AI for Agriculture Course | GenAICourses.com",
    "file": "generative-ai-for-agriculture-course",
    "description": "Explore the application of generative AI in agriculture. Learn how to leverage AI to drive innovation and improve agricultural practices. Join our Generative AI for Agriculture Course today!"
  },
  {
    "title": "Generative AI for Architecture Course | GenAICourses.com",
    "file": "generative-ai-for-architecture-course",
    "description": "Explore the application of generative AI in architecture. Learn how to leverage AI to drive creativity and innovation in architectural design. Join our Generative AI for Architecture Course today!"
  },
  {
    "title": "Generative AI for Design Course | GenAICourses.com",
    "file": "generative-ai-for-design-course",
    "description": "Explore the application of generative AI in design. Learn how to leverage AI to drive creativity and innovation in your design projects. Join our Generative AI for Design Course today!"
  },
  {
    "title": "Generative AI for Digital Art Course | GenAICourses.com",
    "file": "generative-ai-for-digital-art-course",
    "description": "Explore the intersection of generative AI and digital art, and learn how to leverage AI to drive creativity and innovation. Join our Generative AI for Digital Art Course today!"
  },
  {
    "title": "Generative AI for Education Course | GenAICourses.com",
    "file": "generative-ai-for-education-course",
    "description": "Explore the application of generative AI in education. Learn how to leverage AI to drive innovation and enhance learning experiences in the field of education. Join our Generative AI for Education Course today!"
  },
  {
    "title": "Generative AI for Fashion Course | GenAICourses.com",
    "file": "generative-ai-for-fashion-course",
    "description": "Explore the intersection of generative AI and fashion design. Learn how to leverage AI to drive creativity and innovation in the fashion industry. Join our Generative AI for Fashion Course today!"
  },
  {
    "title": "Generative AI for Film Course | GenAICourses.com",
    "file": "generative-ai-for-film-course",
    "description": "Explore the use of generative AI in film production. Learn how to leverage AI to drive creativity and innovation in filmmaking. Join our Generative AI for Film Course today!"
  },
  {
    "title": "Generative AI for Finance Course | GenAICourses.com",
    "file": "generative-ai-for-finance-course",
    "description": "Explore the application of generative AI in finance. Learn how to leverage AI to drive innovation and improve financial strategies. Join our Generative AI for Finance Course today!"
  },
  {
    "title": "Generative AI for Games Course | GenAICourses.com",
    "file": "generative-ai-for-games-course",
    "description": "Explore the application of generative AI in game development. Learn how to leverage AI to drive innovation and enhance gaming experiences. Join our Generative AI for Games Course today!"
  },
  {
    "title": "Generative AI for Healthcare Course | GenAICourses.com",
    "file": "generative-ai-for-healthcare-course",
    "description": "Explore the application of generative AI in healthcare. Learn how to leverage AI to drive innovation and improve patient care in the healthcare industry. Join our Generative AI for Healthcare Course today!"
  },
  {
    "title": "Generative AI for Leaders & Business Professionals | GenAICourses.com",
    "file": "generative-ai-for-leaders-business-professionals",
    "description": "Discover how Generative AI can empower leaders and business professionals to drive growth and innovation. Learn the applications and benefits of Generative AI in various business contexts."
  },
  {
    "title": "Generative AI for Marketing Course | GenAICourses.com",
    "file": "generative-ai-for-marketing-course",
    "description": "Explore the application of generative AI in marketing. Learn how to leverage AI to drive innovation and improve marketing strategies. Join our Generative AI for Marketing Course today!"
  },
  {
    "title": "Generative AI for Music Course | GenAICourses.com",
    "file": "generative-ai-for-music-course",
    "description": "Explore the fascinating world of generative AI and its applications in music composition. Learn how to leverage AI to drive creativity and innovation in your musical projects. Join our Generative AI for Music Course today!"
  },
  {
    "title": "Generative AI for Robotics Course | GenAICourses.com",
    "file": "generative-ai-for-robotics-course",
    "description": "Explore the application of generative AI in robotics. Learn how to leverage AI to drive innovation and advancement in robotics technology. Join our Generative AI for Robotics Course today!"
  },
  {
    "title": "Generative AI for Transportation Course | GenAICourses.com",
    "file": "generative-ai-for-transportation-course",
    "description": "Explore the application of generative AI in transportation. Learn how to leverage AI to drive innovation and improve transportation systems. Join our Generative AI for Transportation Course today!"
  },
  {
    "title": "Generative AI for Writing Course | GenAICourses.com",
    "file": "generative-ai-for-writing-course",
    "description": "Explore the use of generative AI in writing and storytelling. Learn how to leverage AI to enhance your writing skills and drive creativity and innovation in your projects. Join our Generative AI for Writing Course today!"
  },
  {
    "title": "Generative AI, from GANs to CLIP, with Python and Pytorch | GenAICourses.com",
    "file": "generative-ai-gans-to-clip-python-pytorch",
    "description": "Master Generative AI from GANs to CLIP using Python and PyTorch. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "Generative AI - Risk and Cyber Security Masterclass 2024 | GenAICourses.com",
    "file": "generative-ai-risk-cyber-security-masterclass-2023",
    "description": "Master the application of Generative AI in risk management and cybersecurity. Join our masterclass to learn how to leverage Generative AI to mitigate risks and enhance cybersecurity measures in 2024."
  },
  {
    "title": "Helping Employees Embrace Change | GenAICourses.com",
    "file": "helping-employees-embrace-change",
    "description": "Equip yourself with the skills to help employees embrace change effectively. Learn strategies and techniques to leverage AI for fostering a culture of adaptation and innovation."
  },
  {
    "title": "How to ChatGPT: Master the Art of Prompt Engineering | GenAICourses.com",
    "file": "how-to-chatgpt-prompt-engineering",
    "description": "Learn how to master the art of prompt engineering with ChatGPT. Explore the techniques and strategies to effectively utilize prompt engineering in your AI projects. Join our course today!"
  },
  {
    "title": "Machine Learning for Absolute Beginners - Level 1 | GenAICourses.com",
    "file": "machine-learning-for-absolute-beginners-level-1",
    "description": "Start your journey into machine learning with this beginner-friendly course. Learn the fundamentals and basics of machine learning from scratch."
  },
  {
    "title": "Master AI Course | GenAICourses.com",
    "file": "master-ai-course",
    "description": "Unlock the potential of AI and master its applications to drive growth and innovation in your business. Join our Master AI Course today!"
  },
  {
    "title": "Master Generative AI: Automate Content Effortlessly with AI | GenAICourses.com",
    "file": "master-generative-ai-automate-content",
    "description": "Unlock the power of Generative AI to automate content creation effortlessly. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "Master Generative AI Course | GenAICourses.com",
    "file": "master-generative-ai-course",
    "description": "Unlock the power of generative AI to drive growth and innovation in your business. Master Generative AI Course for professionals."
  },
  {
    "title": "Perplexity AI for Research and Writing | GenAICourses.com",
    "file": "perplexity-ai-for-research-and-writing",
    "description": "Discover how Perplexity AI can enhance your research and writing skills. Learn the fundamentals of Perplexity AI and its applications in various fields."
  },
  {
    "title": "Practical GenAI: Basics, Tools, Use Cases, Ethics, Future | GenAICourses.com",
    "file": "practical-genai",
    "description": "Master the practical aspects of Generative AI including basics, tools, use cases, ethics, and future implications. Dive deep into the world of Generative AI with hands-on learning."
  },
  {
    "title": "The Product Management for AI & Data Science Course | GenAICourses.com",
    "file": "product-management-for-ai-data-science",
    "description": "Learn how to apply product management principles to AI and data science projects. This course is designed for business leaders and professionals looking to drive innovation and growth with AI."
  },
  {
    "title": "The Complete Prompt Engineering for AI Bootcamp (2024) | GenAICourses.com",
    "file": "prompt-engineering-ai-bootcamp-2023",
    "description": "Master prompt engineering for AI in this comprehensive bootcamp. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "The Complete Artificial Intelligence and ChatGPT Course | GenAICourses.com",
    "file": "the-complete-ai-and-chatgpt-course",
    "description": "Master artificial intelligence and ChatGPT with this comprehensive course. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "The Ultimate Guide To ChatGPT & Midjourney | GenAICourses.com",
    "file": "the-ultimate-guide-to-chatgpt-and-midjourney",
    "description": "Unlock the full potential of ChatGPT and Midjourney with this comprehensive guide. Learn how to leverage AI to drive growth and innovation in your business."
  },
  {
    "title": "The Ultimate Guide To ChatGPT & Midjourney | GenAICourses.com",
    "file": "the-ultimate-guide-to-chatgpt-midjourney",
    "description": "Unlock the full potential of ChatGPT and Midjourney with this comprehensive guide. Learn how to leverage these tools to drive growth and innovation in your business."
  },
  {
    "title": "Working with Large Language Models in Generative AI | GenAICourses.com",
    "file": "working-with-large-language-models-in-generative-ai",
    "description": "Master the techniques and strategies for effectively working with large language models in generative AI. Explore advanced concepts and practical applications."
  }
]

export default productData;