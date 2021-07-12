import "./GalleryItem.css";
import { useState } from "react";

// Font Awesome for heart icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faHeart} />;

// GaleryItem represents the one item in the photo gallery.
// Includes photo, like button, and description
function GalleryItem({ gallery, likePhoto }) {
  const [image, setImage] = useState(true);

  function handleLike(likeId) {
    console.log("handleLike function");
    likePhoto(likeId);
  }

  // Conditional logic to toggle description on/off
  const toggleText = () => {
    setImage(!image);
  };

  // HTML section represents one gallery item (photo, like button, description)
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

        <button
          id="likeButton"
          onClick={() => {
            handleLike(gallery.id);
          }}
        >
          <p>
            <span id="heart">
              <FontAwesomeIcon icon={faHeart} />{" "}
            </span>
            <strong>{gallery.likes}</strong> people love this.
          </p>
        </button>
      </section>
    </>
  );
}

// Exports to to GalleryList component
export default GalleryItem;
