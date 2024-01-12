import Image from 'next/image'
import React from 'react'

const ProductHuntBadge = () => {
  return (
    <div className="flex justify-center">
      <a href="https://www.producthunt.com/posts/olly-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-olly-2" target="_blank" rel="noopener noreferrer">
        <Image 
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=430993&theme=light&period=daily" 
          alt="Olly - In-browser AI comments, posts, viral scores in seconds | Product Hunt" 
          width={200} 
          height={30} 
          unoptimized={true} // Use this if you are not configuring an external loader
        />
      </a>
    </div>
  )
}

export default ProductHuntBadge
