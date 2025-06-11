function CardLaporan({ name, created_at, status, description, location }) {
 
  return (
    <div className="card  rounded-md shadow-md/30">
      <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div
          className={`rounded-full gap-2 ${
            status ? "bg-selesai" : "bg-pending"
          } p-2 px-3 flex items-center w-fit mt-5`}
        >
          <i
            className={`fas fa-circle  ${
              status ? "text-dot-selesai" : "text-dot-pending"
            } text-sm`}
          ></i>
          <span className="text-white capitalize text-[.7rem]">
            {status ? "selesai" : "diproses"}
          </span>
        </div>
        <p className="mt-2 text-sm">{description}</p>
        <p className="text-sm mt-5">
          <i className="fas fa-location-dot"></i> {location}
        </p>
      </div>
      <div className="card-footer flex items-center justify-between p-5 text-sm">
        <a href="#" className="hover:underline text-sky-600">
          Lihat
        </a>
        <span>
          <i>{created_at}</i>
        </span>
      </div>
    </div>
  );
}
export default CardLaporan;
