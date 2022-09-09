import './App.css';
import { Route } from 'react-router-dom'; 
import home from './pages/home';
import projectPixelsArt from './pages/projectPixelsArt';

function App() {
  return (
    <div>
      <Route exact path="/portifolio-denerrod" component={ home } />
      <Route path="/projectSolarSystem" component={ projectPixelsArt } />
    </div>
  );
}

export default App;
