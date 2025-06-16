import { useState, useEffect } from "react";
import NavbarInstansi from "../../component/instansi/NavbarInstansi";
import SidebarInstansi from "../../component/instansi/SidebarInstansi";
import { Outlet, useNavigate } from "react-router-dom";
import { notifikasi } from "../../features/ModalNotifikasi";

export default function LayoutInstansi() {
    
    const navigate = useNavigate();
    const data_instansi = JSON.parse(localStorage.getItem("instansi"));

    useEffect(() => {
        if (!data_instansi) {
            notifikasi("System Error", "Silahkan login ke akun anda terlebih dahulu", "error");
            navigate("/instansi/masuk");
            console.log("pindah");
            return;
        }
    }, []);

    const [darkThemeInstansi, setDarkThemeInstansi] = useState(false);

    return (
        <div className="flex flex-nowrap">
            {/* ... */}
            <SidebarInstansi darkThemeInstansi={darkThemeInstansi} />

            <main className="w-full overflow-x-hidden dark:bg-gray-900">
                {/* ... */}
                <NavbarInstansi darkThemeInstansi={darkThemeInstansi} setDarkThemeInstansi={setDarkThemeInstansi} />

                {/* isi utama nya */}
                <Outlet />
            </main>
        </div>
    );
}
