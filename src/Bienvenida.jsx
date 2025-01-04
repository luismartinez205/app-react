import './Bienvenida.css';
import Header from './Header';
import './App.css';

function Bienvenida() {
  return (
    <>
    <Header/>
    <h2 class="article_title">Bienvenido(a) a Bocas!</h2>
    <div className="contenedor">    
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VgnnPDIpNhI?si=bTpf2aibau6_MAsR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className='contenedor-parafo'>
            <h1 className='article_title text'>Descubre Bocas del Toro: Paraíso Tropical en el Caribe Panameño</h1>
            <p className='parafo'><strong>¿Buscas aventura, relajación y cultura en un solo destino?</strong> Bocas del Toro es el lugar perfecto. Sus aguas cristalinas, playas de arena blanca y vibrante vida marina te esperan.</p>
            <p className='parafo'>Bocas del Toro es un archipiélago en la costa caribeña de Panamá. La isla principal, Isla Colón, es el centro de la región y el lugar perfecto para comenzar tu aventura. Aquí encontrarás una mezcla de culturas, desde los indígenas Ngöbe-Buglé hasta los colonos afrocaribeños.</p>
          </div>
          </div></>
        
      );
    }
    
    export default Bienvenida;
    
 