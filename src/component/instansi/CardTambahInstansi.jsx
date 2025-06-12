import { NavLink } from "react-router-dom";

export default function CardTambahInstansi() {
    return (
        <NavLink
            to="/instansi/tambah-staf"
            className="w-full h-full cursor-pointer dark:bg-gray-700 bg-gray-100 flex flex-col items-center justify-center rounded-md py-5 font-bold dark:text-gray-500 text-gray-400"
        >
			<p className="text-4xl">+</p>
            <p>Tambah Staf</p>
        </NavLink>
    );
}
