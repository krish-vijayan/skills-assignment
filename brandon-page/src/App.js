import './App.css';
import { Test, Name, Photo, School, Interests, Program, LinkedIn, GitHub } from './components/brandon-info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test/>
        <Photo/>
        <div className="content">
          <Name/> 
          <Interests/>
          <School/>
          <Program/>
        
        <div className="socials">
          <LinkedIn/>
          <GitHub/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
