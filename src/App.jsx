import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.imagen} className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces Ama a <span className="heart">♥️</span> {props.lengua}
        </p>
        <p className="small">
         Aqui Puedes probrar y Practicar {props.lengua}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vayamos Ya
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
