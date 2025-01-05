import React from 'react';
import './Galeria.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Header from './Header';

const images = [
    {
      original: "https://mediaim.expedia.com/destination/1/25f99a393b969b3735c64d4b492225c8.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://mediaim.expedia.com/destination/1/cbb3e7a782f03bcb2f81dbe0334a1bf4.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://mediaim.expedia.com/destination/1/0818460612fe223f06b5793c2827f835.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {   original: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_800,q_75,w_1200/v1/clients/panama/temp_4fbd3a6c-4236-433a-94af-40ee863d741c.jpg",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "https://www.visitcentroamerica.com/wp-content/uploads/2017/10/ver-centroamerica-panama-archipielago-boca-toro-isla-colon-03.jpg",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
    
  ];
  
  


const Galeria = () => {
  return (
    <>    
    <Header/>
    <div>
      <h1 className='galery-title'>Galería Imagenes De Bocas del Toro</h1>
       <ImageGallery items={images}/> 
           
    </div>
    
    </>
  );
};

export default Galeria;