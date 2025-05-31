import "./PopularDestinations.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { popularDestinations } from "../../data";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { BsAirplaneEngines } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { useCallback, useRef } from "react";

const PopularDestinations = () => {
  const sliderRef = useRef();

  const handlePrev = useCallback(
    () =>
      //   if(!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev(),
    []
  );

  const handleNext = useCallback(
    () =>
      //   if(!sliderRef.current) return;
      sliderRef.current.swiper.slideNext(),
    []
  );

  return (
    <section id="destinations" data-aos="zoom-up">
      <div className="section-container">
        <div className="section-header">
          <h2>Where Will</h2>
          <h1>You Go Next?</h1>
          <p className="description">
            Discover some of the most sought-after destinations around the
            world.
          </p>
        </div>

        {/* Used Swiper for carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 4 },
          }}
          className="destinations"
          ref={sliderRef}
        >
          <div
            className="flex-center slide-button prev-button"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </div>

          <div
            className="flex-center slide-button next-button"
            onClick={handleNext}
          >
            <FaChevronRight />
          </div>

          {popularDestinations.map((destination, key) => (
            <SwiperSlide
              className="blur destination"
              data-aos="fade-up"
              data-aos-delay={500 * (key + key)}
              key={key}
            >
              <img src={destination.image} alt={destination.name} />
              <div className="flex-center blur rating">
                <h2>{destination.rating}</h2>
                <div className="star">
                  <FaStar />
                </div>
              </div>

              <div className="preview-box">
                <h1 className="country">{destination.country}</h1>
                <p className="title">{destination.title}</p>
              </div>

              <div className="details-box">
                <div className="flex detail-item">
                  <div className="flex-center icon">
                    <LuHotel />
                  </div>
                  <div>
                    <h4>{destination.hotels_number}</h4>
                    <p className="text-muted">Hotels</p>
                  </div>
                </div>

                <div className="flex detail-item">
                  <div className="flex-center icon">
                    <BsAirplaneEngines />
                  </div>
                  <div>
                    <h4>{destination.flights_number}</h4>
                    <p className="text-muted">Flights</p>
                  </div>
                </div>

                <div className="flex detail-item">
                  <div className="flex-center icon">
                    <TbReportMoney />
                  </div>
                  <div>
                    <h4>${destination.price}</h4>
                    <p className="text-muted">Premium Service</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex-center bottom-container">
          <a
            href="#"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
