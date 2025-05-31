import "./Services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services">
      <div className="overlay">
        <div className="section-container">
          {services.map((service, key) => (
            <div className="service" data-aos="fade-up" data-aos-delay={500 * (key + key)} key={key}>
              <div className="flex-center icon">
                <service.icon />
              </div>
              <h3 className="title">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default Services;
