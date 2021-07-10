import GalleryItem from '../GalleryItem/GalleryItem';
import "./GalleryList.css";

function GalleryList( props ) {
  return (
    <>
        <section>
          {props.galleryList.map(gallery => 
            <GalleryItem 
            key={gallery.id} 
            likePhoto={props.likePhoto}
            gallery={gallery} />
          )}
        </section>
    </>
  )
}

export default GalleryList;