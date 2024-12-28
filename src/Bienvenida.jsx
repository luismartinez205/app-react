import './App.css';


function Bienvenida() {
  return (
    <><div className="Footer">
          <div className="Logo">
              <img src="https://images.vexels.com/content/137617/preview/geometric-logo-abstract-2ba9b8.png" className="mail" />
              <span className="span">Test Appis</span>
          </div>
          <a href="mailto:luisfrancisco198@gmail.com">
              <img src="https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg" alt="" className="mail" /></a>
      </div><div className="bienvenida">
              <img src="https://images.vexels.com/content/137617/preview/geometric-logo-abstract-2ba9b8.png" className="img-bien" />
              <h1 className='heart'>Que es Test Appis ?</h1>
              <p className='paragraf'>Una aplicacion web donde se utilizo React, React router Dom y el consumo de varias Apis Publicas</p>
              <a className='paragraf fondo' href="/Login">Empezemos</a>
          </div></>
        
        
      );
    }
    
    export default Bienvenida;
    
 