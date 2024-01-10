import "./styles.scss"
import imageBanner from "../../../assets/images/imageBanner.jpg"
import { ButtonCustom } from "../../Button"

export const HomeBanner = () => {
  return (
    <div className="home__banner">
      <img src={imageBanner} alt="banner" className="banner__image" />
      <ButtonCustom className="btn--normal">shop sale</ButtonCustom>
    </div>
  )
}
