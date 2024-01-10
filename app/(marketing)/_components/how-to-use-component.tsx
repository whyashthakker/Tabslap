import Image from "next/image";
import React from "react";

interface HowToUseProps {
  featureName: string;
  featureDescription: string;
  imageLink: string;
  formatImage: 'left' | 'right';
}

const HowToUse: React.FC<HowToUseProps> = ({ featureName, featureDescription, imageLink, formatImage }) => {
  const isImageLeft = formatImage === 'left';

  return (
    <div className="flex flex-col items-center justify-center my-4 m-5">
      <div className="text-center mb-4">
        <h3 className="text-3xl font-semibold mb-2 mt-2">{featureName}</h3>
        <p className="max-w-xs md:max-w-md text-s text-gray-600">{featureDescription}</p>
      </div>
      <div className={`flex ${isImageLeft ? 'justify-center md:justify-end' : 'justify-center'} m-3 w-full`}>
        <Image src={imageLink} height={700} width={700} alt={featureName} className="m-2" />
      </div>
    </div>
  );
};

export default HowToUse;
