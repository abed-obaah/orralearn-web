import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Is learning on Orralearn completely free?",
    answer: "Yes, the core learning paths on Orralearn are absolutely free. You can access curated YouTube tutorials and engage with the community without any charge. We believe in democratizing education, particularly coding skills, which is why our primary content will always be free."
  },
  {
    question: "What's included in the free tier?",
    answer: "The free tier includes access to all curated YouTube tutorials, community interactions, and basic mentorship guidance. You also get limited access to AI-powered programming help."
  },
  {
    question: "Do you offer any premium services?",
    answer: "While the basic features are free, we offer a premium subscription that provides perks like 24/7 mentorship, priority access to new courses, and unlimited use of our AI-powered programming assistant."
  },
  {
    question: "How much does the premium subscription cost?",
    answer: "Our premium subscription is priced to be affordable, considering the range of features it offers. For the most current pricing information, please visit our Pricing page."
  },
  {
    question: "Are there any student discounts?",
    answer: "Yes, we offer student discounts to make our premium services even more accessible. Verification is straightforward through your educational institution's email."
  },
  {
    question: "Do you offer any group or enterprise plans?",
    answer: "Absolutely. We offer discounted rates for educational institutions and enterprises looking to upscale their team's coding skills. Please contact our sales team for more details."
  },
  {
    question: "How do payments work? Are they secure?",
    answer: "We use a secure and trusted payment gateway for all transactions. You can pay using various methods including credit cards and mobile payments, specific to some African countries."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on our premium subscription. If you're not satisfied with our services within the first 30 days, we will refund you in full, no questions asked."
  }
];



const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQs