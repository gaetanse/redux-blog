import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Accueil from './composants/Accueil';
import Ecrire from './composants/Ecrire';
import Contact from './composants/Contact';
import Menu from './composants/Menu';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<Accueil/>}></Route>
            <Route path="/" element={<Ecrire/>}></Route>
            <Route path="/" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
