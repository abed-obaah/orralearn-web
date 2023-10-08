import { useEffect, useState } from "react";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import CallToAction from "../components/shared/CallToAction.jsx";
import { faqs } from "../util/usefull-data.js";
import { styles } from "../util/genral-style.js";
import {
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline/index.js";
import { NavLink } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { useStateContext } from "../context/contextProvider.jsx";

import { getCheckoutUrl } from "../components/StripePayments.jsx";
import app from "../middleware/firebase.js";

const includedFeatures = [
  "12+ coding courses",
  "100+ coding challenges and projects",
  "Access to GPT-4 AI powered mentor",
  "Access to online IDEs",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const { subscription } = useStateContext();

  const [currency, setCurrency] = useState({
    country: "United States",
    currency: "USD",
    symbol: "$",
    flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
    price: 9.99,
    price2: 54.99,
    price3: 99.99,
  });
  const [price, setPrice] = useState(currency.price);

  const { userInfo } = useStateContext();

  const handleCurrencyChange = (e) => {
    const selectedCountry = e.target.value;
    const selectedCurrency = currencies.find(
      (currencyOption) => currencyOption.country === selectedCountry
    );

    if (selectedCurrency) {
      setCurrency(selectedCurrency);
      const updatedPlan = plans.find((p) => p.id === activeTab);
      if (updatedPlan) {
        const newPrice =
          selectedCurrency[
            updatedPlan.id === "monthly"
              ? "price"
              : updatedPlan.id === "semiAnnual"
              ? "price2"
              : "price3"
          ];
        setPrice(newPrice);
        setSelectedPlan({ ...updatedPlan, price: newPrice });
      }
    }
  };

  const currencies = [
    {
      country: "United States",
      currency: "USD",
      symbol: "$",
      flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      price: 9.99,
      price2: 54.99,
      price3: 99.99,
    },
    {
      country: "Nigeria",
      currency: "NGN",
      symbol: "₦",
      flag: "https://www.countryflags.io/NG/flat/64.png",
      price: 10000,
      price2: 55000,
      price3: 100000,
    },
    {
      country: "Ghana",
      currency: "GHS",
      symbol: "GH₵",
      flag: "https://www.countryflags.io/GH/flat/64.png",
      price: 117.99,
      price2: 647.99,
      price3: 1179.99,
    },
    {
      country: "Kenya",
      currency: "KES",
      symbol: "KSh",
      flag: "https://www.countryflags.io/KE/flat/64.png",
      price: 1480,
      price2: 8140,
      price3: 14800,
    },
    {
      country: "South Africa",
      currency: "ZAR",
      symbol: "R",
      flag: "https://www.countryflags.io/ZA/flat/64.png",
      price: 196,
      price2: 1078,
      price3: 1960,
    },
    {
      country: "Cameroon",
      currency: "XAF",
      symbol: "FCFA",
      flag: "https://www.countryflags.io/CM/flat/64.png",
      price: 6500,
      price2: 35750,
      price3: 65000,
    },
  ];

  const plans = [
    { name: "Monthly", price: currency.price, id: "monthly" },
    { name: "Every 6 months", price: currency.price2, id: "semiAnnual" },
    { name: "Annually", price: currency.price3, id: "annual" },
  ];

  const handleTabClick = (planId) => {
    setActiveTab(planId);
    const plan = plans.find((p) => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      setPrice(plan.price); // Update the price
    }
  };

  const [activeTab, setActiveTab] = useState("monthly"); // For tab control

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: price,
    currency: currency.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userInfo.email,
      phone_number: userInfo.phone,
      name: userInfo.username,
    },
    customizations: {
      title: "Orralearn",
      description: "Payment for Orralearn subscription",
      logo: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/369062406_285837120861814_5938473324719847084_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=oWFzmYiQNcsAX86DGxJ&_nc_ht=scontent-atl3-2.xx&oh=00_AfATuzr8xej3AkwWueWNuk2zxFa2dZRTir3Iq79i43TOTw&oe=6523619B",
    },
  };

  const fwConfig = {
    ...config,
    text: "Subscribe",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  useEffect(() => {
    // Fetch user's country based on their IP address
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const country = response.data.country_name;
        const selectedCurrency = currencies.find(
          (currencyOption) => currencyOption.country === country
        );

        if (selectedCurrency) {
          setCurrency(selectedCurrency);
          // Your code to set the price based on the selectedCurrency
        }
      } catch (error) {
        console.error("An error occurred while fetching the country:", error);
      }
    };

    fetchCountry();
  }, []);

  const priceId1 = "price_1NxzutENS5E2eJhNiuJL9Vq5";
  const priceId2 = "price_1Nxzu1ENS5E2eJhN7AIHWLXm";
  const priceId3 = "price_1Nxzs5ENS5E2eJhN7HazRKuR";

  const priceIdTest1 = "price_1NxqajENS5E2eJhN7UCG4RRu";
  const priceIdTest2 = "price_1NxqJ8ENS5E2eJhN9058SZzo";
  const priceIdTest3 = "price_1NxqHUENS5E2eJhNdJHJiwuc";

  useEffect(() => {
    const updatedPlan = plans.find((p) => p.id === activeTab);
    if (updatedPlan) {
      const newPrice =
        currency[
          updatedPlan.id === "monthly"
            ? "price"
            : updatedPlan.id === "semiAnnual"
            ? "price2"
            : "price3"
        ];
      setPrice(newPrice);
      setSelectedPlan({ ...updatedPlan, price: newPrice });
    }
  }, [activeTab, currency]);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  useEffect(() => {
    console.log(userInfo);
    const PurchaseSubsription = async () => {
      setLoading(true);
      let selectedPriceId;
      if (activeTab === "annual") {
        selectedPriceId = priceId1;
      } else if (activeTab === "semiAnnual") {
        selectedPriceId = priceId2;
      } else {
        // default to monthly
        selectedPriceId = priceId3;
      }

      console.log(selectedPriceId);

      const checkoutUrl = await getCheckoutUrl(
        app,
        selectedPriceId,
        userInfo.id
      );
      setCheckoutUrl(checkoutUrl);
      console.log(checkoutUrl);

      setLoading(false);
    };
    PurchaseSubsription();
  }, [activeTab]);

  return (
    <>
      <div
        className={`  pb-24 sm:pb-32 ${styles.paddingX} bgOne `}
      >
        <div>
          <div className="mx-auto max-w-7xl  ">
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
                          <div className="flex items-center justify-center gap-x-2">
                            <span className="text-smleading-6 tracking-wide text-gray-600">
                              {plan.name}
                            </span>
                          </div>
                        ) : null
                      )}
                    </div>

                    {userInfo ? (
                      currency.currency === "USD" ? (
                        loading ? (
                          <span className="mt-4 block w-full rounded-md bg-[#540cc878] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            Loading...
                          </span>
                        ) : (
                          <a
                            href={checkoutUrl}
                            className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            aria-label={`Subscribe for ${activeTab} plan`}
                          >
                            Subscribe
                          </a>
                        )
                      ) : (
                        <div>
                          <FlutterWaveButton
                            className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            {...fwConfig}
                          />
                        </div>
                      )
                    ) : (
                      <>
                        <NavLink
                          to="/signUp"
                          className="mt-4 block w-full rounded-md bg-[#550CC8] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Subscribe
                        </NavLink>
                      </>
                    )}

                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement or personal record-keeping.
                    </p>
                  </div>
                </div>
              </div>
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
        {!userInfo ? <CallToAction /> : null}
      </div>
    </>
  );
}
