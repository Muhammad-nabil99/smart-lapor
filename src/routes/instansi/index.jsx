import { Routes, Route } from "react-router-dom";

import HalamanTidakDitemukanInstansi from "../../pages/404/HalamanTidakDitemukanInstansi";
import LayoutInstansi from "../../Layout/instansi/LayoutInstansi";
import BerandaInstansi from "../../pages/instansi/BerandaInstansi";
import TambahStafInstansi from "../../pages/instansi/TambahStafInstansi";
import Laporaninstansi from "../../pages/instansi/LaporanInstansi";
import RiwayatInstansi from "../../pages/instansi/RiwayatInstansi";

const InstansiRoutes = () => {
        return (
                <Routes>
                        <Route element={<LayoutInstansi />}>
                                <Route path="/beranda" element={<BerandaInstansi />} />
                                <Route path="/tambah-staf" element={<TambahStafInstansi />} />
                                <Route path="/laporan" element={<Laporaninstansi />} />
                                <Route path="/riwayat" element={<RiwayatInstansi />} />
                        </Route>

                        {/* path jika halaman yang dituju tidak ditemukan */}
                        <Route
                                path="*"
                                element={<HalamanTidakDitemukanInstansi />} />

                </Routes>
        );
};

export default InstansiRoutes;
