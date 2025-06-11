import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import HalamanTidakDitemukan from "../pages/404/HalamanTidakDitemukan";

import UserRoutes from "./user";
import InstansiRoutes from "./user";

const AppRoutes = () => {
        return (
                <Routes>

                        {/* halaman pembuka */}
                        <Route path="/" element={<LandingPage />}></Route>

                        {/* semua url/path yang diawali instansi */}
                        <Route path="instansi/*" element={<InstansiRoutes />} />

                        {/* semua url/path yang diawali user */}
                        <Route path="user/*" element={<UserRoutes />} />

                        {/* path jika halaman yang dituju tidak ditemukan */}
                        <Route path="*" element={<HalamanTidakDitemukan />}></Route>

                </Routes>
        )
}

export default AppRoutes;