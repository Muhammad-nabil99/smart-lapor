import { Routes, Route } from "react-router-dom";

import TersesatInstansi from "../../pages/404/TersesatInstansi";

const InstansiRoutes = () => {
        return (
                <Routes>
                        <Route element={<LayoutInstansi />}>
                                {/* ... */}

                                {/* path jika halaman yang dituju tidak ditemukan */}
                                <Route path="*" element={<TersesatInstansi />}></Route>
                        </Route>
                </Routes>
        )
}

export default InstansiRoutes;