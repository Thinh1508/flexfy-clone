import { ProductSwiper } from "./ProductSwiper"

export const OurCrew = () => {
  return (
    <div className="seller">
      <div className="product-list">
        <div className="product-list__header">
          <h1 href="/" className="product-list__title">
            Our Crew is Raving
          </h1>
        </div>
        <div className="product-list__body product-list__body--ourCrew">
          <div className="product-list__cart">
            <ProductSwiper data={data} type={"OurCrew"} />
          </div>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    name: "Becky",
    star: 5,
    image: "/upto3.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Amy",
    star: 4,
    image: "/upto7.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Julia",
    star: 5,
    image: "/upto6.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Megan",
    star: 4,
    image: "/upto5.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Mads",
    star: 5,
    image: "/upto4.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Max",
    star: 4,
    image: "/upto2.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
  {
    name: "Army",
    star: 5,
    image: "/upto1.jpg",
    comment: "my go-to, everyday, love-it T-shirt",
  },
]
