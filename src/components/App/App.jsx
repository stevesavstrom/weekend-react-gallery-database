import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    fetchGallery();
  }, []);

  // Function to get the creatures from the server/database
  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/",
    })
      .then((response) => {
        console.log("Entire response:", response);
        // The actual array comes from the data attribute on the response
        console.log("Just the data:", response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
      <GalleryList list={galleryList} />
    </div>
  );
}

export default App;
