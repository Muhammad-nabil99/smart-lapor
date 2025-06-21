import axios from "axios";
import { notifikasi } from "../../features/ModalNotifikasi";

export const getProfilinstansi = async token => {
    const hasil_response = await axios.get("http://localhost:3000/api/instansi/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return hasil_response.data;
};

export const kerjakanLaporan = async (id, deadline, token, staf) => {
    const base_url = `http://localhost:3000/api/laporan/${id}/tugaskan`;
    const id_staf = staf[0].id

    try {
        const response = await axios.patch(
            base_url,
            { id_staf: id_staf, deadline: deadline },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data)
        return response.data
    } catch (e){
        notifikasi("Gagal Menugaskan staf", e.message, "error")
    }



};
