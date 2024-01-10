import "./styles.scss"
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"

export const ProductCart = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index + 1 <= product.star ? (
      <MdOutlineStarPurple500 key={index} size={20} className="star-item" />
    ) : (
      <MdOutlineStarOutline key={index} size={20} className="star-item" />
    )
  )

  return (
    <div className="product-cart">
      <div className="product-cart__img">
        <img src={product.image} alt="img-product" className="img-product" />
        {product.crewFave && (
          <div className="product-cart__note product-cart__note-crew">
            <p>CREW FAVE</p>
          </div>
        )}

        {product.newArrival && (
          <div className="product-cart__note ">
            <p>NEW ARIVAL</p>
          </div>
        )}
      </div>
      <div className="product-cart__rate">
        <div className="rate__star">{stars}</div>
        <p className="rate__reviews">{product.review} REVIEWS</p>
      </div>
      <div className="product-cart__content">
        <p className="product-cart__name">{product.name}</p>
        <p className="product-cart__price">${product.price}</p>
        <div className="product-cart__color">
          {product.color?.map((color, index) => (
            <span
              className={`${color} ${index === 0 ? "color--active" : ""}`}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}
