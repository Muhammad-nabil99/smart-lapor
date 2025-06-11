import CardBerandaInstansi from "../../component/instansi/CardBerandaInstansi";

import laporanMasukImage from "../../assets/laporan-masuk.png";
import laporanDiprosesImage from "../../assets/laporan-diproses.png";
import laporanSelesaiImage from "../../assets/laporan-selesai.png";

function BerandaInstansi() {
        return (
                <section className="p-4">

                        {/* kumpulan card laporan */}
                        <div className="grid gird-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5 smgap-7 md:gap-10">
                                <CardBerandaInstansi
                                        cardText="Laporan Masuk"
                                        cardColor="#FFD7D7"
                                        cardImage={laporanMasukImage}
                                        countNumber="10"
                                />

                                <CardBerandaInstansi
                                        cardText="Laporan Diproses"
                                        cardColor="#C2D7FF"
                                        cardImage={laporanDiprosesImage}
                                        countNumber="10"
                                />

                                <CardBerandaInstansi
                                        cardText="Laporan Selesai"
                                        cardColor="#BAFFC9"
                                        cardImage={laporanSelesaiImage}
                                        countNumber="10"
                                />
                        </div>

                        <div className="p-10 py-15 bg-gray-200 mt-7">
                                <p className="text-center text-2xl ">Statistik laporan yang diselesaikan/bulan</p>
                        </div>

                        {/* box staf yang bertugas */}
                        <div>
                                <div className="p-5"></div>
                        </div>
                </section>
        );
}


export default BerandaInstansi