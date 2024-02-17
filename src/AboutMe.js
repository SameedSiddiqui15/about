import React from 'react';
import './AboutMe.css'; // Import CSS file for styling
import img1 from './images/men1.jpg';
import img2 from './images/men2.jpg';
import img3 from './images/men3.jpg';
import img4 from './images/men4.jpg';
import img5 from './images/men5.jpg';

export default function AboutMe(){
  return (
    <div className="about-me-container">
      <div className="about-me-content">
          <marquee behavior="scroll" direction="left">
            <img src={img1} alt="Image 1" className="marquee-img" />
          </marquee>
          <marquee behavior="scroll" direction="right">
            <img src={img2} alt="Image 2" className="marquee-img" />
          </marquee>
        <h1><strong><em>About Me</em></strong></h1>
        <img src={img5} alt="Profile" className="profile-pic" />
        <p>
        Hello there! I'm SAMEED, a passionate photographer dedicated to capturing life's most precious moments. With a creative eye and technical expertise, I specialize in transforming ordinary scenes into extraordinary memories.
        </p>
        <p>
        Each photograph is a window into a unique story, a frozen moment that speaks volumes. From weddings to landscapes, I strive to encapsulate the emotion and beauty of every subject, creating images that are both timeless and impactful.
        </p>
        <p>
        Let's embark on a journey together, where every click of the shutter brings us closer to preserving your cherished memories in vivid detail.
        </p>
        <img src={img4} alt="Image 4" className="marquee-img" />
        <marquee behavior="scroll" direction="right">
          <img src={img3} alt="Image 5" className="marquee-img" />
        </marquee>
        <div className="contact-info">
          <h3 align="left">Contact me:</h3>
          <ul align="left">
            <li><a href="#">Email: sameed@siddiqui.com</a></li>
            <li>Phone: +92 333 333 3333</li>
            <li>LinkedIn: <a href="https://linkedin.com">sameed@linkedin.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
