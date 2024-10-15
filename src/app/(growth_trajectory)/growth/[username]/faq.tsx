import React from 'react'
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from 'lucide-react'

const faqs = [
  { question: "What is UpGrow?", answer: "UpGrow is an Instagram growth tool designed to help you increase your followers and engagement organically." },
  { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments." },
  { question: "How does UpGrow work?", answer: "UpGrow uses advanced algorithms to engage with potential followers based on your target audience, helping to grow your Instagram presence naturally." },
  { question: "Is UpGrow safe?", answer: "Yes, UpGrow is designed with Instagram's terms of service in mind and uses safe, organic growth methods." },
  { question: "How many followers will I gain with UpGrow?", answer: "Results vary depending on your niche and content, but many users see significant growth within the first month of using UpGrow." },
  { question: "What's the difference between Basic and Pro?", answer: "The Pro plan offers more advanced targeting options, faster growth, and priority support compared to the Basic plan." },
  { question: "Will UpGrow work for my industry?", answer: "UpGrow is designed to work for a wide range of industries and niches. Our targeting options allow for customization to your specific audience." },
  { question: "What is the refund policy?", answer: "We offer a 14-day money-back guarantee if you're not satisfied with our service." },
]

export function FAQ() {
  return (
    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="block">
          {({ open }) => (
            <>
              <dt className="px-6 py-5 bg-gray-100 rounded-xl">
                <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                  <h3 className="text-lg font-semibold leading-7">{faq.question}</h3>
                  <p className="flex items-center ml-6 h-7">
                    <PlusIcon className={`w-6 h-6 ${open ? 'transform rotate-45' : ''}`} />
                  </p>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="px-6 py-5 mt-2 bg-white rounded-xl">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  )
}