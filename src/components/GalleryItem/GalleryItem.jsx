import "./GalleryItem.css";

function GalleryItem({ gallery }) {
  return (
    <>
      <section id="item">
        <img src={gallery.url} width="150"></img>
        <p>{gallery.description}</p>
        <button>Like!</button>
      </section>
    </>
  );
}

export default GalleryItem;
