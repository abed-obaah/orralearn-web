import { loadStripe } from "@stripe/stripe-js";
//Firebase db import from firebase.js
import { useStateContext } from "../context/contextProvider";
import { db } from "../middleware/firebase";

export const PlanItem = ({ productData, isCurrentPackage }) => {
  const {userInfo} = useStateContext()

  const loadCheckout = async (priceId) => {
    //Disable submit button while checkout processing
    setBtnStatus({
      isLoading: true,
      isDisabled: true,
    });

    const docRef = await db
      .collection("customers")
      .doc(userInfo.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occurred: ${error.message}`);
        setBtnStatus({
          isLoading: false,
          isDisabled: false,
        });
      }

      if (sessionId) {
        const stripe = await loadStripe(
          process.env.REACT_APP_STRIPE_PUBLIC_KEY
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
};
