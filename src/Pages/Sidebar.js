import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const sidenavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidenavRef.current &&
        !sidenavRef.current.contains(e.target) &&
        !document.getElementById('sdbar').contains(e.target)
      ) {
        closeNav();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
  };

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
  };

  return (
    <div>
      <span id="sdbar" style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
        &#9776;
      </span>
      <div id="mySidenav" className="sidenav" ref={sidenavRef}>
        <a href="/Project/login.html">Login</a>
        <a href="/Project/signup.html">Signup</a>
        <a href="/Project/register_product.html">Registration</a>
        <a href="/Project/home.html">Store</a>
        <Link to="/Review">Feedback</Link>
        <Link to="/Quiz">Quiz</Link>
      </div>
    </div>
  );
}

export default Sidebar;