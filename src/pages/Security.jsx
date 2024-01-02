import FAQ from "../components/FAQ"
import HowWeProtect from "../components/HowWeProtect"
import ReusableHero from "../components/ReuseableHero"
import { SecurityHeroContent } from "../heroContent"


const Security = () => {
  return (
    <section>
        <ReusableHero content={SecurityHeroContent} />
        <HowWeProtect />
        <FAQ />
    </section>
  )
}

export default Security