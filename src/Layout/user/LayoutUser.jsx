import { Outlet } from "react-router-dom";
import SidebarUser from "../../component/user/SidebarUser";
import NavbarUser from "../../component/user/NavbarUser";

export default function LayoutUser() {
        return (
                <div className="flex gap-2 flex-nowrap">
                        
                        {/* konten sebelah kiri */}
                        <SidebarUser/>

                        {/* kontent sebelah kanan */}
                        <main className="w-full">

                                {/* navigasi user nya */}
                                <NavbarUser/>

                                {/* isi utama nya */}
                                <Outlet />
                        </main>
                </div>
        )
}