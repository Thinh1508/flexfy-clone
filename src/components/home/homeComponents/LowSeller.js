import { ProductSwiper } from "./ProductSwiper"

export const LowSeller = () => {
  return (
    <div className="seller">
      <div className="product-list">
        <div className="product-list__header">
          <h1 href="/" className="product-list__title">
            15% Off Top Categories
          </h1>
        </div>
        <div className="product-list__body product-list__body--low">
          <div className="product-list__cart">
            <ProductSwiper data={data} type={"Low"} />
          </div>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    image: "/product6.jpg",
    category: "T-Shirt",
  },
  {
    image: "/product5.jpg",
    category: "T-Shirt",
  },
  {
    image: "/upto7.jpg",
    category: "Trousers",
  },
  {
    image: "/upto6.jpg",
    category: "Hoodie",
  },
  {
    image: "/product4.jpg",
    category: "T-Shirt",
  },
  {
    image: "/product2.jpg",
    category: "T-Shirt",
  },
  {
    image: "/product5.jpg",
    category: "T-Shirt",
  },
]
