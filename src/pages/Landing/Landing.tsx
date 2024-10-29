import IntroSection from "./components/IntroSection";
import AutomatedSection from "./components/AutomatedSection";
import { ParallaxProvider } from "react-scroll-parallax";
import HowItWorksSection from "./components/HowItWorksSection";
const Landing = () => {
  return (
    <div className=" px-4 py-10 overflow-hidden">
      <ParallaxProvider>
        <IntroSection />
        <AutomatedSection />
        <HowItWorksSection />
      </ParallaxProvider>
    </div>
  );
};

export default Landing;
