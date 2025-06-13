import TabelLaporanInstansi from "../../component/instansi/TabelLaporanInstansi";

export default function LaporanInstansi() {
    return (
        <section className="p-4">
            <p className="font-bold text-base sm:text-xl dark:text-white">
                Laporan
            </p>
            <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
                <input
                    type="search"
                    className="px-3 py-2 shadow-sm/60 border dark:shadow-gray-950 border-gray-300 rounded-md dark:placeholder:text-gray-500 dark:border-gray-700"
                    placeholder="Cari..."
                />
            </div>

            <TabelLaporanInstansi />
        </section>
    );
}
