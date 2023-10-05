
import ResponsiveCart from "../../components/checkoutCart/ResponsiveCart.jsx";
import {products, subtotal} from "../../util/usefull-data.js";
import Cart from "../../components/checkoutCart/Cart.jsx";
import CheckoutForm from "../../components/checkoutCart/CheckoutForm.jsx";
import AuthResNav from "../../layout/navbar/auth-navs/AuthResNav.jsx";




const CheckoutCart = () => {
    return (
        <>
            <AuthResNav products={products} subtotal={subtotal}/>
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