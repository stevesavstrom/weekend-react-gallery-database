import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
  return (
    <>
      <h2>My Awesome Gallery</h2>
        <ul>
          {props.list.map(gallery =>
            <GalleryItem key={gallery.id} gallery={gallery} />
          )}
        </ul>
    </>
  )
}

export default GalleryList;