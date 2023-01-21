import EmailComponent from "./components/EmailComponent"
import Features from "./components/Features"
import Footer from "./components/Footer"
import PricingPlans from "./components/PricingPlans"
import PrimaryButton from "./components/PrimaryButton"
import TopSection from "./components/TopSection"
import logo from "../assets/logo.svg";


function App() {

  return (
    <div className="">
      <div className="py-[48px] px-[39px]">
        <img src={logo} alt="maker logo" />
      </div>
      <TopSection />
      <Features />
      <PricingPlans />
      <Footer />
    </div>
  )
}

export default App
