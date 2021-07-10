import "./GalleryItem.css";
import { useState } from 'react';

function GalleryItem({ gallery }) {
  const [ count, setCount ] = useState(0);

  const increaseLikes = () => {
    setCount(count +1)
  }

  return (
    <>
      <section id="item">
        <img src={gallery.url} width="150"></img>
        <p>{gallery.description}</p>
        <button onClick ={increaseLikes}>Likes</button>
        <div>Likes: {count}</div>
      </section>
    </>
  );
}

export default GalleryItem;
