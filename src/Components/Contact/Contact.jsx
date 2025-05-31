import Faq from "../Faq/Faq";
import "./Contact.css";
import { contactInfo } from "../../data";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <Faq />

        <div className="column" data-aos="fade-left">
          <form className="contact-form">
            <h3>Still Got Questions?</h3>
            <h2 className="primary">Reach out to us</h2>
            <div className="flex row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
              />

              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
              />
            </div>

            <div className="flex row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />

              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="control"
            ></textarea>

            <button type="button" className="btn btn-primary submit-btn">
              Send Now
            </button>
          </form>

          <div className="contact-options">
            {contactInfo.map((contact, key) => (
              <div className="flex option" key={key}>
                    <div className="flex-center icon">
                        {contact.icon}
                    </div>

                    <div className="details">
                        <h3 className="name">{contact.name}</h3>
                        <p className="text-muted value">{contact.value}</p>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
