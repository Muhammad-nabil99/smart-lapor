import previewLaporanError from "../../assets/preview-laporan.png";
import profilStafError from "../../assets/profil-staf-error.png";
import userProfile from "../../assets/man.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { FaEye, FaGlobeAmericas, FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight, MdWorkspacePremium } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { kerjakanLaporan } from "../../services/instansi/profilInstansi";
import { notifikasi } from "../../features/ModalNotifikasi";
import { getStafInstansi } from "../../services/instansi/stafInstansi";
import { tolakLaporanUser } from "../../services/instansi/laporanInstansi";

export default function DataAda() {
    const navigate = useNavigate();
    const location = useLocation();

    const data_raw = location.state?.dataDetail;
    const data = data_raw[data_raw.index];

    const mapRef = useRef(null);
    const [date, setDate] = useState("");
    const [stafDikerjakan, setStafDikerjakan] = useState([]);
    const [munculkanBoxDeadline, setMunculkanBoxDeadline] = useState(false);
    const [idStaf, setIdStaf] = useState([]);
    const [semuaStaf, setSemuaStaf] = useState(null);
    const [isMunculkanAlasan, setIsMunculkanAlasan] = useState(false);
    const [keteranganDitolak, setKeteranganDitolak] = useState("");

    useEffect(() => {
        (async () => {
            const token = JSON.parse(localStorage.getItem("login-instansi")).token;
            const data_staf = await getStafInstansi(token);
            setSemuaStaf(data_staf);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const token = JSON.parse(localStorage.getItem("login-instansi")).token;
            const data_staf = await getStafInstansi(token);
            const data = [];
            for (let i_id in idStaf) {
                for (const i_staf in data_staf) {
                    if (data_staf[i_staf].id === idStaf[i_id]) {
                        const data_ = data_staf[i_staf];
                        data.push(data_);
                    }
                }
            }
            setStafDikerjakan(data);
        })();
    }, [idStaf]);

    const handleStafDikerjakan = (event, id) => {
        const isSelect = event.target.checked;
        if (isSelect) {
            setIdStaf(prev => [...prev.filter(item => item !== id), id]);
            return;
        } else {
            setIdStaf(prev => [...prev.filter(item => item !== id)]);
        }
    };
    const handleStatus = () => {
        if (date.length <= 0) {
            notifikasi("Gagal melakukan tindakan!", "tetapkan tanggal deadline terlebih dahulu terlebih dahulu", "error");
            return;
        }
        if (idStaf.length <= 0) {
            notifikasi("Gagal melakukan tindakan!", "Pilih staf terlebih dahulu", "error");
            return;
        }
        if (data.status.toLowerCase() === "antrian") {
            const token = JSON.parse(localStorage.getItem("login-instansi")).token;
            (async () => {
                const hasil = await kerjakanLaporan(data.id, data, date, token, stafDikerjakan);
                notifikasi("Status Laporan telah berubah", "", "error");
                navigate(-1);
            })();
        } else {
            notifikasi("Tindakan dicegah", "Status sudah dalam proses pengerjaan", "error");
            return;
        }
    };

    const handleStatusDitolak = () => {
        (async () => {
            const token = JSON.parse(localStorage.getItem("login-instansi")).token;
            const staf_ditolak = await tolakLaporanUser(data.id, token, keteranganDitolak);
            console.log(staf_ditolak)
        })();
        setIsMunculkanAlasan(false);
    };

    return (
        <div className="dark:text-white">
            <p className="flex items-center font-bold text-base sm:text-xl">
                Detail <MdKeyboardArrowRight /> Laporan
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(300px,_400px))] gap-2 mt-5 sm:mt-10">
                <div className="preview p-2 outline outline-gray-100 rounded-md">
                    <img
                        className="w-70 rounded-md object-cover"
                        src={data.foto_laporan_url}
                        alt="lapran preview"
                        onError={e => {
                            e.target.src = previewLaporanError;
                        }}
                    />
                </div>

                <div className="information p-2">
                    <div className="flex justify-between flex-wrap mb-5">
                        <div className="flex items-center gap-3">
                            <img src={userProfile} alt="instans preview" className="w-8 h-8 object-cover rounded-[50%]" />
                            <div className="flex flex-col">
                                <p className="font-semnibold">{data.pelapor.nama}</p>
                                <p className="text-[.6rem] -mt-1">{data.pelapor.kontak}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className="font-bold text-base sm:text-xl">{data.judul_laporan}</p>
                        <span
                            className="font-bold rounded-full px-3 py-2 text-xs flex items-center gap-1"
                            style={{
                                background:
                                    data.status.toLowerCase() === "antrian"
                                        ? "#FFE26F"
                                        : data.status.toLowerCase() === "tolak"
                                        ? "#FBA28E"
                                        : data.status.toLowerCase() === "selesai"
                                        ? "#9FFFC4"
                                        : data.status.toLowerCase() === "proses"
                                        ? "#5398ff"
                                        : "",
                            }}
                        >
                            <svg className="w-2 h-2" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    cx="5"
                                    cy="5"
                                    r="5"
                                    fill="none"
                                    className={
                                        data.status === "proses" || data.status.toLowerCase() === "antrian"
                                            ? "fill-dot-pending"
                                            : data.status.toLowerCase() === "tolak"
                                            ? "fill-dot-tolak"
                                            : data.status.toLowerCase() === "selesai"
                                            ? "fill-dot-selesai"
                                            : data.status.toLowerCase() === "proses"
                                            ? "fill-[#297EFF]"
                                            : ""
                                    }
                                />
                            </svg>

                            <span className="text-gray-100">{data.status}</span>
                        </span>
                    </div>
                    <p>
                        {data.publish.toLowerCase() === "publik" ? (
                            <div className="flex items-center gap-1 text-xs">
                                <FaGlobeAmericas />
                                {data.publish}
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-xs">
                                <FaEye /> {data.publish}
                            </div>
                        )}
                    </p>

                    <div className="deskripsi text-sm mt-2">
                        <p>{data.deskripsi}</p>
                        <p className="font-semibold  my-1 text-xs">{data.created_at}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center justify-between mt-2">
                        <div className=" items-center gap-1 flex">
                            <button
                                onClick={() => setMunculkanBoxDeadline(!munculkanBoxDeadline)}
                                className="bg-gray-200 dark:bg-gray-500 text-gray-800 dark:text-gray-300 font-bold rounded-md px-4 py-2 text-sm"
                            >
                                Kerjakan
                            </button>

                            {/* box set lokasi */}
                            <div
                                className="fixed bg-black/20 w-full h-full items-center justify-center inset-0 z-60 p-3"
                                style={{ display: munculkanBoxDeadline ? "flex" : "none" }}
                            >
                                <div className="bg-white rounded-md p-5 relative">
                                    <button
                                        onClick={() => setMunculkanBoxDeadline(false)}
                                        className="px-3 py-2 text-white font-bold absolute -top-3 -end-3 xs:-top-7 xs:-end-7  bg-red-500 rounded-[50%]"
                                    >
                                        x
                                    </button>
                                    <p className="font-semibold">
                                        <i className="fas fa-circle text-green-400 text-sm"></i> Tetapkan deadline:
                                    </p>
                                    <div className="bg-white rounded-md p-3 flex flex-wrap justify-start relative gap-1">
                                        <div className="bg-gray-200 rounded-md p-3">
                                            <input
                                                type="date"
                                                className="dark:text-black focus:outline-gray-400"
                                                value={date}
                                                onChange={e => {
                                                    setDate(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => handleStatus()}
                                            className="p-3 bg-green-400 text-sm text-white capitalize rounded-md flex items-center gap-1"
                                        >
                                            <FaLocationArrow /> Tetapkan
                                        </button>
                                    </div>
                                    {/* set grid staf untuk dipekerjakan */}
                                    <p className="font-semibold mt-5">
                                        <i className="fas fa-circle text-green-400 text-sm"></i> Staf yang akan dikerjakan
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 p-4 gap-3 mt-5">
                                        {/* daftar staf */}
                                        {semuaStaf &&
                                            semuaStaf.map(staf => (
                                                <>
                                                    <div className="outline outline-gray-200 ronded-md p-3 flex gap-1 items-start">
                                                        <input type="checkbox" onChange={e => handleStafDikerjakan(e, staf.id)} id={`staf-${staf.id}`} />
                                                        <label htmlFor={`staf-${staf.id}`} className="flex flex-col items-center gap-1">
                                                            <img
                                                                src={staf.avatar}
                                                                onError={e => {
                                                                    e.target.src = profilStafError;
                                                                }}
                                                                alt="avatar staf"
                                                                className="w-20 h-20 sm:w-25 sm:h-25 rounded-[50%] object-cover"
                                                            />

                                                            <p>{staf.nama_staf}</p>
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsMunculkanAlasan(true)}
                                className="bg-red-200 dark:bg-gray-500 text-gray-800 dark:text-gray-300 font-bold rounded-md px-4 py-2 text-sm"
                            >
                                Tolak
                            </button>

                            {/* ini box khusus ditolak */}
                            <div
                                className="fixed inset-0 items-center z-60 justify-center w-full h-full bg-black/40"
                                style={{ display: isMunculkanAlasan ? "flex" : "none" }}
                            >
                                <div className="bg-white p-4 px-5 rounded-md relative">
                                    {/* button close */}
                                    <button
                                        onClick={() => setIsMunculkanAlasan(false)}
                                        className="px-3 py-1 text-white font-bold absolute -top-3 -end-3 xs:-top-7 xs:-end-7  bg-red-500 rounded-[50%]"
                                    >
                                        x
                                    </button>
                                    <p className="mb-1">Alasan Laporan Ditolak</p>
                                    <textarea
                                        value={keteranganDitolak}
                                        onChange={e => setKeteranganDitolak(e.target.value)}
                                        className="w-full h-35 p-3 rounded-md outline outline-gray-300 border-none"
                                        placeholder="Masukkan alasan"
                                    ></textarea>
                                    <button className="px-3 py-2 bg-red-500 text-white rounded-md" type="button" onClick={() => handleStatusDitolak()}>
                                        Tolak
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* disini khusus instansi yang dipekerjakan */}
            <div className="grid grid-cols-2">
                <div className="flex flex-wrap items-center gap-3 my-2">
                    {stafDikerjakan &&
                        stafDikerjakan.map(item => {
                            return (
                                <>
                                    <div className="flex flex-col items-center gap-1 relative">
                                        <div>
                                            <img
                                                src={item.avatar}
                                                alt="profil"
                                                onError={e => {
                                                    e.target.src = profilStafError;
                                                }}
                                                className="w-10 h-10 rounded-[50%] object-cover"
                                            />
                                        </div>
                                        {/* untuk icon medali nya */}
                                        <MdWorkspacePremium className="absolute -top-2 -end-2 text-yellow-600" />
                                        <div>
                                            <span className="text-[.65rem]">{item.nama_staf}</span>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>

            <div className="text-sm my-5 mb-3 font-semibold">
                Tempat Kejadian <span className="font-normal">(jarak ke pelapor : </span>
                <span className="text-green-400">{data.jarak_ke_pelapor_km} KM</span>
                <span className="font-normal">)</span>:
            </div>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY_MAPS} libraries={["places"]}>
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "300px" }}
                    center={{ lat: parseFloat(data.lokasi_pelapor.latitude), lng: parseFloat(data.lokasi_pelapor.longitude) }}
                    zoom={14}
                    mapTypeId="hybrid"
                    onLoad={map => (mapRef.current = map)}
                >
                    <Marker position={{ lat: parseFloat(data.lokasi_pelapor.latitude), lng: parseFloat(data.lokasi_pelapor.longitude) }} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
