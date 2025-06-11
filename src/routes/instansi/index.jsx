import { Routes, Route } from "react-router-dom";

import HalamanTidakDitemukanInstansi from "../../pages/404/HalamanTidakDitemukanInstansi";
import LayoutInstansi from "../../Layout/instansi/LayoutInstansi";
import BerandaInstansi from "../../pages/instansi/BerandaInstansi";

const InstansiRoutes = () => {
        return (
                <Routes>
                        <Route element={<LayoutInstansi />}>
                                {/* ... */}
                                <Route path="/beranda" element={<BerandaInstansi />}></Route>

                                {/* path jika halaman yang dituju tidak ditemukan */}
                                <Route path="*" element={<HalamanTidakDitemukanInstansi />}></Route>
                        </Route>
                </Routes>
        )
}

export default InstansiRoutes;