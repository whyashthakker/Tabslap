"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProductRoadmap() {
 const [isEmailOpen, setIsEmailOpen] = useState(false)

 const handleRequestFeature = () => {
   setIsEmailOpen(true)
   window.open(`mailto:yash@explainx.ai?subject=Request a New Feature`)
 }

 return (
   <div className="container mx-auto px-4 py-12">
     <h1 className="text-3xl font-bold mb-6">Product Roadmap</h1>
     <div className="overflow-x-auto">
       <table className="w-full table-auto">
         <thead>
           <tr className="bg-gray-100 dark:bg-gray-800">
             <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Feature</th>
             <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Status</th>
             <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Description</th>
           </tr>
         </thead>
         <tbody>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Multilingual Comments</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                 Completed
               </span>
             </td>
             <td className="px-4 py-3">Allows users to leave comments in multiple languages.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">UI Improvements</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                 Completed
               </span>
             </td>
             <td className="px-4 py-3">Enhances the user interface for better usability and aesthetics.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">GPT-4O Support</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                 Completed
               </span>
             </td>
             <td className="px-4 py-3">Integrates the GPT-4O language model for advanced natural language processing capabilities.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Post Pops</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                 In Progress
               </span>
             </td>
             <td className="px-4 py-3">Shows a commenting popup next to each post for easier interaction.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Modern UI</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                 In Progress
               </span>
             </td>
             <td className="px-4 py-3">Redesigns the user interface with a modern and sleek look.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Auto Commenter</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                 Planned
               </span>
             </td>
             <td className="px-4 py-3">Automatically generates relevant comments based on post content.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Free Support for 5 Comments / Day</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                 In Progress
               </span>
             </td>
             <td className="px-4 py-3">Offers free support for up to 5 comments per day for non-premium users.</td>
           </tr>
           <tr className="border-b border-gray-200 dark:border-gray-700">
             <td className="px-4 py-3 font-medium">Gamification to Improve Engagement</td>
             <td className="px-4 py-3">
               <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                 In Progress
               </span>
             </td>
             <td className="px-4 py-3">Introduces gamification elements to increase user engagement and retention.</td>
           </tr>
         </tbody>
       </table>
     </div>
     <div className="mt-6 flex justify-end">
       <Button onClick={handleRequestFeature}>Request a New Feature</Button>
     </div>
   </div>
 )
}