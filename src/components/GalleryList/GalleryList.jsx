import GalleryItem from '../GalleryItem/GalleryItem';
import "./GalleryList.css";

function GalleryList( props ) {
  return (
    <>
        <section>
          {props.galleryList.map(gallery => 
            <GalleryItem key={gallery.id} gallery={gallery} />
          )}
        </section>
    </>
  )
}

export default GalleryList;