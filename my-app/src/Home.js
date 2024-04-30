import React from 'react'
import img1 from './Images/promo1.jpeg';
import img2 from './Images/cover3.jpg';
import img3 from './Images/promo2.jpeg';
import './CSS/Home.css'
export default function home() {
  
  return (
    <div><div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img3} class="d-block w-100 carousel_img" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Folklore</h5>
          <p>Feeling grand and green.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={img2} class="d-block w-100 carousel_img" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Vigilante</h5>
          <p>My attitude defines me.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={img1} class="d-block w-100 carousel_img" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Angels</h5>
          <p>dressing well = good manners.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
