import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <ul className="footer-list">
        <li>396 mi</li>
        <li>1.99 s</li>
        <li>200 mph</li>
        <li>1,020 hp</li>
      </ul>
    </div>
    <div className="footer-right">
      <button className="order-button">Order Now</button>
    </div>
  </footer>
);

export default Footer;
