import './App.css';
import './Title-page.css';
import { 
  Name, Pfp, Instructions, 
  MySchool, Hobbies, Interests, 
  Program, Linkedin, Texture} from './components/krish-info';
import TitlePage from './components/title-page';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div>
          </div>
            <div className="App">
              <header className="App-header">
                <Routes>
                <Route exact path="/home" element={<TitlePage/>}/>
                <Route exact path="/krish" element={<>
                    <Texture/>
                    <Instructions/>
                    <Name/>
                    <Pfp/>
                    <MySchool/>
                    <Hobbies/>
                    <Interests/>
                    <Program/>
                    <Linkedin/>    
                    </>    
                  }/>
                 </Routes>
              </header>
           </div>
      </div>
    </Router>
    
    
  );
}

export default App;
