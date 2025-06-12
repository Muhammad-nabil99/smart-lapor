import CardDaftarStafInstansi from "../../component/instansi/CardDaftarStafInstansi";
import { daftarStafAPI } from "../../services/dummyAPI/daftar-staf";

export default function DaftarStafInstansi() {
    const hariList = [
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu",
        "minggu",
    ];

    return (
        <section className="p-4">

            <span className="capitalize font-bold text-base sm:text-xl">daftar staf</span>

            {hariList.map((hari, index) => {
                const stafHariIni = daftarStafAPI.filter(
                    (item) => item.hari.toLowerCase() === hari
                );

                return (
                    <div
                        key={index}
                        id={`hari-${hari}`}
                        className="overflow-x-auto py-2"
                    >
                        <p className="font-semibold my-2 capitalize dark:text-white">
                            {hari}
                        </p>
                        <div className="grid grid-cols-[repeat(4,_minmax(200px,_300px))] gap-4 ps-1.5">
                            <CardDaftarStafInstansi card_tambah={true}/>
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
