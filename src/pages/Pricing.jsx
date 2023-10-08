import PricingSection from "../components/pricing/PricingSection.jsx";
import CallToAction from "../components/shared/CallToAction.jsx";
import FaqComponent from "../components/pricing/FaqComponent.jsx";

import { styles } from "../util/genral-style.js";

export default function Pricing() {

  return (
    <>
      <div
        className={`generalNavPadding  pb-24 sm:pb-32 ${styles.paddingX} bgOne `}
      >
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hassle-Free Learning, One-Time Investment!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Dive into the world of coding with Orralearn's membership.
                Unlock unlimited courses, access to mentors, and a collaborative
                community of passionate learners.
              </p>
            </div>
            <div className="flex justify-center mt-5 mb-5">
              <select
                value={currency.country}
                onChange={handleCurrencyChange}
                className="block appearance-none  bg-white border border-gray-100 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {currencies.map((currencyOption) => (
                  <option
                    key={currencyOption.country}
                    value={currencyOption.country}
                  >
                    {currencyOption.country}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M6.293 9.293L10 13.586l3.707-4.293a.999.999 0 1 1 1.414 1.414l-4 4a.997.997 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-center space-x-4 md:space-x-2 lg:space-x-8">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  className={`tab ${
                    activeTab === plan.id ? "tab-active" : ""
                  } text-xs sm:text-sm md:text-base lg:text-lg`}
                  onClick={() => handleTabClick(plan.id)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{plan.name}</span>
                    {plan.id === "semiAnnual" && (
                      <span className="bg-white px-1 rounded-full text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                        10% off
                      </span>
                    )}
                    {plan.id === "annual" && (
                      <span className="bg-white px-1 rounded-full text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                        20% off
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 ring-gray-300 sm:mt-5 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Membership Benefits
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  One plan, unlimited access. Get unhindered access to an
                  ever-growing library of coding resources tailored for all
                  skill levels.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    Features Included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      One plan. Unlimited Access.
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {currency.symbol}
                        {price} {/* Changed price to selectedPlan.price */}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        {currency.currency}
                      </span>
                    </p>
                    <div className="text-sm  leading-6 tracking-wide text-gray-600">
                      {plans.map((plan) =>
                        plan.id === selectedPlan.id ? (
                          <div key="" className="flex items-center justify-center gap-x-2">
                            <span className="text-smleading-6 tracking-wide text-gray-600">
                              {plan.name}
                            </span>
                          </div>
                        ) : null
                      )}
                    </div>


                    {
                      user === null ? ( 
                         currency.currency === "USD" ? (
                      <a
                        href={
                          activeTab === "annual"
                            ? "https://buy.stripe.com/test_14kaF81hA36G8Yo4gh"
                            : activeTab === "semiAnnual"
                            ? "https://buy.stripe.com/test_dR6aF89O66iS5Mc28a"
                            : "https://buy.stripe.com/test_cN23cGbWefTseiIcMM"
                        }
                        className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        aria-label={`Subscribe for ${activeTab} plan`}
                      >
                        Subscribe
                      </a>
                    ) : (
                      <div>
                        <FlutterWaveButton
                          className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          {...fwConfig}
                        />
                      </div>
                    )) :
                    (
                      <>
                      <NavLink to="/signUp" className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Subscribe
                      </NavLink>
                      </>
                    )
                    }
                   

                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement or personal record-keeping.
                    </p>
                  </div>
                </div>
              </div>
              {/*<p className={classNames(tier.mostPopular ? "text-gray-300" : "text-gray-600", "mt-4 text-sm leading-6 ")}>{tier.description}</p>*/}
              <p className="mt-12 flex items-baseline gap-x-1">
                <span className={classNames(tiers.mostPopular? "text-white" : "text-gray-900","text-5xl font-bold tracking-tight")}>{tiers.price[frequency.value]}</span>
                <span className={classNames(tiers.mostPopular ? "text-gray-300" : "text-gray-600","text-sm font-semibold leading-6")}>{frequency.priceSuffix}</span>
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={classNames(tiers.mostPopular? "text-white" : "text-black", 'mt-6 font-bold')}>What's included</p>
              <ul role="list" className={classNames(tiers.mostPopular? "text-gray-300" : "text-gray-600", "mt-4 space-y-3 text-sm leading-6  min-h-[240px] xl:mt-10")}>
                {tiers.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className={classNames(tiers.mostPopular ? "text-[#5300CA] bg-white rounded-full": "text-white bg-[#5300CA] rounded-full" ,"h-6 flex-none justify-center font-sans")}aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={'/CheckoutPriceCart'}
                href={tiers.href}
                aria-describedby={tiers.id}
                className={classNames(
                  tiers.mostPopular
                    ? 'bg-white text-[#5300CA] shadow-sm hover:bg-[#5300CA] hover:text-white hover:border-white border '
                    : 'text-white bg-[#5300CA] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 border-[#5300CA] hover:text-[#5300CA] hover:bg-white ',
                  'mt-6 block rounded-[30px] py-4 px-3 text-center text-sm font-semibold leading-6  transition ease-out  duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/**Freauently asked Questions */}
        <div className={"py-40 "}>
          <h6 className={`${styles.homeHeadingStyle}`}>FAQs</h6>
          <h2 className={`${styles.homeSubHeadingStyle}`}>
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 ">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="bg-white p-4 rounded-[20px] "
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7  font-space">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        <PricingSection/>
        <FaqComponent/>
        <CallToAction />
      </div>
    </>
  );
}
