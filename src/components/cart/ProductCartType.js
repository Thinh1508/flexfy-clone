import { ButtonCustom } from "../Button"

export const ProductCartLow = ({ product }) => {
  return (
    <div className="product-cart--low">
      <div className="product-cart__img--low">
        <img src={product.image} alt="img-product" className="img-product" />
        <ButtonCustom className="btn--low">{product.category}</ButtonCustom>
      </div>
    </div>
  )
}
