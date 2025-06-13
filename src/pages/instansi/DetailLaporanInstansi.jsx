import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import DataKosong from "../../component/instansi/DataKosong";
import DataAda from "../../component/instansi/DataAda";

export default function DetailLaporanInstansi() {

	const location = useLocation();
	const dataDetail = location.state?.dataDetail;
	
    return (
        <section className="p-4"> 
			{
				!dataDetail ? <DataKosong /> : <DataAda />
			}
        </section>
    );
}
