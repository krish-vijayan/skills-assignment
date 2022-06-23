import './App.css';
import { Name, School, Interests, Program, LinkedIn, GitHub } from './components/brandon-info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Photo" alt="pfp" src={require('./images/pfp.jpg')}>  
        </img>
        <div className="socials">
          <LinkedIn/>
          <GitHub/>
        </div>
        <div className="wrapper">
          <Name/> 
          <Interests/>
          <School/>
          <Program/>
        </div>
      </header>
    </div>
  );
}

export default App;
