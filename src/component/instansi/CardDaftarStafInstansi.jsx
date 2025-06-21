import errorImage from "../../assets/error.jpg"
import CardInformasiInstansi from "./CardInformasiInstansi";
import CardTambahInstansi from "./CardTambahInstansi";

export default function CardDaftarStafInstansi(props) {
        const data_props = {
                id: props.id,
                nama : props.nama_staf,
                nip : props.nip_staf,
                url : props.avatar ? props.avatar : errorImage
        }
        return (
                <div className="rounded-md shadow-md/20 shadow-gray-600 dark:shadow-gray-950">
                        {
                                props.card_tambah ? <CardTambahInstansi /> : <CardInformasiInstansi {...data_props} />
                        }
                </div>
        )
}