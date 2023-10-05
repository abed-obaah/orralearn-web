/* eslint-disable no-unused-vars */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../middleware/firebase"; // assuming you've initialized Firestore here

let logoutTimer;
const StateContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (items) => {},
  language: (language) => {},
  user: null,
  setUser: (user) => {},
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

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  // const userLoggedIn = true;
  const userLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    window.location.replace("/");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    console.log(user);
    // Fetch user data if user is logged in
    if (userId) {
      // Fetch user data from Firestore
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, "Users", userId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUser(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log("Error fetching user:", error);
        }
      };

 if (userId && !user) {
   fetchUserData();
 }    }
  }, [userId]);

  const logInHandler = (token, expirationTime, userId) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("userId", userId);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  return (
    <StateContext.Provider
      value={{
        token: token,
        isLoggedIn: userLoggedIn,
        login: logInHandler,
        logout: logoutHandler,
        user,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
