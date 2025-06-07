import { Routes, Route } from "react-router-dom";

import DaftarUser from "../../pages/user/DaftarUser";
import LoginUser from "../../pages/user/LoginUser";
import BerandaUser from "../../pages/user/BerandaUser";
import LayoutUser from "../../Layout/user/LayoutUser";
import TersesatUser from "../../pages/404/TersesatUser";
import BuatLaporanUser from "../../pages/user/BuatLaproanUser";
import EditProfil from "../../pages/user/EditProfil";
import RiwayatUser from "../../pages/user/RiwayatUser";
import Laporan from "../../pages/user/LaporanUser";
import ProfilUser from "../../pages/user/ProfilUser";
import PengaturanUser from "../../pages/user/PengaturanUser";

const UserRoutes = () => {
        return (
                <Routes>

                        {/* auth nya dipisahkan */}
                        <Route path="/daftar" element={<DaftarUser />} />
                        <Route path="/login" element={<LoginUser />} />
                        
                        <Route element={<LayoutUser />}>
                                <Route path="/beranda" element={<BerandaUser />} />
                                <Route path="/buat-laporan" element={<BuatLaporanUser />} />
                                <Route path="/laporan" element={<Laporan />} />
                                <Route path="/profil" element={<ProfilUser />}></Route>
                                <Route path="/riwayat" element={<RiwayatUser />} />
                                <Route path="/edit" element={<EditProfil />} />
                                <Route path="/pengaturan" element={<PengaturanUser />} />

                        </Route>

                        {/* path jika halaman yang dituju tidak ditemukan */}
                        <Route path="*" element={<TersesatUser />}></Route>
                </Routes>
        )
}

export default UserRoutes;