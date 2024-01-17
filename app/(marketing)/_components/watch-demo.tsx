import { Button } from '@/components/ui/button'
import React from 'react'

const WatchDemo = () => {
    const handleWatchDemo = () => {
        window.open("https://youtu.be/I5jyvy5S5T4", "_blank")
      }

  return (
    <div className='hidden md:flex justify-center'>
        <Button variant="ghost" size="lg" className="mt-2 md:mt-0 md:ml-2" onClick={handleWatchDemo}>
            Watch Demo
      </Button>
    </div>
  )
}

export default WatchDemo