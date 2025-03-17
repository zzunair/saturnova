import Link from 'next/link';
import '../Styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero mt-20">
      <div className="hero__container custom-container">
        <div className="hero__content">
          <div className="hero__content_inner">
            <h1 className="hero__title">
              Building dev team, Quickly and Affordably
            </h1>
            <p className="hero__description mt-10">
              We specialize in helping you build a team of expert developers,
              testers, and leaders. We are setup to deliver long term solutions,
              or scale to different needs quickly.
            </p>
            <Link
              href="/build-team"
              className="contact-button global-btn mt-20"
            >
              Build a Team
            </Link>
          </div>
        </div>
        <div className="hero__image">
          <img src="/images/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}