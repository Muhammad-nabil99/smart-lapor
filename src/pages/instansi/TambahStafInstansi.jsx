import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useCallback, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { useDropzone } from "react-dropzone";
import { BsArrowDownCircle, BsEye, BsEyedropper, BsEyeFill, BsEyeSlash, BsEyeSlashFill } from "react-icons/bs";
import { RxEyeOpen } from "react-icons/rx";

export default function TambahStafInstansi() {

        // variabel yang berkaitan dengan pilih hari penugasan -----------------------------------------------
        const [munculkanDropdown, setMunculkanDropdown] = useState(false);
        const [nilaiDropdownChoice, setNilaiDropdownChoice] = useState("Pilih");

        const hariPenugasanList = [
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jum'at",
                "Sabtu",
                "Minggu",
        ];

        // variabel yang berkaitan dengan upload gambar ---------------------------------------------------------
        const [namaFoto, setNamaFoto] = useState(null);
        const [sizeFoto, setSizeFoto] = useState(null);
        const [urlFoto, setUrlFoto] = useState(null);

        const [sedangDiDrag, setSedangDiDrag] = useState(false);
        const setelahFileDrop = useCallback( fileDiterima => {
                
                setSedangDiDrag(false);
                
                fileDiterima.forEach(file => {
                        const bacaFile = new FileReader();
                        bacaFile.onload = () => {
                                console.log(file.name)
                                setNamaFoto(file.name);
                                setSizeFoto((file.size/1024**2).toFixed(2));
                                setUrlFoto(bacaFile.result);
                        }
                        bacaFile.readAsDataURL(file);
                })
        }, []);


        const { getRootProps, getInputProps } = useDropzone({
                multiple: false,
                onDrop: setelahFileDrop,
                onDragEnter: () => setSedangDiDrag(true),
                onDragLeave: () => setSedangDiDrag(false),
                accept: {
                        "image/*": []
                }
        });

        return (
                <form method="post" className="p-4 dark:text-white">
                        {/* header dan tombol submit */}
                        <div className="flex items-center justify-between">
                                <span className="font-bold text-lg sm:text-xl">
                                        Tambah Staf
                                </span>
                                <button className={buttonStyle} type="submit">
                                        Tambah
                                </button>
                        </div>

                        {/* card untuk memasukkan data-data */}
                        <div className="mt-8 shadow-md/10 gap-10 rounded-md py-10 px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 mx-0 sm:mx-5">
                                
                                {/* konten sebelah kiri (ukuran >sm) */}
                                <div>
                                        {/* nama lengkap */}
                                        <div className="mb-7 flex flex-col gap-2.5">
                                                <label
                                                        htmlFor="nama-lengkap-instansi"
                                                        className="text-sm sm:text-base"
                                                >
                                                        Nama Lengkap
                                                </label>
                                                <input
                                                        id="nama-lengkap-instansi"
                                                        type="text"
                                                        className={inputStyle}
                                                        placeholder="john Doe"
                                                        required
                                                />
                                        </div>

                                        <div className="mb-7 flex flex-col gap-2.5">
                                                <label
                                                        htmlFor="nomor-induk-pegawai-instansi"
                                                        className="text-sm sm:text-base"
                                                >
                                                        Nomor Induk Pegawai
                                                </label>
                                                <input
                                                        id="nomor-induk-pegawai-instansi"
                                                        type="text"
                                                        className={inputStyle}
                                                        placeholder="YYYYMMDD GG SS KK"
                                                        required
                                                />
                                        </div>

                                        <div className="mb-7 flex flex-col gap-2.5">
                                                <label
                                                        htmlFor="kontak"
                                                        className="text-sm sm:text-base"
                                                >
                                                        Kontak
                                                </label>
                                                <input
                                                        id="kontak"
                                                        type="text"
                                                        className={inputStyle}
                                                        placeholder="08xx-xxxx-xxxx"
                                                        required
                                                />
                                        </div>

                                        {/* pilih hari penugasan */}
                                        <div className="flex flex-col gap-2.5">
                                                <span className="text-sm sm:text-base">
                                                        Hari Penugasan
                                                </span>
                                                <div className="dropdown-box relative">
                                                        <button
                                                                id="pilih"
                                                                type="button"
                                                                onClick={() =>
                                                                        setMunculkanDropdown(
                                                                                !munculkanDropdown
                                                                        )
                                                                }
                                                                className={
                                                                        dropdownStyle
                                                                }
                                                        >
                                                                {nilaiDropdownChoice}
                                                                {munculkanDropdown ? (
                                                                        <MdKeyboardArrowUp />
                                                                ) : (
                                                                        <MdKeyboardArrowDown />
                                                                )}
                                                        </button>

                                                        <div
                                                                className="pb-3 pt-1 font-semibold absolute w-full shadow-md/10 rounded-md dark:bg-gray-700 bg-white mb-2 bottom-full overflow-y-auto h-38"
                                                                style={{
                                                                        display: munculkanDropdown
                                                                                ? "block"
                                                                                : "none",
                                                                }}
                                                        >
                                                                <div className="flex items-center gap-2 px-3 my-2">
                                                                        <LiaCalendarDaySolid /> <hr className="w-full mx-auto border border-gray-200" />
                                                                </div>
                                                                {hariPenugasanList.map(
                                                                        (
                                                                                hari, index
                                                                        ) => (
                                                                                <div key={index}>
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={() => {setNilaiDropdownChoice(hari); setMunculkanDropdown(!munculkanDropdown)}}
                                                                                                className="flex items-center gap-1 w-full text-start text-sm p-2 px-4 hover:font-bold dark:hover:bg-gray-500 hover:bg-gray-200"
                                                                                        >
                                                                                                {console.log(index)}
                                                                                                {hari}
                                                                                                
                                                                                        </button>
                                                                                        {
                                                                                                (index+1)%3 === 0 && (
                                                                                                        <div className="flex items-center gap-2 px-3 my-2">
                                                                                                                <LiaCalendarDaySolid /> <hr className="w-full mx-auto border border-gray-200" />
                                                                                                        </div>
                                                                                                )
                                                                                        }
                                                                                </div>
                                                                        )
                                                                )}
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* konten sebelah kanan (>sm) */}
                                
                                <div {...getRootProps()} className="border-none outline-none">
                                
                                        {/* menampilkan preview */}
                                        
                                        <div
                                                className="relative h-60 sm:h-70 rounded-md flex items-center justify-center"
                                                style={{ 
                                                        background: sedangDiDrag ? "#BCF0DA" : "#E5E7EB"
                                                }}
                                        >
                                                {
                                                        sedangDiDrag && (
                                                                <div className="arrow-hint absolute z-30 bottom-full w-full flex justify-center animate-bounce">
                                                                        <i className="fa fa-arrow-circle-down text-green-500 text-6xl font-extrabold"/>
                                                                </div>
                                                        )
                                                }

                                                { 
                                                        namaFoto ? (
                                                                <img
                                                                        src={urlFoto}
                                                                        alt="preview image"
                                                                        className="w-125 h-54 sm:h-62 object-cover rounded-md"
                                                                />
                                                        ) : (
                                                                <div className="text-center">
                                                                        <i className="fa fa-eye text-gray-500 text-2xl"></i>
                                                                        <p className="text-gray-700">Preview</p>
                                                                </div>
                                                        )
                                                }
                                        </div>
                                        <div className="text-xs my-1">
                                                {
                                                        sizeFoto > 2 ? (
                                                                <span className="text-red-500">
                                                                        *Ukuran foto terlalu besar ({sizeFoto}mb)
                                                                </span>
                                                        ) : (
                                                                <span className="text-green-500">
                                                                        {namaFoto && (
                                                                                <>
                                                                                        *Memenuhi standar ({sizeFoto}mb)
                                                                                </>
                                                                        )}
                                                                </span>
                                                        )
                                                }
                                        </div>
                                        {/* input file gambarnya */}
                                        <div className="mt-3">
                                                <p className="font-semibold mb-3">Unggah Foto:</p>
                                                <label htmlFor="input-foto-instansi">
                                                        <div className="flex flex-nowrap border border-gray-200 rounded-md">
                                                                <span
                                                                        className="p-4 sm:p-5 bold"
                                                                        style={{ background: sedangDiDrag || namaFoto ? "#BCF0DA" : "#E5E7EB" }}
                                                                >
                                                                        File
                                                                </span>
                                                                <span className="flex items-center line-clamp-1 ms-2">
                                                                        {namaFoto && (
                                                                                <span className="line-clamp-1">
                                                                                        {namaFoto}
                                                                                </span>
                                                                        )}
                                                                </span>
                                                        </div>
                                                </label>
                                                <input {...getInputProps()} id="input-foto-instansi" type="file" className="hidden"/>
                                                <p className="mt-1 italic text-[.6rem] text-red-600">
                                                        Dokumen yang diunggah harus berupa gambar dan menggunakan
                                                        ekstensi .jpg, .jpeg, .png, .bmp / maksimal ukuran file 2mb
                                                </p>
                                        </div>

                                </div>
                        </div>
                </form>
        );
}

const buttonStyle = `
        px-3 py-2 bg-black text-white dark:bg-white dark:text-black
        rounded-md sm:text-base xs:text-sm text-xs
`;

const inputStyle = `
        p-3 sm:p-4 shadow-md/20 rounded-md dark:bg-gray-700
        placeholder:text-xs sm:placeholder:text-base text-sm sm:text-base
`;

const dropdownStyle = `
        p-3 sm:p-4 justify-between w-full rounded-md bg-white dark:bg-gray-700
        dark:text-white flex items-center shadow-md/20 
`;
