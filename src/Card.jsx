import './App.css';

function Card() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtk570HKSLfdmQRKnVqujHuI63zpyZDnnCJg&s" className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque nobis eveniet.
        </p>
        <p className="small">
         Este es el primer componente que
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

export default Card;