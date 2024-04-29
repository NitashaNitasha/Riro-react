
import React from 'react';
import './CSS/VideoHolder.css';

export default function Videoholder({ vid_var, position = -1 }) {
   // Set width to 100% if position is 0
  var pos = position === 0 ? 'relative' : 'fixed'; 
  var zi= position === 0 ? '0' : '-100'; 
  
  return (
    <div className="videoholder" id ="advertisement">
      <video autoPlay loop muted style={{ zIndex: zi, top: 0,position : pos, left: 0 }}>
        <source src={vid_var} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
