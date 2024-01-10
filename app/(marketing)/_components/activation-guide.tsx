import React from 'react';
import Image from 'next/image';

const ActivationGuide: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-white p-4">
            <div className="max-w-6xl bg-white p-6 rounded-lg">
                <h1 className="text-xl font-semibold text-center mb-4">Activation Guide</h1>
                <p className="text-sm text-gray-600 mb-4">Follow these steps to activate and use Olly effectively.</p>

                <h2 className="text-lg font-semibold mb-2">Step 1: Ensure Olly is Turned On</h2>
                <Image src="/1.png" alt="Step 1 Image" width={500} height={300} />
                <p>Make sure that the Olly extension is enabled in your browser.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Step 2: Select Model to Use</h2>
                <Image src="/2.png" alt="Step 2 Image" width={500} height={300} />
                <p>Choose between different AI models like GPT-3.5 or GPT-4 for personalized interactions. To check costs/billing for each of these models, please refer to OpenAI usage costs.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Step 3: Setup your Activation & OpenAI API Key</h2>
                <Image src="/3.png" alt="Step 3 Image" width={500} height={300} />
                <p>Enter your activation key and OpenAI API key to start using Olly.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Step 4: Customize Your Commenting Style</h2>
                <Image src="/4.png" alt="Step 4 Image" width={500} height={300} />
                <p>Set your preferred style of commenting, including the tone and length of replies.</p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Step 5: Read the Disclaimer</h2>
                <Image src="/5.png" alt="Step 5 Image" width={500} height={300} />
                <p>Understand how your settings affect OpenAI usage charges and read other important information.</p>


                <h2 className="text-lg font-semibold mb-2 mt-4">Ready to Start</h2>
                <p>Once everything is set up, you are ready to engage with your community using Olly!</p>
            </div>
        </div>
    );
};

export default ActivationGuide;
