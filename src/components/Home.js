import React, { Component } from "react";

import "./Home.css";
import HomeBackground from './Images/HomeBackground.jpg';

export default function Home() {
  return (
    <div className="home-content">
      <div className="text">
        <h1 className="Title-1">Business</h1>
        <h2 className="Title-2">Management</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae
          recusandae natus nesciunt ut, reprehenderit sint numquam quos
          doloribus facere?
        </p>
        <button>REGISTER</button>
      </div>

      <div className="home-image">
        <img src={HomeBackground} alt="home wallpaper" />
      </div>
    </div>
  );
}



