import { useMutation } from "@tanstack/react-query";
import { deleteStafInstansi } from "../../services/instansi/stafInstansi";
import Swal from "sweetalert2";
import { notifikasi } from "../ModalNotifikasi";

export const useHapusStaf = () => {

    const { mutate: onDeleteStaf } = useMutation({
        mutationFn: deleteStafInstansi,
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
            window.location.reload();
        },
        onError: err => {
            notifikasi("Gagal menambah staf", err.response.data.message);
            return;
        },
    });
    return {onDeleteStaf};
};
