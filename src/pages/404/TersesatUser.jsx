// ini adalah halaman jika seandainya url (khusus user) yang dituju tidak ditemukan
// *note: dibuat dengan seadanya (butuh perbaikan ui)

import { useNavigate } from "react-router-dom";
import question from "../../assets/question.png";

export default function Tersesat() {
        const navigate = useNavigate();

        return (
                <div className="flex flex-col gap-2 items-center justify-center h-[100vh]">
                        <img src={question} alt="404" className="w-[200px]" />
                        <p className="font-extrabold text-xl text-red-400 mt-5">Ups?? Sepertinya anda tersesat🤫</p>
                        <button onClick={() => navigate("/user/beranda")} type="button" class="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <i class="fa-solid fa-chevron-left me-2"></i>
                                        Kembali ke beranda
                        </button>
                </div>
        )
}