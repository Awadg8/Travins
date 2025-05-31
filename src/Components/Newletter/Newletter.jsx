import "./Newletter.css";

const Newletter = () => {
  return (
    <section id="newsletter">
      <div className="section-container">
        <div className="section-header">
          <h2>Stay in a loop</h2>
          <p>
            Get the latest travel deals, tips, and updates straight to your
            inbox.
          </p>
        </div>

        <form className="flex">
            <input type="text" placeholder="Enter your email address" />
            <button type="button" className="btn btn-primary">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
};

export default Newletter;
