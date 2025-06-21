import axios from "axios";
import { notifikasi } from "../../features/ModalNotifikasi";

export const showLaporanFromUser = async token => {
    const base_url = "http://localhost:3000/api/laporan/instansi";
    const response = await axios.get(base_url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const tolakLaporanUser = async (id, token, keterangan) => {
    const url = `http://localhost:3000/api/laporan/${id}/tolak`;
    console.log(id, keterangan)
    try{
        const response = await axios.patch(
            url,
            { keterangan: keterangan },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data
    } catch (e) {
        notifikasi("Penolakan gagal", e.response.data.message, "error")
    }

};
