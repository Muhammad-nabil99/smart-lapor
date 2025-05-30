import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/landing/LandingPage";
import DaftarUser from "./pages/user/DaftarUser";
import NotFound from "./pages/404/NotFound";
import LoginUser from "./pages/user/LoginUser";
import DashboardUser from "./pages/user/DashboardUser";
import LayoutUser from "./Layout/user/LayoutUser";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* path landing */}
        <Route path="/" element={<LandingPage />}></Route>

        {/* path user */}
        <Route path="/user/login" element={<DaftarUser />}></Route>
        <Route path="/user/daftar" element={<LoginUser />}></Route>
        <Route path="/user/layout" element={<LayoutUser />}>
          <Route path="dashboard" element={<DashboardUser />}/>
        </Route>

        {/* path jika halaman yang dituju tidak ditemukan */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
