import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import Weather from "./pages/Weather/Weather";
import Quiz from "./pages/Quiz/Quiz";
import FootballTeamOrfaniser from "./pages/FootballTeamOrganiser/FootballTeamOrganiser";


function App() {
  
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path="*" element={<Weather/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path='/football' element={<FootballTeamOrfaniser/>} />
      </Routes>
    </div>
  );
}

export default App;
