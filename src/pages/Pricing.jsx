import PricingSection from "../components/PricingSection.jsx";
import CallToAction from "../components/shared/CallToAction.jsx";
import FaqComponent from "../components/FaqComponent.jsx";

import { styles } from "../util/genral-style.js";

export default function Pricing() {

  return (
    <>
      <div
        className={`generalNavPadding  pb-24 sm:pb-32 ${styles.paddingX} bgOne `}
      >
        <PricingSection/>
        <FaqComponent/>
        <CallToAction />
      </div>
    </>
  );
}
