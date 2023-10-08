import {faqs} from "../../util/usefull-data.js";
import { styles } from "../../util/genral-style.js";

import {Disclosure} from "@headlessui/react";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline";

const FaqComponent = () => {
    return (
        <div className={"py-40 mx-auto max-w-7xl px-6 lg:px-8 "}>
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
    );
};

export default FaqComponent;