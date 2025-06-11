import { laporanSaya } from "../../services/dummyAPI/laporan";
import CardLaporan from "./CardLaporan";

function LaporanAnda() {
  return (
    <div className="card rounded-md shadow-md/30 mt-3">
      {laporanSaya.map((item) => (
        <CardLaporan {...item} />
      ))}
    </div>
  );
}
export default LaporanAnda;
