function GalleryItem({gallery}) {
  return (
    <>
	
      
      <img src={gallery.url} width="150"></img>
      <p>{gallery.description}</p>
	
    </>
  );
}

export default GalleryItem;
