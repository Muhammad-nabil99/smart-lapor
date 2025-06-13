import { Routes, Route } from "react-router-dom";

import HalamanTidakDitemukanInstansi from "../../pages/404/HalamanTidakDitemukanInstansi";
import LayoutInstansi from "../../Layout/instansi/LayoutInstansi";
import BerandaInstansi from "../../pages/instansi/BerandaInstansi";
import TambahStafInstansi from "../../pages/instansi/TambahStafInstansi";
import Laporaninstansi from "../../pages/instansi/LaporanInstansi";
import RiwayatInstansi from "../../pages/instansi/RiwayatInstansi";
import DaftarStafInstansi from "../../pages/instansi/DaftarStafInstansi";
import DetailLaporanInstansi from "../../pages/instansi/DetailLaporanInstansi";

const InstansiRoutes = () => {
        return (
                <Routes>
                        <Route element={<LayoutInstansi />}>
                                <Route path="/beranda" element={<BerandaInstansi />} />
                                <Route path="/daftar-staf" element={<DaftarStafInstansi />} />
                                <Route path="/tambah-staf" element={<TambahStafInstansi />} />
                                <Route path="/laporan" element={<Laporaninstansi />} />
                                <Route path="/laporan/:id/detail" element={<DetailLaporanInstansi />} />
                                <Route path="/riwayat" element={<RiwayatInstansi />} />
                                <Route path="/riwayat/:id/detail" element={<DetailLaporanInstansi />} />
                        </Route>

                        {/* path jika halaman yang dituju tidak ditemukan */}
                        <Route
                                path="*"
                                element={<HalamanTidakDitemukanInstansi />} />

                </Routes>
        );
};

export default InstansiRoutes;
