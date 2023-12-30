import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero"
import OurFeatures from "../components/OurFeatures";
import OurProduct from "../components/OurProduct";
import Testimonail from "../components/Testimonail";
import UseCases from "../components/UseCases";


const HomePage = () => {
  return (
    <>
     <Hero />
     <OurProduct />
     <UseCases />
     <OurFeatures />
     <FAQ />
     <Testimonail />
     <CTA />
    </>
  )
}

export default HomePage