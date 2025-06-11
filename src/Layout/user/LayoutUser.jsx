import { Outlet } from "react-router-dom";
import SidebarUser from "../../component/user/SidebarUser";
import NavbarUser from "../../component/user/NavbarUser";

import { useState } from "react";

export default function LayoutUser() {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("openSidebarUser") ? "true" : "false"
  );

  return (
    <div className="flex flex-nowrap">
      {/* konten sebelah kiri */}
      <SidebarUser isOpen={isOpen} />

      {/* kontent sebelah kanan */}
      <main className="w-full overflow-x-hidden dark:bg-gray-900">
        {/* navigasi user nya */}
        <NavbarUser setIsOpen={setIsOpen} />
        
        {/* isi utama nya */}
        <Outlet />
      </main>
    </div>
  );
}
