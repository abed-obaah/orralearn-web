/* eslint-disable no-unused-vars */
import  { createContext, useContext, useState ,useEffect,useCallback} from 'react';

let logoutTimer;
const StateContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (items) => {},
  language: (language) => {},
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

  const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'))

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userInfo:storedUserInfo
  };
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialUserInfo;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUserInfo = tokenData.userInfo
  }
  const [token, setToken] = useState(initialToken);
  const [ uInfo,setUinfo] = useState(initialUserInfo)
 // const userLoggedIn = true;
   const userLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userInfo")
    window.location.replace("/");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const logInHandler = (token, expirationTime,retrievedUserInfo) => {
    const userInfo = JSON.stringify(retrievedUserInfo)
    setToken(token);
    setUinfo(retrievedUserInfo)
    localStorage.setItem('userInfo',userInfo)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
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
        userInfo:uInfo,
        isLoggedIn: userLoggedIn,
        login: logInHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);