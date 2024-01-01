import Mission from "../components/Mission"
import PressRelease from "../components/PressRelease"
import ReusableHero from "../components/ReuseableHero"
import { aboutHeroContent1 } from "../heroContent"

const AboutPage = () => {
  return (
    <div>
      <ReusableHero content={aboutHeroContent1} />
      <Mission />
      <PressRelease />
    </div>
  )
}

export default AboutPage