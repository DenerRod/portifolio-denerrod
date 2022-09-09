import './App.css';
import { Route } from 'react-router-dom'; 
import home from './pages/home';
import projectPixelsArt from './pages/projectPixelsArt';
import amor from './pages/amor';

function App() {
  return (
    <div>
      <Route exact path="/portifolio-denerrod" component={ home } />
      <Route path="/projectPixelsArt" component={ projectPixelsArt } />
      <Route path="/projetoAmor" component={ amor } />
    </div>
  );
}

export default App;
