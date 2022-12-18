import logo from './logo.svg';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import AboutCompany from '../AboutCompany/AboutCompany';
import Prices from '../Prices/Prices';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="content">
      <Menu/>
      <Header/>
      <AboutCompany/>
      <Team/>
      <Prices/>
      <Contact/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
