import Image from 'next/image'
import React from 'react'

const BackgroundImage = () => {
  return (
    <div className="relative h-screen w-full">
      <Image 
        src="/website_bg.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="AI Powered Comment Generator tool online"
      />
    </div>
  )
}

export default BackgroundImage;
