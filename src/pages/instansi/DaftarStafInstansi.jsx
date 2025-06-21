import { useEffect, useState } from "react";
import CardDaftarStafInstansi from "../../component/instansi/CardDaftarStafInstansi";
import { getStafInstansi } from "../../services/instansi/stafInstansi";

export default function DaftarStafInstansi() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const token = JSON.parse(localStorage.getItem("login-instansi")).token;
            const data_ = await getStafInstansi(token);
            setData(data_);
        })();
    }, []);
    const hariList = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

    return (
        <section className="p-4">
            <span className="capitalize font-bold text-base sm:text-xl dark:text-white">daftar staf</span>
            {hariList.map((hari, index) => {
                const stafHariIni = data.filter(item => item.hari_kerja.toLowerCase() === hari);

                return (
                    <div key={index} id={`hari-${hari}`} className="overflow-x-auto py-2">
                        <p className="font-semibold my-2 capitalize dark:text-white">{hari}</p>
                        <div className="grid grid-cols-[repeat(4,_minmax(200px,_300px))] gap-4 ps-1.5">
                            <CardDaftarStafInstansi card_tambah={true} />
                            {stafHariIni.map((item, index) => (
                                <CardDaftarStafInstansi key={index} {...item} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
