import Button from "../Button/Button";
import "./styles.css";
const Subscribe = () => {
  return (
    <div className="detailHolder">
      <h2 className="title">Subscribe to our email alerts</h2>
      <p className="info">Get regular updates through email.</p>
      <input placeholder="Email" className="inputBox" />
      <Button>Subscribe</Button>
      <h2 className="title">Have questions?</h2>
      <p className="info">
        Reach out to us by emailing at
        <span className="email"> meghamini40@gmail.com</span>, and we'll get
        back to you.
      </p>
      <Button>Contact Us</Button>
    </div>
  );
};

export default Subscribe;
