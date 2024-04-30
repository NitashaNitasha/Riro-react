import React, { useState } from 'react';
import './CSS/Navbar.css';
import riro from "./Images/Riro.png";
import cart from "./Images/cart.png";


export default function Navbar(props) {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#advertisement">
                  <img src={riro} alt="logo" style={{ height: '50px', position: 'absolute', left: '10px', top: '0' }} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#carouselExampleCaptions">Explore</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collections
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#vigilante">Vigilante</a></li>
                  <li><a className="dropdown-item" href="#midnights">Midnights</a></li>
                  <li><a className="dropdown-item" href="#folklore">Folklore</a></li>
                  <li><a className="dropdown-item" href="#adventure">Explorer</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">About</a>
              </li>
              <li className="nav-item">

                <button className="nav-link">

                  <img src={cart} alt="logo" style={{ height: '40px', position: 'absolute', right: '10px', top: '0' }} />

                </button>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}