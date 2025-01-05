import React from 'react';
import './Galeria.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Header from './Header';

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  
  


const Galeria = () => {
  return (
    <>    
    <Header/>
    <div>
      <h1 className='galery-title'>Galería Imagenes De Bocas del Toro</h1>
       <ImageGallery items={images} thumbnailPosition="left"/> 
           
    </div>
    
    </>
  );
};

export default Galeria;