import { BestSeller } from "./homeComponents/BestSeller"
import { HomeBanner } from "./homeComponents/HomeBanner"

export const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <BestSeller />
    </div>
  )
}
