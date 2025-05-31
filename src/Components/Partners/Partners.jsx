import "./Partners.css";
import { partners } from "../../data";

const Partners = () => {
  return (
    <div id="partners" data-aos="slide-up" data-aos-delay="1400">
      <div className="slides">
        {partners.map((partner, key) => (
          <img src={partner.image} alt={partner.name} key={key} />
        ))}
      </div>
      <div className="slides">
        {partners.map((partner, key) => (
          <img src={partner.image} alt={partner.name} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
