import { useState, useEffect } from "react";
import NavbarInstansi from "../../component/instansi/NavbarInstansi";
import SidebarInstansi from "../../component/instansi/SidebarInstansi";
import { Outlet, useNavigate } from "react-router-dom";
import { notifikasi } from "../../features/ModalNotifikasi";
import { useQueryClient } from "@tanstack/react-query";
import { checkExpired } from "../../features/instansi/checkExpired";

export default function LayoutInstansi() {
    
    const clientQuery = useQueryClient();
    const navigate = useNavigate();
    const check_login = JSON.parse(localStorage.getItem("login-instansi"));
    
    useEffect(() => {
        if (!check_login) {
            notifikasi("Gagal Login", "Token anda kadaluawarsa", "error");
            navigate("/instansi/masuk");
            return;
        } else {
            checkExpired(check_login.expiredAt);
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
