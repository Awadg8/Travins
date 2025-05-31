import "./Newletter.css";

const Newletter = () => {
  return (
    <section id="newsletter" data-aos="fade-up">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up" data-aos-delay="700">
          <h2>Stay in a loop</h2>
          <p>
            Get the latest travel deals, tips, and updates straight to your
            inbox.
          </p>
        </div>

        <form className="flex" data-aos="zoom-up" data-aos-delay="800">
            <input type="text" placeholder="Enter your email address" />
            <button type="button" className="btn btn-primary">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
};

export default Newletter;
