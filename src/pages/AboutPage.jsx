import Mission from "../components/Mission"
import ReusableHero from "../components/ReuseableHero"
import { aboutHeroContent1 } from "../components/heroContent"

const AboutPage = () => {
  return (
    <div>
      <ReusableHero content={aboutHeroContent1} />
      <Mission />
    </div>
  )
}

export default AboutPage