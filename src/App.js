import logo from './logo.svg';
import './App.css';
import { Button } from './button/button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Benefits of using react...</h1>
        </div>
        <div>
          <p>component based architecture</p>
          </div>
          <div><p>virtual DOM for efficient update</p></div>
          <div><p>Rich ecosystem and community</p></div>
          <div><p>cross-platform development</p></div>
          <div><p>strong community support</p>
        </div>
        <div>
          <button>Get Started..</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
