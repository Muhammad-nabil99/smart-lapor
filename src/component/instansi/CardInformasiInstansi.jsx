export default function CardInformasiInstansi(props) {
    return (
        <div className="rounded-md bg-[#ACFFC5] dark:bg-emerald-800 dark:text-gray-300">
            <div className="card-image-daftar-instansi relative">

                <img
                    src={props.url}
                    alt="gambar profil instansi"
                    loading="lazy"
                    className="w-full h-50 sm:h-60 object-cover rounded-tl-md rounded-tr-md"
                />
                
                {/* box trash dan edit nya */}
                <div className="inset-0 absolute z-20 p-3">
                    <div className="flex items-center justify-between mt-2">
                        <button className="hover:scale-110">
                            <svg className="w-7 h-7" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#FF5858"/>
                                <path d="M12 27C11.45 27 10.9793 26.8043 10.588 26.413C10.1967 26.0217 10.0007 25.5507 10 25V12H9V10H14V9H20V10H25V12H24V25C24 25.55 23.8043 26.021 23.413 26.413C23.0217 26.805 22.5507 27.0007 22 27H12ZM22 12H12V25H22V12ZM14 23H16V14H14V23ZM18 23H20V14H18V23Z" fill="white"/>
                            </svg>  

                        </button>
                        <button className="hover:scale-110">
                            <svg className="w-7 h-7" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#4175D7"/>
                                <path d="M10 25H11.425L21.2 15.225L19.775 13.8L10 23.575V25ZM8 27V22.75L21.2 9.575C21.4 9.39167 21.621 9.25 21.863 9.15C22.105 9.05 22.359 9 22.625 9C22.891 9 23.1493 9.05 23.4 9.15C23.6507 9.25 23.8673 9.4 24.05 9.6L25.425 11C25.625 11.1833 25.771 11.4 25.863 11.65C25.955 11.9 26.0007 12.15 26 12.4C26 12.6667 25.9543 12.921 25.863 13.163C25.7717 13.405 25.6257 13.6257 25.425 13.825L12.25 27H8ZM20.475 14.525L19.775 13.8L21.2 15.225L20.475 14.525Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            <div className="card-body-daftar-instansi mt-4">
                <div className="text-center py-5 font-semibold text-xs sm:text-sm">
                    <p className="underline underline-offset-2">{props.nama}</p>
                    <p className="uppercase">nip: {props.nip}</p>
                </div>
            </div>
        </div>
    );
}
