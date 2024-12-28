import './App.css';
import Footer from './Nav';

function App() {
  return (
  
   <> <div><Footer/></div> 
   <div className='flex'>
    <div className="App"> 
      <div className='flexdos'>   
    <img src="https://images.vexels.com/content/137617/preview/geometric-logo-abstract-2ba9b8.png" className="app-logo" />
     <h1 className='titulo'>Iniciar Sesión</h1></div> 
        <form id="loginForm">
            <div>
            
              <span><img src="https://static.vecteezy.com/system/resources/previews/007/167/661/non_2x/user-blue-icon-isolated-on-white-background-free-vector.jpg" className="img-input" srcset="" /></span>
            <input type="text" id="username" name="username" placeholder='Usuario'required/></div>
           <div>
            
           <span><img src="https://cdn-icons-png.flaticon.com/512/2107/2107858.png" className="img-inputdos" srcset="" /></span>
            <input type="password" id="password" name="password" placeholder='Contraseña'required/></div>

            <button type="submit" className='btn'>Login</button>
        </form>
        <a  href="#" className='heart small'>Nueva Contraseña</a>
        <a  href="#" className='heart small'>No estas registrado?</a>
        <p id="message" class="hidden"></p>
       
      
    </div></div></>
  );
}

export default App;
