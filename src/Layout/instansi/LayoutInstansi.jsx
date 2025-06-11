import { useState } from "react";
import NavbarInstansi from "../../component/instansi/NavbarInstansi";
import SidebarInstansi from "../../component/instansi/SidebarInstansi";
import { Outlet } from "react-router-dom";

export default function LayoutInstansi() {
        const [darkThemeInstansi, setDarkThemeInstansi] = useState(false);

        return (
                <div className="flex flex-nowrap">
                        {/* ... */}
                        <SidebarInstansi darkThemeInstansi={darkThemeInstansi}/>

                        <main className="w-full overflow-x-hidden dark:bg-gray-900">
                                {/* ... */}
                                <NavbarInstansi darkThemeInstansi={darkThemeInstansi} setDarkThemeInstansi={setDarkThemeInstansi}/>

                                {/* isi utama nya */}
                                <Outlet  />
                        </main>
                </div>
        );
}
