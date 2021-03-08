import React from "react";
import employeedir from "../assets/employeedir.png";
import novelty from "../assets/novelty.png";
import burger from "../assets/burger.png";
import pairings from "../assets/ppairings.jpg";
import weather from "../assets/weather.png";
import readmegen from "../assets/readmegen.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

    // Employee-Directory
    const openPopupboxEmployee = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox" src={employeedir} alt="Employee-Directory" />
          <p>The Employee Directory application was created with React. The application allows a user to view entire employee directory at once so that the user has quick access to their information. An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. The user is also able to filter employees by name or sort in alphabetical order.</p>
          <b>Live App</b> <a className="hyper-link" onClick={() => window.open("https://nagck.github.io/employee-dir/", "_blank")}>https://nagck.github.io/employee-dir/</a>
          <br />
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/employee-dir")}>https://github.com/nagck/employee-dir</a>
        </>
      )
      PopupboxManager.open({ content })
    }
  
    const popupboxConfigEmployee = {
      titleBar: {
        enable: true,
        text: "Employee-Directory"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  
  // NOVELty
  const openPopupboxNovelty = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={novelty} alt="NOVELty" />
        <p>NOVELty is one-stop shop for keeping track of all the books you are reading/read, get personalized book recommendations and participate in your book reading community by sharing the book that you like and participate in book reviews.</p>
        <b>Live App</b> <a className="hyper-link" onClick={() => window.open("https://novelty.herokuapp.com", "_blank")}>https://novelty.herokuapp.com</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/NOVELty")}>https://github.com/nagck/NOVELty</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNovelty = {
    titleBar: {
      enable: true,
      text: "NOVELty"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Eat-Da-Burger!
  const openPopupboxBurger = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={burger} alt="Eat-Da-Burger!" />
        <p>Eat-Da-Burger! (Burger Logger) is a restaurant app that lets users input the names of burgers they'd like to eat. The application was created with MySQL, Node, Express, Handlebars and ORM, following the MVC design pattern - Node and MySQL to query and route data, and Handlebars to generate HTML.</p>
        <b>Live App</b> <a className="hyper-link" onClick={() => window.open("https://burger-loggernk.herokuapp.com/", "_blank")}>https://burger-loggernk.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/burger", "_blank")}>https://github.com/nagck/burger</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBurger = {
    titleBar: {
      enable: true,
      text: "Eat-Da-Burger!"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Perfect Pairings Project
  const openPopupboxPairings = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={pairings} alt="Perfect Pairings Project" />
        <p>Ever scrolled through Uber Eats, Foodora or Ritual and couldn't make a decision you needed a drink? PerfectPairings will provide you with delicious food options and pair your selection with the perfect drink. Still not convinced? A GIF will Convince!. This is a perfect food and drink pairing web application.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://nagck.github.io/perfectpairings", "_blank")}>https://nagck.github.io/perfectpairings/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/perfectpairings", "_blank")}>https://github.com/nagck/perfectpairings</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPairings = {
    titleBar: {
      enable: true,
      text: "Perfect Pairings Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Weather Dashboard Project
  const openPopupboxWeather = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={weather} alt="Weather Dashboard Project..." />
        <p>This is a weather dashboard application that allows a user to see current and 5-day weather outlook for multiple cities. User can search for a city to view current weather conditions and 5-day forecast for that city. The current weather conditions include the temperature, the humidity, the wind speed, and the UV index. The 5-day forecast displays the date, an icon representation of weather conditions, the temperature, and the humidity. User can click on a city in the search history to view current and future weather conditions for that city.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://nagck.github.io/weatherdashboard", "_blank")}>https://nagck.github.io/weatherdashboard/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/weatherdashboard", "_blank")}>https://github.com/nagck/weatherdashboard</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWeather = {
    titleBar: {
      enable: true,
      text: "Weather Dashboard project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Readme Generator
  const openPopupboxReadme = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={weather} alt="Professional Readme Generator..." />
        <p>This is a command-line node.js application that dynamically generates a professional README.md file from a user's input using the Inquirer package.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1QwOkgeKeR0LG1bDKu8QuZbkwwO6TjKNq/view?usp=sharing", "_blank")}>https://drive.google.com/file/d/1QwOkgeKeR0LG1bDKu8QuZbkwwO6TjKNq/view?usp=sharing</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nagck/readmegen", "_blank")}>https://github.com/nagck/readmegen</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigReadme = {
    titleBar: {
      enable: true,
      text: "Professional Readme Generator.."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          
          <div className="portfolio-image-box" onClick={openPopupboxEmployee}>
            <img className="portfolio-image" src={employeedir} alt="Employee-Directory" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxNovelty}>
            <img className="portfolio-image" src={novelty} alt="NOVELty" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxBurger}>
            <img className="portfolio-image" src={burger} alt="Eat-Da-Burger!" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxPairings}>
            <img className="portfolio-image" src={pairings} alt="Perfect Pairings Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxWeather}>
            <img className="portfolio-image" src={weather} alt="Weather Dashboard Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxReadme}>
            <img className="portfolio-image" src={readmegen} alt="Professional README Generator.." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            {/* - */}
          </div>
        </div>
      </div>
      
      <PopupboxContainer {...popupboxConfigEmployee} />
      <PopupboxContainer {...popupboxConfigNovelty} />
      <PopupboxContainer {...popupboxConfigBurger} />
      <PopupboxContainer {...popupboxConfigPairings} />
      <PopupboxContainer {...popupboxConfigWeather} />
      <PopupboxContainer {...popupboxConfigReadme} />
    </div>
  )
}

export default Portfolio;
