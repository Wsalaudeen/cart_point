import "./Hero.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../Data/carousel";
const Hero = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // arrows: true,
    // focusOnSelect: true,
  };

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">Shop Smarter,Shop Faster With QuickCart</h1>
        <p>Your One-Stop Shop for Everything You Need</p>
        <a href="#" className="cta-button" aria-label="start shopping now">
          Start Shopping Now
        </a>
      </div>
      <div className="carousel-container">
        <div
          className="hero-carousel"
          role="region"
          aria-labelledby="carousel-heading"
        >
          <h2 id="carousel-heading" className="visually-hidden">
            Featured Products
          </h2>
          <Slider {...carouselSettings}>
            {Carousel.map((item) => (
              <div key={item.id} className="carousel-item">
                <div className="img-body">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
