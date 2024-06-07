// page.tsx
import React from 'react';
import CostCalculator from '../_components/cost-calculator';
import { Metadata } from 'next';
import { CTAButtons } from '../_components/cta-buttons';
import { CTAButtonsAB } from '../_components/cta-ab';
import { CTALifetime } from '../_components/cta-lifetime';

export const metadata: Metadata = {
  title: 'OpenAI Cost Calculator | Estimate Costs for Text Generation',
  description: 'Use our OpenAI Cost Calculator to estimate the cost of using different OpenAI models for generating comments, posts, and text based on your specific requirements. Optimize your budget for AI-powered content creation with Olly.',
  keywords: 'OpenAI cost calculator, open ai cost calculator, openai pricing calculator, chatgpt cost calculator, gpt-3 cost calculator, text generation cost, ai content creation cost, Olly',
  openGraph: {
    title: 'OpenAI Cost Calculator | Estimate Costs for Text Generation',
    description: 'Use our OpenAI Cost Calculator to estimate the cost of using different OpenAI models for generating comments, posts, and text based on your specific requirements. Optimize your budget for AI-powered content creation with Olly.',
    url: 'https://olly.social/openai-cost-calculator',
    type: 'website',
    images: [
      {
        url: 'https://olly.social/images/cost-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenAI Cost Calculator',
      },
    ],
  },
};

const CostCalculatorPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OpenAI Cost Calculator</h1>
        <p className="mb-8">
          Estimate the cost of using different OpenAI models for generating comments, posts, and text based on your specific requirements.
          Our OpenAI Cost Calculator helps you make informed decisions and optimize your budget for AI-powered content creation.
        </p>
      </div>
      <div className="max-w-xl mx-auto">
        <CostCalculator />
      </div>
      <CTALifetime />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Calculator Details</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Models:</p>
            <ul className="list-disc pl-6">
              <li>GPT-4o: Priced at $5 per 1M input tokens and $15 per 1M output tokens.</li>
              <li>GPT-4o-2024-05-13: Priced at $5 per 1M input tokens and $15 per 1M output tokens.</li>
              <li>GPT-3.5-turbo-0125: Priced at $0.5 per 1M input tokens and $1.5 per 1M output tokens.</li>
              <li>GPT-3.5-turbo-instruct: Priced at $1.5 per 1M input tokens and $2 per 1M output tokens.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Input Length:</p>
            <p>Adjustable from 1000 to 5000 characters.</p>
          </div>
          <div>
            <p className="font-bold">Comment Length:</p>
            <p>Select from 150, 300, 500, or 1000 characters.</p>
          </div>
          <div>
            <p className="font-bold">Comments per Day:</p>
            <p>Specify the number of comments generated per day, from 1 to 100.</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Q: What is the OpenAI Cost Calculator?</p>
            <p>A: The OpenAI Cost Calculator is a tool that helps you estimate the cost of using different OpenAI models for generating text based on your specific requirements, such as input length, comment length, and the number of comments per day.</p>
          </div>
          <div>
            <p className="font-bold">Q: How does the calculator estimate the costs?</p>
            <p>A: The calculator uses the pricing information provided by OpenAI for each model and calculates the estimated cost based on the input length, comment length, and the number of comments per day. It provides both daily and monthly cost estimates.</p>
          </div>
          <div>
            <p className="font-bold">Q: What models are supported by the calculator?</p>
            <p>A: The calculator supports the following OpenAI models: GPT-4o, GPT-4o-2024-05-13, GPT-3.5-turbo-0125, and GPT-3.5-turbo-instruct. Each model has different pricing for input and output tokens.</p>
          </div>
          <div>
            <p className="font-bold">Q: Can I customize the input and comment lengths?</p>
            <p>A: Yes, you can adjust the input length using the slider, ranging from 1000 to 5000 characters. For comment length, you can select from predefined options: 150, 300, 500, or 1000 characters.</p>
          </div>
          <div>
            <p className="font-bold">Q: How can I use the cost estimates?</p>
            <p>A: The cost estimates provided by the calculator can help you make informed decisions about which OpenAI model to use based on your budget and requirements. It allows you to optimize your spending on AI-powered content creation.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm"><span className="font-bold">Note:</span> Text length is the combination of input and output. For example, if your selected input text has 500 characters and the generated output text has 250 characters, the total text length is 750 characters. An average LinkedIn post is typically between 1000 and 3000 characters.</p>
      </div>
    </div>
  );
};

export default CostCalculatorPage;