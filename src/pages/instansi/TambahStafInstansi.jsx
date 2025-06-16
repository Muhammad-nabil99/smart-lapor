import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useCallback, useState } from "react";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";

export default function TambahStafInstansi() {
    // variabel yang berkaitan dengan pilih hari penugasan -----------------------------------------------
    const [munculkanDropdown, setMunculkanDropdown] = useState(false);
    const [hariDipilih, setHariDipilih] = useState("Pilih");

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

    const setelahFileDrop = useCallback((fileDiterima) => {
        setSedangDiDrag(false);
        
        const file = fileDiterima[0];
        if( file) {

            const bacaFile = new FileReader();

            bacaFile.onload = () => {
                setNamaFoto(file.name);
                setSizeFoto((file.size / 1024 ** 2).toFixed(2));
                setUrlFoto(bacaFile.result);
            };
            bacaFile.readAsDataURL(file);
        };
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        onDrop: setelahFileDrop,
        onDragEnter: () => setSedangDiDrag(true),
        onDragLeave: () => setSedangDiDrag(false),
        accept: {
            "image/*": [], 
        },
    }); 

    const handleSubmitForm = (e) => {

        // mencegah halaman reload ;)
        e.preventDefault();

        // jika hari penugasan belum dipilih
        if (hariDipilih.toLowerCase() === "pilih") {
            Swal.fire({
                title: "Formulir gagal!",
                text: "Pilih hari penugasan staf terlebih dahulu",
                icon: "error",
            });
            return;
        }

        // jika gambar belum diinput
        if (!namaFoto) {
            Swal.fire({
                title: "Formulir gagal!",
                text: "Unggah file atau gambar ke dalam formulir terlebih dahulu",
                icon: "error",
            });
            return;
        }

        // jika ukuran foto melebihi 2mb
        if (sizeFoto > 2) {
            Swal.fire({
                title: "Formulir gagal!",
                text: "Ukuran file/gambar yang diunggah terlalu besar",
                icon: "error",
            });
            return;
        }

        Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            didClose: () => {
                window.location.reload();
            }
        }).fire({
            icon: "success",
            title: "Staf berhasil ditambahkan",
        });
    };

    return (
        <form
            method="get" // nanti di ganti post
            onSubmit={(e) => handleSubmitForm(e)}
            className="p-4 dark:text-white"
        >
            {/* header dan tombol submit */}
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg sm:text-xl">
                    Tambah Staf
                </span>
                <button className={buttonStyle} type="submit">
                    <i className="fas fa-plus"></i> {" "}
                    Tambah
                </button>
            </div>

            {/* card untuk memasukkan data-data */}
            <div className="mt-8 shadow-md/10 gap-10 rounded-md py-8 px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 mx-0 sm:mx-5">
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
                            type="number"
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
                            type="number"
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
                                    setMunculkanDropdown(!munculkanDropdown)
                                }
                                className={dropdownStyle}
                            >
                                <span className="text-sm sm:text-base">
                                    {hariDipilih}
                                </span>
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
                                    <LiaCalendarDaySolid />{" "}
                                    <hr className="w-full mx-auto border border-gray-200" />
                                </div>

                                {hariPenugasanList.map((hari, index) => (
                                    <div key={index}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setHariDipilih(hari);
                                                setMunculkanDropdown(
                                                    !munculkanDropdown
                                                );
                                            }}
                                            className="flex items-center gap-1 w-full text-start text-sm p-2 px-4 hover:font-bold dark:hover:bg-gray-500 hover:bg-gray-200"
                                        >
                                            {hari}
                                        </button>

                                        {(index + 1) % 3 === 0 && (
                                            <div className="flex items-center gap-2 px-3 my-2">
                                                <LiaCalendarDaySolid />{" "}
                                                <hr className="w-full mx-auto border border-gray-200" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* konten sebelah kanan (>sm) */}
                <div {...getRootProps()} className="border-none outline-none">
                    {/* menampilkan preview */}
                    <div
                        className={`
                            ${
                                sedangDiDrag
                                    ? "bg-[#BCF0DA]"
                                    : "bg-[#E5E7EB] dark:bg-gray-700"
                            }
                            relative h-60 sm:h-70 rounded-md flex items-center justify-center`}
                    >
                        {sedangDiDrag && (
                            <div className="arrow-hint absolute z-30 bottom-full w-full flex justify-center animate-bounce">
                                <i className="fa fa-arrow-circle-down text-green-500 text-6xl font-extrabold" />
                            </div>
                        )}

                        {namaFoto ? (
                            <img
                                src={urlFoto}
                                alt="preview image"
                                className="w-125 h-54 sm:h-62 object-cover rounded-md"
                            />
                        ) : (
                            <div className="text-center">
                                <i className="fa fa-eye text-gray-500 text-2xl"></i>
                                <p className="text-gray-500">Preview</p>
                            </div>
                        )}
                    </div>
                    <div className="text-xs my-1">
                        {sizeFoto > 2 ? (
                            <span className="text-red-500">
                                *Ukuran foto terlalu besar ({sizeFoto}mb)
                            </span>
                        ) : (
                            <span className="text-green-500">
                                {namaFoto && (
                                    <>*Memenuhi standar ({sizeFoto}mb)</>
                                )}
                            </span>
                        )}
                    </div>

                    {/* input file gambarnya */}
                    <div className="mt-3">
                        <p className="font-semibold mb-3">Unggah Foto:</p>
                        <label htmlFor="input-foto-instansi">
                            <div className="flex flex-nowrap border border-gray-200 dark:border-gray-700 rounded-md">
                                <span
                                    className={`
                                        ${
                                            sedangDiDrag || namaFoto
                                                ? "bg-[#BCF0DA]"
                                                : "bg-[#E5E7EB] dark:bg-gray-600"
                                        }
                                        p-4 sm:p-5 rounded-bl-md rounded-tl-md
                                    `}
                                >
                                    File
                                </span>
                                <span className="flex items-center line-clamp-1 ms-2">
                                    {namaFoto && (
                                        <span className="line-clamp-1 text-sm sm:text-base">
                                            {namaFoto}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </label>
                        <input
                            {...getInputProps()}
                            id="input-foto-instansi"
                            type="file"
                            name="file-gambar-instansi"
                            className="hidden"
                        />
                        <p className="mt-1 italic text-[.6rem] text-red-600">
                            Dokumen yang diunggah harus berupa gambar dan
                            menggunakan ekstensi .jpg, .jpeg, .png, .bmp /
                            maksimal ukuran file 2mb
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

const buttonStyle = `
        px-3 py-2 bg-black text-white dark:bg-gray-300 dark:text-black
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
