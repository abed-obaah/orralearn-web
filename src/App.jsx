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
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Footer from "./layout/footer/Footer";
import Notfound from "./pages/Notfound";
import AuthLayout from "./layout/auth-layout/AuthLayout";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/auth-section/Dashboard.jsx";
import Courses from "./pages/auth-section/Courses.jsx";
import CodingPlayground from "./pages/auth-section/CodingPlayground.jsx";
// import QA from "./pages/auth-section/learning/LeaningPaths";
import Challenges from "./pages/auth-section/challenges/Challenges.jsx";
import Settings from "./pages/auth-section/Settings.jsx";
import Community from "./pages/auth-section/Community.jsx";
import Inbox from "./pages/auth-section/Inbox.jsx";
import LearningPaths from "./pages/auth-section/learning/LeaningPaths";
import LearningPathsDetails from "./pages/auth-section/learning/LearningPathsDetails";
import ChallengesDetails from "./pages/auth-section/challenges/ChallengesDetails.jsx";
import StartChallenge from "./pages/auth-section/challenges/StartChallenge";
import Projects from "./pages/auth-section/Projects.jsx";
import FrontEndEditor from "./components/FrontEndEditor.jsx";
import Ebooks from "./pages/auth-section/ebooks/Ebooks.jsx";
import EbookDashboard from "./pages/auth-section/ebooks/EbookDashboard.jsx";
import EbooksDetails from "./pages/auth-section/ebooks/EbooksDetails.jsx";
import CheckoutCart from "./pages/auth-section/CheckoutCart.jsx";
import CheckoutPriceCart from "./pages/CheckoutPriceCart";
import EbookReader from "./pages/auth-section/ebooks/EbookReader.jsx";
import CourseDetail from "./pages/auth-section/courses/CourseDetail";
import CoursePlayer from "./pages/auth-section/courses/CoursePlayer";
import FlutterwavePay from "./components/FlutterwavePay";
import ResetPasswordUsingEmail from "./pages/ResetPasswordUsingEmail.jsx";
import Test from "./pages/auth-section/courses/Test/Test";
import CoursesLandingPage from "./pages/auth-section/courses/CoursesLandingPage.jsx";
import AuthPricing from "./pages/auth-section/AuthPricing.jsx";
import Account from "./components/settings/Account.jsx";
import Payments from "./components/settings/Payments.jsx";
import PrelaunchPage from "./pages/PreLaunchPage";

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
        <Route path={'CheckoutPriceCart'} element={<CheckoutPriceCart/>}/>
        <Route path="faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
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
        <Route path={"/"} element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={"courses/*"} element={<Courses />}>
            <Route index element={<CoursesLandingPage />} />
            <Route path={"courseDetail"} element={<CourseDetail />} />
          </Route>
          <Route path={"Challenges"} element={<Challenges />} />
          <Route path={"Challenges/:id"} element={<ChallengesDetails />} />
          <Route
            path="/Challenges/:courseId/:itemId"
            element={<StartChallenge />}
          />
          <Route path={"pricing"} element={<Pricing />} />

          <Route path={"community"} element={<Community />} />
          <Route path={"inbox"} element={<Inbox />} />
          <Route path={"LearningPaths"} element={<LearningPaths />} />
          <Route
            path={"LearningPaths/:id"}
            element={<LearningPathsDetails />}
          />
          <Route path={"codingPlayGround"} element={<CodingPlayground />} />
          <Route path={"courseDetail"} element={<CourseDetail />} />

          {/* <Route path={"QA"} element={<QA/>}/> */}
          <Route path={"projects"} element={<Projects />} />
          <Route path={"payment"} element={<FlutterwavePay />} />
          <Route path={"authPricing"} element={<AuthPricing />} />
          <Route path={"settings"} element={<Settings />}>
            <Route index element={<Account />} />
            <Route path={"payments"} element={<Payments />} />
          </Route>
        </Route>
        <Route path={"/ebooks"} element={<Ebooks />}>
          <Route index element={<EbookDashboard />} />
          <Route path={":id"} element={<EbooksDetails />} />
        </Route>
        <Route path={"pdfReader/:id"} element={<EbookReader />} />
        <Route path={"checkoutCart"} element={<CheckoutCart />} />
        <Route path={"editor"} element={<FrontEndEditor />} />
        <Route path={"coursePlayer"} element={<CoursePlayer />} />
        <Route path={"test"} element={<Test />} />
        <Route path={"payment"} element={<FlutterwavePay />} />
        <Route path={"thankyou"} element={<PrelaunchPage />} />
        <Route path="notfound" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    );
    // content =(<AuthLayout/>)
  }
  return <main className={"max-w-screen"}>{content}</main>;
}

export default App;
