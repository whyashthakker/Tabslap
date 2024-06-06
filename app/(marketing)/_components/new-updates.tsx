import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

const NewUpdates = () => {
 return (
   <div className='mb-2 justify-center text-center text-gray-600'>
     <Label className='text-xs'>
      <Link href={"/release-notes"} className='text-blue-500'>🎉 v1.3.2 Live: </Link>
      GPT-4o, Multi-lingual comments, UI overhaul, Post Summarisation & more!</Label>
   </div>
 );
};

export default NewUpdates;