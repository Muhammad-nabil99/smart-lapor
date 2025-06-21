import { NavLink, useNavigate } from "react-router-dom";

import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";
import { showLaporanFromUser } from "../../services/instansi/laporanInstansi";
import { notifikasi } from "../../features/ModalNotifikasi";

export default function TabelLaporanInstansi() {
    const [dataAPI, setDataAPI] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const data_instansi = JSON.parse(localStorage.getItem("login-instansi"));
                const data = await showLaporanFromUser(data_instansi.token);
                setDataAPI(data);
            } catch (err) {
                notifikasi("Gagal mendapatkan data", err.response.data.message, "error");
            }
        })();
    }, []);

    const handleSearch = (e) => {
        const search_v = e.target.value;
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
                <input
                    type="search"
                    onChange={e => handleSearch(e)}
                    className="dark:text-white px-3 py-2 shadow-sm/60 border dark:shadow-gray-950 border-gray-300 rounded-md dark:placeholder:text-gray-500 dark:border-gray-700"
                    placeholder="Cari..."
                />
            </div>
            <div className="overflow-x-auto mt-5 mb-2 py-3">
                {dataAPI && (
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
                                            className="m-1"
                                            color="green"
                                            onClick={() =>
                                                navigate(`/instansi/laporan/${data.id}/detail`, {
                                                    state: {
                                                        dataDetail: { index, ...dataAPI.data },
                                                    },
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
                )}
            </div>
        </>
    );
}
