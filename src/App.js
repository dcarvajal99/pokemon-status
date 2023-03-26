import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter,Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavBar/NavBar" 
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import NotFound from './views/NotFound';
import Resultado from './views/Resultado';
import './App.css'

function App() {
  return (
    <div className="App contenedor bg-image opacity-80">
      <BrowserRouter  basename="/pokemon-status">
        <NavigationBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon-status/" element={<Home />} />
            <Route path="/pokemones/" element={<Pokemones />} />
            <Route path="/pokemones/:id" element={<Resultado />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
