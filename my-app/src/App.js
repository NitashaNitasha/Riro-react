import React,{useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Title from './Title'; // Import the Title component
import './CSS/App.css';
import CardHolder from './CardHolder';
import Videoholder from './VideoHolder';
//importing images and videos
import advertisement from './Videos/RIRO ad campaign.mp4';
import ocean from './Videos/ocean.mp4';

// Import images
import img1 from './Images/products/1.jpeg';
import img2 from './Images/products/2.jpg';
import img3 from './Images/products/3.jpg';
import img5 from './Images/products/5.jpeg';
import img4 from './Images/products/4.jpg';
import img6 from './Images/products/6.jpg';
import img7 from './Images/products/7.jpeg';
import img8 from './Images/products/8.jpeg';
import img9 from './Images/products/9.jpg';
import img10 from './Images/products/10.jpg';
import img11 from './Images/products/11.jpg';
import img12 from './Images/products/12.jpg';


function App() {
  
  return (
    <div>
      
      <Navbar  />

      
      <Videoholder vid_var={advertisement} position={0} />
      <Home />
      <Videoholder vid_var={ocean} position={-1} />

      <Title title={"Vigilante"} collection_id="vigilante" />
      <CardHolder id1={1} id2={2} id3={3} imgPath1={img1} imgPath2={img2} imgPath3={img3} />
      <hr />

      <Title title={"Midnights"} collection_id="midnights" />
      <CardHolder id1={4} id2={5} id3={6} imgPath1={img4} imgPath2={img5} imgPath3={img6} />
      <hr />

      <Title title={"Folklore"} collection_id="folklore" />
      <CardHolder id1={7} id2={8} id3={9} imgPath1={img7} imgPath2={img8} imgPath3={img9} />
      <hr />

      <Title title={"Explorer"} collection_id="adventure" />
      <CardHolder id1={10} id2={11} id3={12} imgPath1={img10} imgPath2={img11} imgPath3={img12} />
      <hr />

      <Footer />
    </div>
  );
}

export default App;
