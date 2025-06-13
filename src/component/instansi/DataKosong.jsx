import { Button } from "flowbite-react";
import noDataImage from "../../assets/tidak-ada-data.gif";
import { Navigate, useNavigate } from "react-router-dom";

export default function DataKosong() {
	const navigate = useNavigate();
	
    return (
        <div className="p-4 flex-col gap-3 mt-10 flex justify-center items-center">
            <img
                src={noDataImage}
                alt="data tidak ditemuan gambar"
                loading="lazy"
                className="object-cover rounded-[50%] w-50 h-50"
            />
			<p>Data Tidak Tersedia</p>
			<Button color="green" onClick={() => navigate(0)}>Kembali</Button>
        </div>
    );
}
