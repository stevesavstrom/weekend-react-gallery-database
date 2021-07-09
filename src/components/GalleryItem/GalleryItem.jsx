function GalleryItem({ gallery }) {
  return (
    <>
      <li>{gallery.description}</li>
      <img src={gallery.url} width="100"></img>
    </>
  );
}

export default GalleryItem;
