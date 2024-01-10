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
    <div className="flex justify-center items-center bg-white p-4">
    <div className="flex flex-col items-center justify-center my-4 mx-5">

      <div className="w-full my-2">
        <hr className="border-t border-gray-300" />
      </div>

      <div className="text-center mb-6 w-full">
        <h3 className="text-2xl font-semibold my-2">{featureName}</h3>
        <p className="text-s text-gray-600">{featureDescription}</p>
      </div>

      <div className={`flex ${isImageLeft ? 'flex-row-reverse' : 'flex-row'} items-center justify-center my-3 w-full`}>
        <Image src={imageLink} height={500} width={500} alt={featureName} className="m-2" />
      </div>
    </div>
  </div>
  );
};

export default HowToUse;
