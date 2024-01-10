import React from 'react';
import Image from 'next/image';
import { SeparatorHorizontal } from 'lucide-react';
import howToUseData from './how-to-use';

import HowToUse from './how-to-use-component';

const ActivationGuide: React.FC = () => {
    return (
        <div>
            <div className='mb-5'>
            <h1 className="text-4xl font-semibold text-center my-4">How to use</h1>
            <p className='text-gray-500 text-center'>
                The following guide will help you to get started with the Olly. 
            </p>
            </div>
            <div className="max-w-7xl mx-auto px-4">
            {howToUseData.map((feature, index) => (
            <HowToUse key={index} {...feature} />
            ))}
        </div>
        <p className='text-center text-gray-800 m-3'>If you have any questions, please reach out to us at support@explainx.ai.</p>
      </div>
    );
};

export default ActivationGuide;
