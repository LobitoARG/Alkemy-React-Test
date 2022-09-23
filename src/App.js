import Login from "./components/Login";
import Listado from "./components/Listado";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

//CSS
import './css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/listado" element={<Listado/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
