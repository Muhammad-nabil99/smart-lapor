import CardInformasiInstansi from "./CardInformasiInstansi";
import CardTambahInstansi from "./CardTambahInstansi";

export default function CardDaftarStafInstansi(props) {
        const data_props = {
                nama : props.nama,
                nip : props.nip,
                url : props.url
        }
        return (
                <div className="rounded-md shadow-md/20 shadow-gray-600 dark:shadow-gray-950">
                        {
                                props.card_tambah ? <CardTambahInstansi /> : <CardInformasiInstansi {...data_props} />
                        }
                </div>
        )
}