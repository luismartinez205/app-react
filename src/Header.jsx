import './header.css';


function Header() {
  return (
    <div className="container">
    <header className="hero">
      <h1 className="hero_h1">Bocas Del Toro</h1>
      <h6>Paraiso Tropical</h6>
    </header>
    <ul className="nav" id="ship">
      <li className="nav-item">
        <a className="nav-link active" href="/">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Turismo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/mapa">Mapa</a>
      </li>
      <li className="nav-item">
        <a href="hoteles.html" class="nav-link">Como llego</a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.tripadvisor.co/Hotels-g304170-Isla_Colon_Bocas_del_Toro_Province-Hotels.html"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          >Hoteles</a>
      </li>
      <p className="hero_paragraf">Isla Colon, Bocas Del Toro Panama</p>
      <img src="https://luismartinez205.github.io/bocas/imagenes/icon.png" title="9°20′00″N 82°15′00″O" />
      <div id="google_translate_element"></div>
      <div className='nav-btn'>
      <a className=" disabled sesion" href="./mapa.html">Iniciar Sesion</a>
      <a className="registro disabled" href="./mapa.html">Registrarse</a>
      </div>
      
    </ul>
    </div>
    
        
  );
}

export default Header;