import React from "react";
import Feature from './feature-description';
import featuresData from './feature-data';

const Heroes: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
};

export default Heroes;
