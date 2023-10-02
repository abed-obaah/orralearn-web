import ReusableNavbar from "../../layout/navbar/auth-navs/ReusableNavbar.jsx";

import ResponsiveCart from "../../components/checkoutCart/ResponsiveCart.jsx";
import {products, subtotal} from "../../util/usefull-data.js";
import Cart from "../../components/checkoutCart/Cart.jsx";
import CheckoutForm from "../../components/checkoutCart/CheckoutForm.jsx";




const CheckoutCart = () => {
    return (
        <>
            <ReusableNavbar products={products} subtotal={subtotal}/>
            <main className="bgOne min-h-screen h-full lg:h-screen lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
                {/* Order summary */}
                <ResponsiveCart/>

                {/* CheckoutCart form */}
                <Cart/>

                <CheckoutForm/>
            </main>
        </>
    );
};

export default CheckoutCart;