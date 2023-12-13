"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AddOllyButton = () => {
  const handleButtonClick = () => {
    window.open("https://chrome.google.com/webstore/detail/olly-your-ai-social-media/your-extension-id", "_blank");
  }

  return (
    <Button variant="default" size="lg" onClick={handleButtonClick}>
      Add Olly to Chrome
      <ArrowRight className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default AddOllyButton;
