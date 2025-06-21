import { useEffect, useState } from "react";
import TabelLaporanInstansi from "../../component/instansi/TabelLaporanInstansi";
import { notifikasi } from "../../features/ModalNotifikasi";
import { showLaporanFromUser } from "../../services/instansi/laporanInstansi";

export default function LaporanInstansi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data_instansi = JSON.parse(localStorage.getItem("login-instansi"));
                const data = await showLaporanFromUser(data_instansi.token);
                setData(data.data);
            } catch (err) {
                notifikasi("Gagal mendapatkan data", err.response.data.message, "error");
            }
        })();
    });

    
    return (
        <section className="p-4">
            <p className="font-bold text-base sm:text-xl dark:text-white">Laporan</p>
            <TabelLaporanInstansi />
        </section>
    );
}
