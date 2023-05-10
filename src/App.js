import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Navigation from './Components/Nav/NavigationComponent';
import PlanetComponent from './Components/planetComponent';

import PlanetProvider from './store/planetProvider';


function App() {
  return (
    <PlanetProvider>
      <div className="App">
        <Navigation />
        <PlanetComponent />
      </div>
    </PlanetProvider>
  );
}

export default App;
