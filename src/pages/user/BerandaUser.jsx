import imageCard from "../../assets/contoh.png"

export default function BerandaUser() {
        return (
                <section id="DashboardUser" className="p-2 sm:p-4">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        
                                <div className="card rounded-md shadow-sm/10 bg-[#FBFBFB]">
                                        <div className="card-header h-[220px] sm:h-[200px]">
                                                <img src={imageCard} alt="AI - kecerdasan buatan" className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="card-body p-4">
                                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Smart Lapor
                                                </h5>
                                                <p className="mt-3 font-normal text-lg  dark:text-gray-400">
                                                        Selamat datanga john dor
                                                </p>
                                        </div>
                                </div>

                                <div id="laporan-user">
                                        <span className="font-extrabold text-xl text-gray-700">Laporan Kamu</span>
                                        <div className="card rounded-md shadow-md/30 mt-3">
                                                <div className="card-body p-4">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm line-clamp-4">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        
                        <div id="laporan-user-lain" className="mt-10">
                                <span className="font-semibold text-base text-gray-600">Lihat Laporan Orang Lain</span>
                                <div  className="overflow-x-auto flex gap-5 mt-3 w-[83vw] sm:w-[88vw] md:w-[92vw] lg:w-[94vw] py-2 ">
                                        <div className="card rounded-md shadow-md/30 ">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="card rounded-md shadow-md/30">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="card rounded-md shadow-md/30">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="card rounded-md shadow-md/30">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="card rounded-md shadow-md/30">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="card rounded-md shadow-md/30">
                                                <div className="card-body p-4 w-[250px] sm:w-[400px] md:w-[500px] lg-[600px]">
                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                Pungli Jalanan
                                                        </h5>
                                                        <div className="rounded-full gap-2 bg-pending p-2 px-3 flex items-center w-fit mt-5">
                                                                <i className="fas fa-circle text-dot-pending text-sm"></i>
                                                                <span className="text-white text-[.7rem]">Pending</span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit nihil delectus enim soluta a animi vel rerum, praesentium voluptate!
                                                        </p>
                                                        <p className="text-sm mt-5">
                                                                <i className="fas fa-location-dot"></i> Jl. Wolasi abc
                                                        </p>
                                                </div>
                                                <div className="card-footer flex items-center justify-between p-5 text-sm">
                                                        <a href="#" className="hover:underline text-sky-600">Lihat ></a>
                                                        <span>
                                                                <i>29/02/2025</i>
                                                        </span>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </section>
        )
}