import Image from 'next/image'
import React from 'react'

const ProductHuntBadge = () => {
  return (
    <div className="flex justify-center">
    <a href="https://www.producthunt.com/posts/olly-ai-co-pilot-for-social-media?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-olly&#0045;ai&#0045;co&#0045;pilot&#0045;for&#0045;social&#0045;media" target="_blank" rel="noopener noreferrer">
      <Image 
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=430993&theme=light" 
        alt="Olly - AI Co-pilot for Social Media - In-Browser AI Comments, Posts, Viral Scores in seconds | Product Hunt" 
        width={200} 
        height={40} 
        unoptimized={true} // Use this if you are not configuring an external loader
      />
    </a>
    </div>
  )
}

export default ProductHuntBadge