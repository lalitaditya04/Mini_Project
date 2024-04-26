import React, { useEffect } from 'react';
import './Landing.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';

const Land = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    };

    const handleClickOutside = (e) => {
    };

    window.addEventListener('click', handleClickOutside);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      window.removeEventListener('click', handleClickOutside);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

    return (
      <div>
        <div id='top'></div>
        <header className="header">
          <div className="container" id="home">
            <Sidebar></Sidebar>
            <div className="logo">
              <Link to="/"><img src="./TechHavenLogo.png" alt="Tech Heaven" /></Link>
            </div>
            <nav className="navigation">
              <ul>
                <li><a href="#top">Home</a></li>
                <li><a href="#about_us">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Tech Heaven</h1>
            <div className="hero-text-container">
              <p>Your Tech Superstore!</p>
            </div>
            <a href="#products" className="btn">Explore Our Services</a>
          </div>
        </section>
        <section className="video-content">
          <div className="container">
            <h2>Have a Peek at UpComing Coolest Gadgets</h2>
            <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3au9HCoxnA?si=LJagw3HhRcuZboEB"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <div id="about_us"></div>
        <section className="about" id="about_us">
          <div className="container">
            <div className="about-content">
              <div className="about-image">
                <img src="/Images/About_image.jpg" alt="About" />
              </div>
              <div className="about-text">
                <span>ABOUT US</span><br/><br/>
                <span id="highlight">Your Ultimate Technology <br/>Destination</span>
                <p>TechHeaven is an electronics store that provides the latest information and cutting-edge technology, all under one roof. Our mission is to make technology accessible and affordable to everyone, while creating a seamless shopping experience.</p>
              </div>
              <div className="why-choose">
                <h2>Why Choose TechHeaven?</h2>
                <p>At TechHeaven, we offer a range of high-quality electronic devices to fit every need and budget. Our products are guaranteed to be of the latest technology, and our knowledgeable staff ensures that you get the best customer service.</p>
                <ul>
                  <li>
                    <h3>01. Smart Home Devices</h3>
                    <p>We offer a variety of smart home devices that make your life more convenient, more efficient, and more enjoyable.</p>
                  </li>
                  <li>
                    <h3>02. Personal Computer</h3>
                    <p>Whether you’re a student, a professional, or a gamer, we’ve got the perfect computer for you.</p>
                  </li>
                  <li>
                    <h3>03. Mobile</h3>
                    <p>Stay connected on-the-go with our range of mobile devices, designed to keep you productive and entertained, all day long.</p>
                  </li>
                  <li>
                    <h3>04. Latest Technology</h3>
                    <p>Our products are always up-to-date with the latest technology, ensuring that you get the best possible experience.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="products"></div>
        <section className="products" id="products">
          <div className="container">
            <h2>Our Products</h2>
            <div className="product">
              <img src="/Images/Flat-TVs.jpg" alt="Television" style={{height: '300px', width: '500px'}} />
              <h3>Television</h3>
              <p>Price Range : &#8377;40000 - &#8377;200000</p>
              <a href="/Project/home.html#television" className="know-more-btn">Know More</a>
            </div>
            <div className="product">
              <img src="/Images/Laptop.jpg" alt="Laptop" style={{height: '300px', width: '500px'}} />
              <h3>Laptop</h3>
              <p>Price Range : &#8377;25000 - &#8377;100000</p>
              <a href="/Project/home.html#laptop" className="know-more-btn">Know More</a>
            </div>
            <div className="product">
              <img src="/Images/smartph.png" alt="Mobile" />
              <h3>Mobile</h3>
              <p>Price Range : &#8377;10000 - &#8377;100000</p>
              <a href="/Project/home.html#mobile" className="know-more-btn">Know More</a>
            </div>
          </div>
        </section>
        <div id="contact"></div>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-info">
                <h3>TechHeaven</h3>
                <p>Stay up-to-date with the latest technology news and product releases by following us on social media. Thank you for choosing TechHeaven.</p>
              </div>
              <div className="footer-links" id="product_links">
                <h3>Products</h3>
                <ul>
                  <li><a href="/Project/home.html#laptop">Personal Computer</a></li>
                  <li><a href="/Project/home.html#mobile">Mobile</a></li>
                  <li><a href="/Project/home.html#televisions">Smart Home Devices</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>About</h3>
                <ul>
                  <li><a href="/Project/home.html">Store</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Need Help?</h3>
                <ul>
                  <li><a href="#">My Account</a></li>
                </ul>
              </div>
            </div>
            <div className="copy-right">
              <p>&copy; 2024 TechHeaven. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Land;
