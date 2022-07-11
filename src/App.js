import Login from "./components/Login";
import Listado from "./components/Listado";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/listado" element={<Listado/>}/>
      </Routes>
    </div>
  );
}

export default App;
