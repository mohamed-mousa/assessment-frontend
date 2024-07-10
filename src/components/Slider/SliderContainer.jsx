import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderNextArrow, SliderPrevArrow } from "@/components";
function SliderContainer({
  newSettings,
  children,
  arrowsStyle,
  slidesNumber,
  slidesNumberInPhone,
}) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: slidesNumber || 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesNumberInPhone || 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`${arrowsStyle} flex gap-3 md:top-20 md:mb-0 mb-4 justify-center`}
      >
        <SliderNextArrow onClick={next} />
        <SliderPrevArrow onClick={previous} />
      </div>
      <div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...(newSettings || settings)}
        >
          {children}
        </Slider>
      </div>
    </>
  );
}

export default SliderContainer;
