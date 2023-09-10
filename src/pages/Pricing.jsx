import { useState } from 'react'
import {Disclosure, RadioGroup} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import FAQs from './FAQs'
import CallToAction from './Components/CallToAction'
import {faqs, frequencies, tiers} from "../util/usefull-data.js";
import {styles} from "../util/genral-style.js";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline/index.js";

import {Link} from 'react-router-dom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <>
      <div className={ `generalNavPadding  pb-24 sm:pb-32 ${styles.paddingX} bgOne `}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#5300CA]">PRICING</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for&nbsp;all&nbsp;your learning needs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-[#5300CA] text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-gray-900 bg-[#5300CA]' : 'ring-1 ring-gray-900',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-white' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold leading-5 text-[#5300CA]">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className={classNames(tier.mostPopular ? "text-gray-300" : "text-gray-600", "mt-4 text-sm leading-6 ")}>{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={classNames(tier.mostPopular? "text-white" : "text-gray-900","text-5xl font-bold tracking-tight")}>{tier.price[frequency.value]}</span>
                <span className={classNames(tier.mostPopular ? "text-gray-300" : "text-gray-600","text-sm font-semibold leading-6")}>{frequency.priceSuffix}</span>
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={classNames(tier.mostPopular? "text-white" : "text-black", 'mt-3')}>What's included</p>
              <ul role="list" className={classNames(tier.mostPopular? "text-gray-300" : "text-gray-600", "mt-4 space-y-3 text-sm leading-6  min-h-[240px] xl:mt-10")}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className={classNames(tier.mostPopular ? "text-[#5300CA] bg-white rounded-full": "text-white bg-[#5300CA] rounded-full" ,"h-6 flex-none justify-center")}aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={''}
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-white text-[#5300CA] shadow-sm hover:bg-[#5300CA] hover:text-white hover:border-white border '
                    : 'text-white bg-[#5300CA] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 border-[#5300CA] hover:text-[#5300CA] hover:bg-white ',
                  'mt-6 block rounded-[30px] py-4 px-3 text-center text-sm font-semibold leading-6  transition ease-out  duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
       {/**Freauently asked Questions */}
        <div  className={'py-40 '}>
          <h6 className={`${styles.homeHeadingStyle}`}>FAQs</h6>
          <h2 className={`${styles.homeSubHeadingStyle}`}>Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 ">
            {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="bg-white p-4 rounded-[20px] ">
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

    <CallToAction/>
    </div>
   
    </>
  )
}
