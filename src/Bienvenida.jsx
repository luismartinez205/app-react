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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita saepe atque, molestiae dolorem corrupti ipsa facere maxime quas eum delectus amet rerum eos minima excepturi ullam et, quod nesciunt?</p>
          </div>
          </div></>
        
      );
    }
    
    export default Bienvenida;
    
 