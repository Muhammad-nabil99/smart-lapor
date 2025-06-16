import Swal from "sweetalert2";

export const notifikasi = (judul, teks, jenis_notifikasi) => {
    Swal.fire({
        title: judul,
        text: teks,
        icon: jenis_notifikasi,
        confirmButtonText: "Oke",
        confirmButtonColor: "#00C96B",
    });

    return;
};
