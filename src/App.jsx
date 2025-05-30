import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/landing/LandingPage";
import Daftar from "./pages/user/Daftar";
import NotFound from "./pages/404/NotFound";
import Login from "./pages/user/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/daftar/user" element={<Daftar />}></Route>
        <Route path="/login/user" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
