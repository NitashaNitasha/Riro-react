import React from 'react'
import './CSS/Navbar.css'
import riro from "./Images/Riro.png"
export default function Navbar() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#advertisement">
                  <img src={riro} alt="logo" style={{height:'50px',position:'absolute',left:'10px',top:'0'}}/>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#carouselExampleCaptions">Explore</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collections
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#vigilante">Vigilante</a></li>
                  <li><a class="dropdown-item" href="#midnights">Midnights</a></li>
                  <li><a class="dropdown-item" href="#folklore">Folklore</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutus">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

