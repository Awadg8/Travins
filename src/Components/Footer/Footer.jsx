import "./Footer.css";
import { contactInfo, footer } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="blur">
        <div className="section-container">
          <div className="column" data-aos="fade-left">
            <h2>Contact Us</h2>

            {contactInfo.map((contact, key) => (
              <div key={key} className="contact">
                <h4>{contact.name}</h4>
                <p className="text-muted">{contact.value}</p>
              </div>
            ))}
          </div>

          {footer.map((column, key) => (
            <div
              className="column"
              data-aos="fade-left"
              data-aos-delay={700 * (key + key)}
              key={key}
            >
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link, linkKey) => (
                  <li className="flex" key={linkKey}>
                    <link.icon />
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="copy" data-aos="fade-up"   
              data-aos-delay="700"
        >
          <article>&copy; 2025 Travins. All rights reserved.</article>
          <p className="text-muted">
            This site was beautifully crafted with love and passion by{" "}
            <a href="" target="_blank">
              Mr. Awadhesh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
