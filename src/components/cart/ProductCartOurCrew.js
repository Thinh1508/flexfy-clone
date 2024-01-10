import "./styles.scss"
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"

export const ProductCartOurCrew = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index + 1 <= product.star ? (
      <MdOutlineStarPurple500
        key={index}
        size={28}
        className="star-item--ourCrew"
      />
    ) : (
      <MdOutlineStarOutline
        key={index}
        size={28}
        className="star-item--ourCrew"
      />
    )
  )

  return (
    <div className="product-cart">
      <div className="product-cart__img--ourCrew">
        <img src={product.image} alt="img-product" className="img-product" />
      </div>
      <div className="product-cart__rate--ourCrew">
        <div className="rate__star--ourCrew">{stars}</div>
      </div>
      <div className="product-cart__content--ourCrew">
        <p className="product-cart__comment">"{product.comment}"</p>
        <p className="product-cart__name--ourCrew">{product.name}</p>
        <a href="/" className="product-cart__link">
          SHOP STYLE
        </a>
      </div>
    </div>
  )
}
