import { ButtonCustom } from "../../../components/Button"
import { ProductSwiper } from "./ProductSwiper"

export const BestSeller = () => {
  return (
    <div className="seller">
      <div className="product-list">
        <div className="product-list__header">
          <h1 href="/" className="product-list__title">
            Best Sellers
          </h1>
          <ButtonCustom>shop now</ButtonCustom>
        </div>
        <div className="product-list__body">
          <div className="product-list__cart">
            <ProductSwiper data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    name: "Product - 1 Meta",
    price: 48,
    star: 4,
    review: "17",
    image: "/product1.jpg",
    crewFave: true,
    newArrival: false,
    color: ["color1", "color2", "color3"],
  },
  {
    name: "Product - 2 Meta",
    price: 7,
    star: 4,
    review: "317",
    image: "/product2.jpg",
    crewFave: false,
    newArrival: true,
    color: ["color2", "color3"],
  },
  {
    name: "Product - 3 Meta",
    price: 8,
    star: 4,
    review: "31",
    image: "/product3.jpg",
    crewFave: false,
    newArrival: false,
    color: ["color1", "color3"],
  },
  {
    name: "Product - 4 Meta",
    price: 18,
    star: 4,
    review: "1",
    image: "/product4.jpg",
    crewFave: false,
    newArrival: false,
    color: ["color2", "color3"],
  },
  {
    name: "Product - 5 Meta",
    price: 28,
    star: 4,
    review: "3",
    image: "/product5.jpg",
    crewFave: false,
    newArrival: false,
    color: ["color1", "color2", "color3"],
  },
  {
    name: "Product - 6 Meta",
    price: 38,
    star: 4,
    review: "37",
    image: "product6.jpg",
    crewFave: false,
    newArrival: false,
    color: ["color1", "color2", "color3"],
  },
  {
    name: "Product - 7 Meta",
    price: 58,
    star: 4,
    review: "17",
    image: "/product2.jpg",
    crewFave: false,
    newArrival: false,
    color: ["color1", "color2", "color3"],
  },
]
