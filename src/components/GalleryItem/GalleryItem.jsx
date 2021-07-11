import "./GalleryItem.css";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />


function GalleryItem({ gallery, likePhoto }) {
  // const [count, setCount] = useState(0);
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

        <button id="likeButton" onClick={() => {handleLike(gallery.id)}}><p><span id="heart"><FontAwesomeIcon icon={faHeart} /> </span><strong>{gallery.likes}</strong> people love this.</p></button>
      
        
        
      </section>
    </>
  );
}

export default GalleryItem;

{/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eo_circle_red_white_heart.svg/1024px-Eo_circle_red_white_heart.svg.png" width="20px"></img> */}
