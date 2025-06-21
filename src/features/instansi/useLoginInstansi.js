import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginInstansi } from "../../services/instansi/instansiAPI";
import { notifikasi } from "../ModalNotifikasi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useLoginInstansi = () => {
    const navigate = useNavigate();

    const { mutate: onLoginInstansi, isLoading } = useMutation({
        mutationFn: loginInstansi,
        onMutate: () => {
            Swal.fire({
                title: "Mohon tunggu...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        },
        onSuccess: data => {
            localStorage.setItem("login-instansi", JSON.stringify({ ...data, expiredAt: Date.now() + 24 * 60 * 60 * 1000 }));
            notifikasi("Login Sukses", "", "success");
            navigate("/instansi/beranda");
        },
        onError: err => {
            notifikasi("Login gagal", err.response.data.message, "error");
        },
    });

    return { onLoginInstansi, isLoading };
};
