import { laporanOrangLainAPI } from "../../services/dummyAPI/laporan";
import CardLaporan from "./CardLaporan";

function DaftarLaporanOrangLain() {
  return (
    <div className="overflow-x-auto flex gap-5 mt-3  py-2 ">
      {laporanOrangLainAPI.map((item) => (
        <CardLaporan {...item} />
      ))}
    </div>
  );
}
export default DaftarLaporanOrangLain;
