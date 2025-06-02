import { Routes, Route } from "react-router-dom";

import DaftarUser from "../../pages/user/DaftarUser";
import LoginUser from "../../pages/user/LoginUser";
import BerandaUser from "../../pages/user/BerandaUser";
import LayoutUser from "../../Layout/user/LayoutUser";
import TersesatUser from "../../pages/404/TersesatUser";
import BuatLaporanUser from "../../pages/user/BuatLaproanUser";

const UserRoutes = () => {
        return (
                <Routes>

                        {/* auth nya dipisahkan */}
                        <Route path="/daftar" element={<DaftarUser />} />
                        <Route path="/login" element={<LoginUser />} />
                        
                        <Route element={<LayoutUser />}>
                                <Route path="/beranda" element={<BerandaUser />} />
                                <Route path="/buat-laporan" element={<BuatLaporanUser />} />

                        </Route>

                        {/* path jika halaman yang dituju tidak ditemukan */}
                        <Route path="*" element={<TersesatUser />}></Route>
                </Routes>
        )
}

export default UserRoutes;