import {Disclosure} from "@headlessui/react";


const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'
const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    // More products...
]
const ResponsiveCart = ({}) => {
    return (
        <section aria-labelledby="order-heading " className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
            <Disclosure as="div" className="mx-auto max-w-lg">
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between mt-20">
                            <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                                Your Order
                            </h2>
                            <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                                {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
                            </Disclosure.Button>
                        </div>

                        <Disclosure.Panel>
                            <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                                {products?.map((product) => (
                                    <li key={product.id} className="flex space-x-6 py-6">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                                        />
                                        <div className="flex flex-col justify-between space-y-4">
                                            <div className="space-y-1 text-sm font-medium">
                                                <h3 className="text-gray-900">{product.name}</h3>
                                                <p className="text-gray-900">{product.price}</p>
                                                <p className="text-gray-500">{product.color}</p>
                                                <p className="text-gray-500">{product.size}</p>
                                            </div>
                                            <div className="flex space-x-4">
                                                <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                    Edit
                                                </button>
                                                <div className="flex border-l border-gray-300 pl-4">
                                                    <button
                                                        type="button"
                                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <form className="mt-10">
                                <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">
                                    Discount code
                                </label>
                                <div className="mt-1 flex space-x-4">
                                    <input
                                        type="text"
                                        id="discount-code-mobile"
                                        name="discount-code-mobile"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>

                            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd className="text-gray-900">{subtotal}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="flex">
                                        Discount
                                        <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                          {discount.code}
                        </span>
                                    </dt>
                                    <dd className="text-gray-900">-{discount.amount}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt>Taxes</dt>
                                    <dd className="text-gray-900">{taxes}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt>Shipping</dt>
                                    <dd className="text-gray-900">{shipping}</dd>
                                </div>
                            </dl>
                        </Disclosure.Panel>

                        <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                            <span className="text-base">Total</span>
                            <span className="text-base">{total}</span>
                        </p>
                    </>
                )}
            </Disclosure>
        </section>

    );
};

export default ResponsiveCart;