import "./App.css";
import { useStateContext } from "./context/contextProvider";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./layout/navbar/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./layout/footer/Footer";
import Notfound from "./pages/Notfound";
import AuthLayout from "./layout/auth-layout/AuthLayout";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/auth-section/Dashboard.jsx";
import Courses from "./pages/auth-section/Courses.jsx";
import CodingPlayground from "./pages/auth-section/CodingPlayground.jsx";
import Challenges from "./pages/auth-section/challenges/Challenges.jsx";
import Settings from "./pages/auth-section/Settings.jsx";
import Inbox from "./pages/auth-section/Inbox.jsx";
import ChallengesDetails from "./pages/auth-section/challenges/ChallengesDetails.jsx";
import FrontEndEditor from "./components/FrontEndEditor.jsx";
import Ebooks from "./pages/auth-section/ebooks/Ebooks.jsx";
import EbookDashboard from "./pages/auth-section/ebooks/EbookDashboard.jsx";
import EbooksDetails from "./pages/auth-section/ebooks/EbooksDetails.jsx";
import CheckoutCart from "./pages/auth-section/CheckoutCart.jsx";
import EbookReader from "./pages/auth-section/ebooks/EbookReader.jsx";
import CourseDetail from "./pages/auth-section/courses/courseDetail";
import CoursePlayer from "./pages/auth-section/courses/CoursePlayer";
import FlutterwavePay from "./components/FlutterwavePay";
import ResetPasswordUsingEmail from "./pages/ResetPasswordUsingEmail.jsx";

function App() {
  const { isLoggedIn } = useStateContext();
  const location = useLocation();

  let content = (
    <>
      {location.pathname !== "/notfound" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/signIn" &&
        location.pathname !== "/resetPassword" &&
          <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/payment" element={<FlutterwavePay />} />
          <Route path="resetPassword" element={<ResetPasswordUsingEmail/>} />
        <Route path="notfound" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      {location.pathname !== "/notfound" &&
        location.pathname !== "/signUp" &&
        location.pathname !== "/signIn" &&
          location.pathname !== "/resetPassword" &&
          <Footer />}
    </>
  );

  if (isLoggedIn) {
    content = (
      <Routes>
        <Route to={"/"} element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={"courses"} element={<Courses />} />
          <Route path={"courseDetail"} element={<CourseDetail />} />
          <Route path={"Challenges"} element={<Challenges />} />
          <Route path={"Challenges/:id"} element={<ChallengesDetails />} />
          <Route path={"inbox"} element={<Inbox />} />
          <Route path={"codingPlayGround"} element={<CodingPlayground />} />
          <Route path={"payment"} element={<FlutterwavePay />} />
          <Route path={"settings"} element={<Settings />} />
        </Route>
        <Route path={"/ebooks"} element={<Ebooks />}>
          <Route index element={<EbookDashboard />} />
          <Route path={":id"} element={<EbooksDetails />} />
        </Route>
        <Route path={"pdfReader/:id"} element={<EbookReader />} />
        <Route path={"checkoutCart"} element={<CheckoutCart />} />
        <Route path={"editor"} element={<FrontEndEditor />} />
        <Route path={"coursePlayer"} element={<CoursePlayer />} />
        <Route path={"payment"} element={<FlutterwavePay />} />
        <Route path={"pricing"} element={<Pricing />} />
        <Route path="notfound" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    );
    // content =(<AuthLayout/>)
  }
  return <main className={"max-w-screen"}>{content}</main>;
}

export default App;
