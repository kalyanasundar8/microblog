import Create from "./Create.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
