import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import FAQs from './data/faq-data'

const FAQSection = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold mb-4 text-center my-8'>FAQ</h1>
        <div className='flex w-full justify-center'>
            <Accordion type="single" collapsible>
                {FAQs.map((faq, index) => (
                        <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
            </Accordion>
        </div>
    </div>
  )
}

export default FAQSection