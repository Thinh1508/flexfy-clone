import { ButtonCustom } from "../../Button"

export const HomePromotion = () => {
  return (
    <div className="home-promotion">
      <div className="home-promotion__wrapper home-promotion__wrapper--content">
        <h1 className="home-promotion__title">Promotion for Member</h1>
        <p className="home-promotion__text">
          Sign up now and get <span>₱50</span> coupon
        </p>
        <ButtonCustom className="btn--join">join reward</ButtonCustom>
      </div>
      <div className="home-promotion__wrapper">
        <img
          src="/promotion.jpg"
          alt="featured_home_3"
          className="home-promotion__img"
        />
      </div>
    </div>
  )
}
