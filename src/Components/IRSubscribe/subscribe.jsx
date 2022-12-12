import Button from "../Button/Button";
import "./styles.css";
const Subscribe = () => {
  return (
    <div className="detailHolder">
      <div className="part1">
        <h2 className="title">Subscribe to our email alerts</h2>
        <p className="info">Get regular updates through email.</p>
        <input placeholder="Email" className="inputBox" />
        <Button>Subscribe</Button>
      </div>
      <div className="part2">
        <h2 className="title">Have questions?</h2>
        <p className="info">
          Reach out to us by emailing at
          <span className="email"> meghamini40@gmail.com</span>, and we'll get
          back to you.
        </p>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default Subscribe;
