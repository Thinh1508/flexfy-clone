import { ButtonCustom } from "../../Button"
export const BannerBottom = () => {
  return (
    <div className="banner-bottom">
      <div className="banner-bottom__content">
        <img
          src="/banner-left.jpg"
          alt="Banner Left"
          className="banner-bottom__img"
        />
        <ButtonCustom className="btn--bannerL">New Arrival</ButtonCustom>
      </div>
      <div className="banner-bottom__content">
        <img
          src="/banner-right.png"
          alt="Banner Right"
          className="banner-bottom__img"
        />
        <ButtonCustom className="btn--bannerR">Beanie</ButtonCustom>
      </div>
    </div>
  )
}
