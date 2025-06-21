import axios from "axios";
import { notifikasi } from "../../features/ModalNotifikasi";
import { useNavigate } from "react-router-dom";

export const registrasiInstansiAPI = async data => {
    
    const hasil = await axios.post("http://localhost:3000/api/instansi/daftar", data);
    const data_tambahan = {
        email: data.email,
        password: data.password,
    };
    return { ...hasil.data, ...data_tambahan };
};

export const loginInstansi = async data => {
    const hasil = await axios.post("http://localhost:3000/api/autentikasi/masuk", data);
    return {...hasil.data, email: data.email};
};




