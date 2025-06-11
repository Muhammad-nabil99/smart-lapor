import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import Tersesat from "../pages/404/Tersesat";

import UserRoutes from "./user";
import InstansiRoutes from "./instansi";

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
                        <Route path="*" element={<Tersesat />}></Route>
                </Routes>
        );
};

export default AppRoutes;
