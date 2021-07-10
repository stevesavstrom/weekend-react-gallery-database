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
    axios.get('/gallery')
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert('Error Getting Gallery!');
        console.log(error);
      });
  };

  const likePhoto = (likeId) => {
    axios.put(`gallery/like/${likeId}`)
    .then(response => {
      console.log('PUT connected on App.jsx');
      fetchGallery();
    }) .catch(error => {
      console.log('PUT error liking photo');
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <section id="galleryLayout">
      <GalleryList galleryList={galleryList} likePhoto={likePhoto} />
      </section>
    </div>
  );
}

export default App;
