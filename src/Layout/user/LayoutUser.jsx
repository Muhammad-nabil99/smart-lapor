import { Outlet } from "react-router-dom";
import SidebarUser from "../../component/user/SidebarUser";
import NavbarUser from "../../component/user/NavbarUser";

import { useState } from "react";

export default function LayoutUser() {
        const [darkThemeUser, setDarkThemeUser] = useState(false);

        return (
                <div className="flex flex-nowrap">
                        {/* konten sebelah kiri */}
                        <SidebarUser darkThemeUser={darkThemeUser} />

                        {/* kontent sebelah kanan */}
                        <main className="w-full overflow-x-hidden dark:bg-gray-900">
                                {/* navigasi user nya */}
                                <NavbarUser
                                        darkThemeUser={darkThemeUser}
                                        setDarkThemeUser={setDarkThemeUser}
                                />

                                {/* isi utama nya */}
                                <Outlet />
                        </main>
                </div>
        );
}
