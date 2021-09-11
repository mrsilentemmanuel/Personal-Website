import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Silent Emmanuel Professional Profile Pic" />
      </Link>
      <header>
        <h2>Silent Emmanuel</h2>
        <p><a href="mailto:dzikitisilent@gmail.com">dzikitisilent@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Silent. I like building things. Former Global Shaper (WEF) and Consultant.
        I have worked on many websites <a href="http://tedxcapetown.org/">TEDX Cape Town</a>
        <a href="http://mytanklife.co.za/">, My Tank Life</a>
        , <a href="http://weddinginsider.co.za/">Wedding Insider</a>
        , <a href="https://idtech.pf/">ID Tech</a>
        , <a href="https://www.exaltedchristchurch.com/">Exalted Christ Church International</a>
        , and many more.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Silent Emmanuel <Link to="/">silentemmanuel.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
