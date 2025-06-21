import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addStafInstansi } from "../../services/instansi/stafInstansi";
import Swal from "sweetalert2";
import { notifikasi } from "../ModalNotifikasi";

export const useTambahStaf = () => {
    const navigate = useNavigate();

    const { mutate: onAddStaf } = useMutation({
        mutationFn: addStafInstansi,
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
            navigate("/instansi/daftar-staf");
        },
        onError: (err) =>  {
            notifikasi("Gagal menambah staf", err.response.data.message)
            return;
        }
    });

    return { onAddStaf };
};
