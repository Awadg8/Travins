import "./Testimonials.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { testimonials } from "../../data";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="section-header" data-aos="zoom-up" data-aos-delay="700">
        <h2>What Our</h2>
        <h1>Customer Say</h1>
      </div>

      {/* Used Swiper for carousel */}
      <div data-aos="zoom-up" data-aos-delay="800">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={true}
          loop={true}
          speed={5000}
          centeredSlides={true}
          modules={[Autoplay]}
          breakpoints={{
            600: { slidesPerView: "auto" },
          }}
          className="testimonials"
        >
          {testimonials.map((list, key) => (
            <SwiperSlide className="testimonial" key={key}>
              <div className="flex user">
                <div className="profile">
                  <img src={list.profile} alt={list.name} />
                </div>

                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <div className="flex row">
                    <p className="text-muted position">{list.position}</p>
                    <p className="primary company">{list.company}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted content">{list.content}</p>
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
