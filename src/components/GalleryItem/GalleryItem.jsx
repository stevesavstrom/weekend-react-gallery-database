import "./GalleryItem.css";
import { useState } from "react";

function GalleryItem({ gallery, likePhoto }) {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(true);

  // const increaseLikes = () => {
  //   setCount(count + 1);
  // };

  function handleLike(likeId) {
    console.log('handleLike function');
    likePhoto(likeId);
  }

  const toggleText = () => {
    setImage(!image);
  };

  return (
    <>
      <section id="item">
        <div class="container">
          <div id="imageButton" onClick={toggleText}>
          {/* {image &&} */}
            <img src={gallery.url} width="100%"></img>
            <div class="centered">{!image && <p>{gallery.description}</p>}</div>
          </div>
        </div>
        <button id="likeButton" onClick={() => {handleLike(gallery.id)}}> Likes {gallery.likes}</button>
        {/* <div>Likes: {count}</div> */}
      </section>
    </>
  );
}

export default GalleryItem;
