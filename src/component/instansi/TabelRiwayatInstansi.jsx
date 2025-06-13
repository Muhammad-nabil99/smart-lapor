import { useNavigate } from "react-router-dom";
import { dataRiwayatAPI } from "../../services/dummyAPI/riwayat";

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";

export default function TabelRiwayatInstansi() {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-auto mt-5 mb-2 py-3">
            <Table striped>
                <TableHead>
                    <TableRow  className="divide-y">
                        <TableHeadCell>No</TableHeadCell>
                        <TableHeadCell>Nomor Laporan</TableHeadCell>
                        <TableHeadCell>Nama</TableHeadCell>
                        <TableHeadCell>Waktu Laporan</TableHeadCell>
                        <TableHeadCell>Laporan</TableHeadCell>
                        <TableHeadCell>Petugas</TableHeadCell>
                        <TableHeadCell>Aksi</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRiwayatAPI.map((data, index) => (
                        <TableRow
                            key={index}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{data.nomor_laporan}</TableCell>
                            <TableCell>{data.nama}</TableCell>
                            <TableCell>{data.waktu}</TableCell>
                            <TableCell>{data.laporan}</TableCell>
                            <TableCell>{data.petugas}</TableCell>
                            <TableCell>
                                <Button
                                    color="green"
                                    className="m-1"
                                    onClick={() =>
                                        navigate(
                                            `/instansi/riwayat/${data.id_riwayat}/detail`,
                                            {
                                                state: { dataDetail: data },
                                            }
                                        )
                                    }
                                >
                                    Detail
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
