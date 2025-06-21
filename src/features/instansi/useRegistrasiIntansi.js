import { useMutation } from "@tanstack/react-query";
import { registrasiInstansiAPI } from "../../services/instansi/instansiAPI";
import { notifikasi } from "../ModalNotifikasi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useRegitrasiIntansi = () => {
    const navigate = useNavigate();

    const { mutate: onRegistrasi, isLoading } = useMutation({

        mutationFn: registrasiInstansiAPI,
        onMutate: () => {
            Swal.fire({
                title: "Mohon tunggu...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        },
        onSuccess: (data) => {
            notifikasi("Sukses daftar akun", data.message, "success");
            navigate("/instansi/masuk", {
                state: data
            })
        },
        onError: error => {
            notifikasi("Gagal daftar akun", error.response.data.message, "error")
            return;
        },
    });
    
    return { onRegistrasi, isLoading };
};
