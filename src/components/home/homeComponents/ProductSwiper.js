import React, { useState, useRef } from "react"
import "./styles.scss"

import { ProductCart } from "../../cart/ProductCart"
import { CustomNavigation } from "./CustomNavigation"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { ProductCartLow } from "../../cart/ProductCartType"
import { ProductCartOurCrew } from "../../cart/ProductCartOurCrew"

export const ProductSwiper = ({ data, type }) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef(null)

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const handleNext = () => {
    if (!isEnd && swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const handlePrev = () => {
    if (!isBeginning && swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={42}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {data.map((product) => (
          <SwiperSlide>
            {type ? (
              type === "OurCrew" ? (
                <ProductCartOurCrew product={product} />
              ) : (
                <ProductCartLow product={product} />
              )
            ) : (
              <ProductCart product={product} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper__navigation">
        <CustomNavigation
          direction="prev"
          onClick={handlePrev}
          disabled={isBeginning}
        />
        <CustomNavigation
          direction="next"
          onClick={handleNext}
          disabled={isEnd}
        />
      </div>
    </>
  )
}
