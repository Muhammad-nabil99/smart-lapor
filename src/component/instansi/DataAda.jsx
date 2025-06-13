import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function DataAda() {

    const location = useLocation();
	const data = location.state?.dataDetail;

    return (
        <div>
            <p className="flex items-center font-bold text-base sm:text-xl dark:text-white">
                Detail <MdKeyboardArrowRight /> Laporan
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 sm:mt-10">
                <div className="preview p-2 flex justify-end">
                    <img className="w-full sm:w-[95%] md:w-[90%] lg:w-[80%] rounded-md object-cover" src={data.laporanPreview} alt="lapran preview" />
                </div>

                <div className="information p-2">
                    <div className="flex justify-between flex-wrap mb-5">
                        <div className="flex items-center gap-3">
                            <img src={data.instansiPreview} alt="instans preview" className="w-8 h-8 object-cover rounded-[50%]"/>
                            <div>
                                <p>{data.alamat}</p>
                                <p>{data.instansi}</p>
                            </div>
                        </div>
                        <div className="text-sm">{data.nomor_laporan}</div>
                    </div>

                    <p className="font-bold text-base sm:text-xl">{data.laporan}</p>

                    <div className="deskripsi text-xs mt-2">
                        <p>{data.deskripsi}</p>
                        <p className="font-semibold">{data.waktu}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <button className="bg-[#F7EC1D]/30 text-gray-600 font-bold rounded-full px-3 py-2 text-sm">Tolak</button>
                            <button className="bg-[#F7EC1D]/30 text-gray-600 font-bold rounded-full px-3 py-2 text-sm">Kerjakan</button>
                        </div>
                        <p className="text-xs px-2 italic capitalize">batas waktu{data.batas_waktu}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
