import "./App.css";
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import Navigation from "./components/Navigation/Navaigation.jsx";
import Logo from "./components/Logo/Logo.jsx";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.jsx";
import Rank from "./components/Rank/Rank.jsx";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.jsx";

import Clarifai from "clarifai";
const app = new Clarifai.App({ apiKey: "71eebfe74aa547e2aa165bdb27f8c32c" });

const partivleOps = {
  fpsLimit: 60,
  Interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 250,
        duration: 0.25,
        speed: 2,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 600,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});

  const calcFaceLoc = (data) => {
    const regions = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    const newBox = {
      left: regions.left_col * width,
      top: regions.top_row * height,
      right: width - (regions.right_col * width),
      bottom: height - (regions.bottom_row * height)
    };
    console.log(newBox);
    setBox({ box: newBox });
  };

  const onInputChange = (e) => {
    setInput(e.target.value);  
  };

  const onSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(
        { id: "f76196b43bbd45c99b4f3cd8e8b40a8a", version: "45fb9a671625463fa646c3523a3087d5" },
        input
      )
      .then((response) => calcFaceLoc(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Particles className="particles" id="tsparticles" options={partivleOps} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition box={box} image={imageUrl} />
    </div>
  );
}

export default App;
