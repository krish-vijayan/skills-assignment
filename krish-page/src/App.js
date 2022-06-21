import './App.css';
import './Title-page.css';
import { Name, Pfp, Instructions, MySchool, Hobbies, Interests, Program, Linkedin, Texture  } from './components/krish-info'
import TitlePage from './components/title-page';

function App() {
  return (
    <div>
      <div>
        {/*<TitlePage/>*/}
      </div>
        <div className="App">
          <header className="App-header">
            <Texture/>
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
    </div>
    
  );
}

export default App;
