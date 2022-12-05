import React from 'react'
import HeroSection from '../components/HeroSection'
import aboutHero from "/images/about.jpg";


const About = () => {
  const heroData = {
    greet: "",
    title: "About us",
    info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. maxime cupiditate cumque Repellendus facilis nemo fugiat repudiandae maxime cupiditate cumque sapiente et tempora aspernatur  tempora aspernatur eaque? ",
    info2:
      "adipisicing elit. Repellendus facilis nemo fugiat repudiandae maxime cupiditate cumque",
    button: "Know more",
    buttonStatus: "hidden",
    image: aboutHero,
  };
  return (
    <div>
      <HeroSection heroData={heroData} />
    </div>
  );
}

export default About
