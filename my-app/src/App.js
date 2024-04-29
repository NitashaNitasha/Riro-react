import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Title from './Title'; // Import the Title component
import './CSS/App.css';
import CardHolder from './CardHolder';
import Videoholder from './VideoHolder';
//importing images and videos
import advertisement from './Videos/RIRO ad campaign.mp4'
import ocean from './Videos/ocean.mp4'
import img_of_dress from './Images/TWICE-I-GOT-YOU-full.jpeg';

function App() {
  return (
    <div >
      <Navbar />
      
      <Videoholder vid_var={advertisement} position={0}/>
      <Home />
      <Home />
      <Videoholder vid_var={advertisement} position={0}/>

      
      <Videoholder vid_var={ocean} position={-1}/>

      <Title title={"Vigilante"} collection_id="vigilante"/>
      <CardHolder img1={img_of_dress} img2={img_of_dress} img3={img_of_dress} name1={'hell'} name2={'well'} name3={'tell'} price1={'$120'} price2={'$540'} price3={'$230'}/>
      <hr/>

      <Title title={"Midnights"} collection_id="midnights"/>
      <CardHolder img1={img_of_dress} img2={img_of_dress} img3={img_of_dress} name1={'hell'} name2={'well'} name3={'tell'} price1={'$120'} price2={'$540'} price3={'$230'}/>
      <hr/>

      <Title title={"Folklore"} collection_id="folklore"/>
      <CardHolder img1={img_of_dress} img2={img_of_dress} img3={img_of_dress} name1={'hell'} name2={'well'} name3={'tell'} price1={'$120'} price2={'$540'} price3={'$230'}/>
      <hr/>
      
      <Footer />
    </div>
  );
}

export default App;
