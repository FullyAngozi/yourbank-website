import JobOpenings from "../components/JobOpenings"
import OurBenefits from "../components/OurBenefits"
import OurValues from "../components/OurValues"
import ReusableHero from "../components/ReuseableHero"
import FAQ from "../components/FAQ"
import { CareerHeroContent } from "../heroContent"


const CareerPage = () => {
  return (
    <section>
      <div>
        <ReusableHero content={CareerHeroContent} />
        <OurValues />
        <OurBenefits />
        <JobOpenings />
        <FAQ />
      </div>
    </section>
  )
}

export default CareerPage