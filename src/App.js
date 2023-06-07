// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Pets from "./components/Pets";
import AddPet from "./components/AddPet";
function App() {
  return (
    <div className="App">
      <Link to="/pets">
        <button>Pets</button>
      </Link>

      <Link to="/add-pet">
        <button>Add pet</button>
      </Link>

      <Routes>
        <Route path="/pets" element={<Pets />} />
        <Route path="/add-pet" element={<AddPet />} />
      </Routes>
    </div>
  );
}

export default App;
