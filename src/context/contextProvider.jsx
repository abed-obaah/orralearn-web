/* eslint-disable no-unused-vars */
import { use } from "i18next";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { doc, collection, getDocs } from "firebase/firestore"; // Firebase Firestore imports
import { db } from "../middleware/firebase"; // Firebase db import from firebase.js

let logoutTimer;
const StateContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (items) => {},
  language: (language) => {},
  subscription: {
    subscribed: false,
    subscription_type: null,
  },
  setSubscription: (subscription) => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTimeout = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTimeout - currentTime;

  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userInfo: storedUserInfo,
  };
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialUserInfo;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUserInfo = tokenData.userInfo;
  }
  const [token, setToken] = useState(initialToken);
  const [uInfo, setUInfo] = useState(initialUserInfo);
  // const userLoggedIn = true;
  const userLoggedIn = !!token;


  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userInfo");
    window.location.replace("/");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const logInHandler = (token, expirationTime, retrievedUserInfo) => {
    const userInfo = JSON.stringify(retrievedUserInfo);
    setToken(token);
    setUInfo(retrievedUserInfo);
    localStorage.setItem("userInfo", userInfo);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const updateUserInfo =(values)=>{
    setUInfo(values)
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
          console.log("Subscription State: ", subscription);

  }, [tokenData, logoutHandler]);

  const [subscription, setSubscription] = useState({
    subscribed: false,
    subscription_type: null,
    
  });

  useEffect(() => {
    console.log(uInfo);

    async function checkUserSubscription() {
      let subscribed = false;
      let subscription_type = null;

      if (!uInfo || !uInfo.id) {
        console.log("uInfo or uInfo.id is missing!");
        return;
      }

      const userDocRef = doc(db, "Users", uInfo.id);
      console.log("Document Reference: ", userDocRef);

      const flutterwaveSubscriptions = await getDocs(
        collection(userDocRef, "flutterwave_subscription")
      );

      if (!flutterwaveSubscriptions.empty) {
        for (let doc of flutterwaveSubscriptions.docs) {
          const data = doc.data();
          console.log("Flutterwave Data: ", data);

          if (data.end_date.seconds * 1000 > Date.now()) {
            subscribed = true;
            subscription_type = data.plan;
            console.log(
              "User is subscribed with Flutterwave plan:"+ subscribed,
              subscription_type
            );
            break;
          }
        }
      } else {
        console.log("No Flutterwave subscriptions found for this user.");
      }

      // Check stripe subscriptions if not subscribed via Flutterwave
      if (!subscribed) {
        const stripeSubscriptions = await getDocs(
          collection(userDocRef, "subscriptions")
        );

        if (!stripeSubscriptions.empty) {
          for (let doc of stripeSubscriptions.docs) {
            const data = doc.data();

            if (
              data.current_period_end.seconds * 1000 > Date.now() &&
              data.items[0].plan.active
            ) {
              subscribed = true;
              const interval = data.items[0].plan.interval;
              if (interval === "month") {
                subscription_type = "monthly";
              } else if (interval === "6 months") {
                subscription_type = "semiAnnual";
              } else if (interval === "year") {
                subscription_type = "annually";
              }
              console.log(
                "User is subscribed with Stripe plan:",
                subscription_type
              );
              break;
            }
          }
        } else {
          console.log("No Stripe subscriptions found for this user.");
        }
      }
                  setSubscription({ subscribed, subscription_type });

    }

    checkUserSubscription();
  }, [uInfo]);

  return (
    <StateContext.Provider
      value={{
        token: token,
        userInfo: uInfo,
        isLoggedIn: userLoggedIn,
        login: logInHandler,
        logout: logoutHandler,
        subscription,
        setSubscription,
        updateUserInfo
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
