import { Outlet } from "react-router-dom";
import SidebarUser from "../../component/user/SidebarUser";
import NavbarUser from "../../component/user/NavbarUser";

export default function LayoutUser() {
        return (
                <div className="flex gap-2 flex-nowrap">
                        <SidebarUser/>
                        <main className="w-full">
                                <NavbarUser/>
                                <Outlet />
                        </main>
                </div>
        )
}