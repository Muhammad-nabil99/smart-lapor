import SidebarInstansi from "../../component/instansi/SidebarInstansi";

export default function LayoutInstansi() {
        const [darkThemeUser, setDarkThemeUser] = useState(false);

        return (
                <div>
                        {/* ... */}
                        <SidebarInstansi darkThemeUser={darkThemeUser}/>

                        <main className="w-full">
                                {/* ... */}
                                

                                {/* isi utama nya */}
                                <Outlet />
                        </main>
                </div>
        );
}
