import { Routes, Route } from "react-router-dom";

import HalamanTidakDitemukanInstansi from "../../pages/404/HalamanTidakDitemukanInstansi";
import LayoutInstansi from "../../Layout/instansi/LayoutInstansi";
import BerandaInstansi from "../../pages/instansi/BerandaInstansi";
import TambahStafInstansi from "../../pages/instansi/TambahStafInstansi";
import Laporaninstansi from "../../pages/instansi/LaporanInstansi";
import RiwayatInstansi from "../../pages/instansi/RiwayatInstansi";
import DaftarStafInstansi from "../../pages/instansi/DaftarStafInstansi";
import DetailLaporanInstansi from "../../pages/instansi/DetailLaporanInstansi";
import DaftarInstansi from "../../pages/instansi/DaftarInstansi";
import LoginInstansi from "../../pages/instansi/LoginInstansi";
import DaftarLanjutanInstansi from "../../pages/instansi/DaftarLanjutanInstansi";
import DaftarVerifikasiInstansi from "../../pages/instansi/DaftarVerifikasiInstansi";

const InstansiRoutes = () => {
        return (
                <Routes>
                        <Route path="/daftar" element={<DaftarInstansi />} />
                        <Route path="/daftar-lanjutan" element={<DaftarLanjutanInstansi />}></Route>
                        <Route path="/daftar-verifikasi" element={<DaftarVerifikasiInstansi />}></Route>
                        <Route path="/masuk" element={<LoginInstansi />} />

                        <Route element={<LayoutInstansi />}>
                                <Route path="/beranda" element={<BerandaInstansi />} />
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
