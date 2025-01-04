import React from 'react';
import Header from './Header';
import './header.css';

const Mapa = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <iframe 
        className="heromap" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d178175.162341576!2d-82.09841669995228!3d9.319792679133355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spa!4v1729047391193!5m2!1ses-419!2spa" 
        width="600" 
        height="650" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <main className="mainmap">
        <h3 className="article_title">Detalles Del Mapa</h3>
        <p className="article_title">Isla Colon, Bocas Del  Toro</p>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxXvhRpdgUhi-DnEL3ZDYphqspb09MYldLuwe4lH0omwopIsQ3AbTDOOEQIyDhF_R0BSmmCML91EynK6FTb4OjTUHmY5nCvdIgQBG1r8woiErQwgLS0aGBlhLyC646qfHydrj9vUrBViM/w1200-h630-p-k-no-nu/BANDERA+DE+BOCAS+DEL+TORO.jpg" title="9°20′00″N 82°15′00″O" width="80px"/>
      </main> 
    </div> 
    </> 
  );
};

export default Mapa;