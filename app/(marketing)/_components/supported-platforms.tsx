import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import React from 'react'

const SupportedPlatforms = () => {
  return (
    <div>
    <h1>Supported Platforms</h1>
    <div className='flex flex-row justify-center gap-x-3'>
        <Facebook />
        <X />
        <Instagram />
        <Linkedin />
    </div>
    </div>

  )
}

export default SupportedPlatforms;