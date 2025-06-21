import { useNavigate } from "react-router-dom";
import { dataRiwayatAPI } from "../../services/dummyAPI/riwayat";

import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { notifikasi } from "../../features/ModalNotifikasi";
import { showLaporanFromUser } from "../../services/instansi/laporanInstansi";
import { useEffect, useState } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function TabelRiwayatInstansi() {
    const navigate = useNavigate();
    const [dataAPI, setDataAPI] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const data_instansi = JSON.parse(localStorage.getItem("login-instansi"));
                const data = await showLaporanFromUser(data_instansi.token);
                data.data
                    .filter(item => item.status.toLowerCase() === "selesai")
                    .map(item => {
                        setDataAPI({ ...data, data: item });
                    });
            } catch (err) {
                notifikasi("Gagal mendapatkan data", err.reponse.data.message, "error");
            }
        })();
    }, []);
    return (
        <div className="overflow-x-auto mt-5 mb-2 py-3">
            {dataAPI ? (
                        <Table striped>
                            <TableHead>
                                <TableRow className="divide-y">
                                    <TableHeadCell>No</TableHeadCell>
                                    <TableHeadCell>Nama</TableHeadCell>
                                    <TableHeadCell>Waktu Laporan</TableHeadCell>
                                    <TableHeadCell>Judul Laporan</TableHeadCell>
                                    <TableHeadCell>Status</TableHeadCell>
                                    <TableHeadCell>Publish</TableHeadCell>
                                    <TableHeadCell>Deskripsi</TableHeadCell>
                                    <TableHeadCell>Aksi</TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataAPI.data.map((data, index) => (
                                    <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{data.pelapor.nama}</TableCell>
                                        <TableCell>{data.created_at}</TableCell>
                                        <TableCell>{data.judul_laporan}</TableCell>
                                        <TableCell>{data.status}</TableCell>
                                        <TableCell>{data.publish}</TableCell>
                                        <TableCell>
                                            <span className="line-clamp-3">{data.deskripsi}</span>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                color="green"
                                                className="m-1"
                                                onClick={() =>
                                                    navigate(`/instansi/riwayat/${data.id}/detail`, {
                                                        state: { dataDetail: { ...dataAPI.data } },
                                                    })
                                                }
                                            >
                                                Detail
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
            ) : (
                <div className="mt-5 flex flex-col gap-1 items-center">
                    <MdOutlineWorkHistory className="text-2xl"/>
                    <p className="font-semibold text-gray-600 text-center">Belum ada riwayat</p>
                </div>
            )}
        </div>
    );
}
