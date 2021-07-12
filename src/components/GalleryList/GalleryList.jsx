import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

// GalleryList represents the entire gallery of GalleryItems
// GalleryList component iterates over galleryList array using map object
function GalleryList(props) {
  return (
    <>
      <section>
        {props.galleryList.map((gallery) => (
          <GalleryItem
            key={gallery.id}
            likePhoto={props.likePhoto}
            gallery={gallery}
          />
        ))}
      </section>
    </>
  );
}

// Exports to App.jsx component
export default GalleryList;
