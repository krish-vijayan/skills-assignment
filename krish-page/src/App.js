import './App.css';
import { Name, Pfp, Instructions, MySchool, Hobbies, Interests, Program, Linkedin  } from './components/krish-info'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Instructions/>
        <Name/>
        <Pfp/>
        <MySchool/>
        <Hobbies/>
        <Interests/>
        <Program/>
        <Linkedin/>

       
      </header>
    </div>
  );
}

export default App;
