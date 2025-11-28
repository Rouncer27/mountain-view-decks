import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialsSlider.scss";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: false,
  centerPadding: "0px",
  arrows: true,
  dots: false,
  pauseOnHover: true,
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials-slider">
      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider-title">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials-slider-content">
          <Slider className="testimonials-slider-slider" {...settings}>
            {testimonials?.map((testimonial, index) => {
              return (
                <div className="testimonials-slider-slide" key={index}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonialsPost.content,
                    }}
                  />
                  <div className="testimonials-slider-slide-name">
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
