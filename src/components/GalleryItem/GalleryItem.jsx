import "./GalleryItem.css";
import { useState } from "react";

function GalleryItem({ gallery }) {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(true);

  const increaseLikes = () => {
    setCount(count + 1);
  };

  const toggleText = () => {
    setImage(!image);
  };

  return (
    <>
      <section id="item">
        <div class="container">
          <button id="imageButton" onClick={toggleText}>
            <img src={gallery.url} width="150"></img>
            <div class="centered">{!image && <p>{gallery.description}</p>}</div>
          </button>
        </div>

        <p>{gallery.description}</p>
        <button onClick={increaseLikes}>❤️ {count}</button>
        {/* <div>Likes: {count}</div> */}
      </section>
    </>
  );
}

export default GalleryItem;
