import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  // galleryList declared as empty array
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    fetchGallery();
  }, []);

  // Axios to GET the gallery items from the server/database
  const fetchGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert("Error Getting Gallery!");
        console.log(error);
      });
  };

  // Axios PUT to update likes in the database
  const likePhoto = (likeId) => {
    axios
      .put(`gallery/like/${likeId}`)
      .then((response) => {
        console.log("PUT connected on App.jsx");
        fetchGallery();
      })
      .catch((error) => {
        console.log("PUT error liking photo");
      });
  };

  return (
    <div className="App">
      {/* Banner header for top of DOM */}
      <header className="App-header">
        <img id="banner" src="/images/banner.png"></img>
      </header>
      {/* All other content/logic contained within GalleryList component */}
      <section id="galleryLayout">
        <GalleryList galleryList={galleryList} likePhoto={likePhoto} />
      </section>
    </div>
  );
}

// Exports to index.js
export default App;
