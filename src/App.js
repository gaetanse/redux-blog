import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from './composants/Accueil';
import Detail from './composants/Detail';
import Ecrire from './composants/Ecrire';
import Contact from './composants/Contact';
import Menu from './composants/Menu';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu/>
          <div style={{margin: "25px 25px"}}>
          <Routes>
            <Route path="/" element={<Accueil/>}></Route>
            <Route path="/detail" element={<Detail/>}></Route>
            <Route path="/ecrire" element={<Ecrire/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
