import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
              <p>
                  Or check out my&nbsp;
                  <a href="https://shawnporto-portfolio.netlify.app/">
                      Portfolio
                  </a>
              </p>
              <p> With love and Care,</p>
              <p>Shawn</p>
      </header>
    </div>
  );
}

export default App;
