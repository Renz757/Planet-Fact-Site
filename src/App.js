import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { BrowserRouter } from "react-router-dom";
import Main from './Components/MainComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
