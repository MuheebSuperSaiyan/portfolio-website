import logo from './logo.svg';
import './App.css';
import HomePage from './home-page/HomePage';

function NewPara(){
  return(
    <>
    <p>"Hey welcome to the component"</p>
    </>
  );
}

function Header(){
  return(
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to s.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewPara/>
      </header>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
