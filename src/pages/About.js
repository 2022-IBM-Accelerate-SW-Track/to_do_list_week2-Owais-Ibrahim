import "./About.css";
import owais from "../assets/profile.jpeg";
import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
    <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {owais}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Owais Ibrahim</div>
        <div className="brief_description">
        <p>Hi, my name is Owais Ibrahim! I am a sophmore studying Computer Science at Princeton Univestiy. I am from Chicago, IL and my favorite 
          food is deep dish Chicago style pizza. </p> 
        </div>
      </div>
    </div>
  </div>
    )
  }
}
