import { BannerBottom } from "./homeComponents/BannerBottom"
import { BestSeller } from "./homeComponents/BestSeller"
import { HomeBanner } from "./homeComponents/HomeBanner"
import { HomeCommunication } from "./homeComponents/HomeCommunication"
import { HomeCommunity } from "./homeComponents/HomeCommunity"
import { HomeConfidence } from "./homeComponents/HomeConfidence"
import { HomePromotion } from "./homeComponents/HomePromotion"
import { LowSeller } from "./homeComponents/LowSeller"
import { MediumSeller } from "./homeComponents/MediumSeller"
import { OurCrew } from "./homeComponents/OurCrew"

export const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <BestSeller />
      <MediumSeller />
      <LowSeller />
      <BannerBottom />
      <OurCrew />
      <HomePromotion />
      <HomeCommunication />
      <HomeCommunity />
      <HomeConfidence />
    </div>
  )
}
