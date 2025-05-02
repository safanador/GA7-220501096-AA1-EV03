import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="App-title">Bienvenido a mi Demo React</h1>
        <p className="App-description">
          Esta es una demostración de una aplicación React con estilos personalizados.
        </p>
        <div className="App-features">
          <div className="feature-card">
            <h3>Rápido</h3>
            <p>Optimizado para máximo rendimiento</p>
          </div>
          <div className="feature-card">
            <h3>Moderno</h3>
            <p>Usando las últimas tecnologías</p>
          </div>
          <div className="feature-card">
            <h3>Responsivo</h3>
            <p>Se adapta a cualquier dispositivo</p>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de React
        </a>
      </header>
    </div>
  );
}

export default App;