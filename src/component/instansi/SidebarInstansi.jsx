"use client";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarIntansi({ darkThemeInstansi }) {
        const [isOpen, setIsOpen] = useState(false);
        const handleOpenSidebarUser = () => {
                setIsOpen(!isOpen);
        };
        return (
                <Sidebar
                        id="sidebar-instansi"
                        aria-label="Default sidebar example"
                        className={`h-[100vh] ${
                                isOpen ? "w-50" : "w-18"
                        } border border-gray-100 dark:border-gray-700 sticky top-0 transition-all duration-100`}
                >
                        <SidebarItems>
                                <SidebarItemGroup>
                                        <div className="flex items-center justify-start">
                                                <button
                                                        className="border-none focus:shadow-none outline-none bg-none px-1.5"
                                                        onClick={() =>
                                                                handleOpenSidebarUser()
                                                        }
                                                >
                                                        <svg
                                                                className="w-6 h-6"
                                                                viewBox="0 0 41 41"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                                <path
                                                                        d="M8.54167 35.875C7.60208 35.875 6.79803 35.5407 6.1295 34.8722C5.46097 34.2037 5.12614 33.3991 5.125 32.4583V8.54167C5.125 7.60208 5.45983 6.79803 6.1295 6.1295C6.79917 5.46097 7.60322 5.12614 8.54167 5.125H32.4583C33.3979 5.125 34.2025 5.45983 34.8722 6.1295C35.5419 6.79917 35.8761 7.60322 35.875 8.54167V32.4583C35.875 33.3979 35.5407 34.2025 34.8722 34.8722C34.2037 35.5419 33.3991 35.8761 32.4583 35.875H8.54167ZM20.5 32.4583H32.4583V8.54167H20.5V32.4583Z"
                                                                        fill={`${
                                                                                darkThemeInstansi
                                                                                        ? "white"
                                                                                        : "black"
                                                                        }`}
                                                                />
                                                        </svg>
                                                </button>
                                        </div>

                                        <div className="mt-20 flex flex-col gap-5 items-center">
                                                <div className="flex items-center gap-2">
                                                        <NavLink
                                                                to="/instansi/beranda"
                                                                className={({
                                                                        isActive,
                                                                }) =>
                                                                        isActive
                                                                                ? "group rounded-2xl text-white bg-[#64C983] px-1 py-3 border border-gray-400 flex w-10 h-10 items-center justify-center gap-2"
                                                                                : "group rounded-2xl text-black bg-[#CEFFDC] px-1 py-3 border border-gray-400 flex items-center w-10 h-10 justify-center hover:bg-[#64C983] hover:text-white gap-2"
                                                                }
                                                        >
                                                                <svg
                                                                        className="w-4 h-4"
                                                                        viewBox="0 0 40 39"
                                                                        fill="currentColor"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path
                                                                                d="M20.0989 5.91793L5.12458 17.8974V34.6666H15.8205V26.1098H24.3773V34.6666H35.0733V18.9264C35.0734 18.6056 35.0014 18.2888 34.8625 17.9996C34.7237 17.7104 34.5215 17.4562 34.2711 17.2557L20.0989 5.91793ZM20.0989 0.439453L36.943 13.9164C37.6941 14.5172 38.3005 15.2792 38.7175 16.1461C39.1344 17.0129 39.3511 17.9623 39.3517 18.9242V34.6666C39.3517 35.8013 38.9009 36.8895 38.0986 37.6918C37.2962 38.4942 36.208 38.9449 35.0733 38.9449H5.12458C3.98988 38.9449 2.90166 38.4942 2.0993 37.6918C1.29695 36.8895 0.846191 35.8013 0.846191 34.6666V17.8974C0.846271 17.2562 0.990499 16.6231 1.26821 16.0451C1.54592 15.4671 1.95 14.9589 2.45059 14.5581L20.0989 0.439453Z"
                                                                        />
                                                                </svg>
                                                        </NavLink>
                                                        <button
                                                                className={`line-clamp-1 flex justify-start dark:text-white ${
                                                                        isOpen
                                                                                ? "w-25"
                                                                                : "w-0"
                                                                }`}
                                                        >
                                                                Beranda
                                                        </button>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                        <NavLink
                                                                to="/instansi/tambah-staf"
                                                                className={({
                                                                        isActive,
                                                                }) =>
                                                                        isActive
                                                                                ? "group rounded-2xl w-10 h-10 text-white bg-[#64C983] px-1 py-3 border border-gray-400 flex items-center justify-center gap-2"
                                                                                : "group rounded-2xl w-10 h-10 hover:text-white text-black  bg-[#CEFFDC] px-1 py-3 border border-gray-400 flex items-center justify-center hover:bg-[#64C983] gap-2 "
                                                                }
                                                        >
                                                                <svg
                                                                        className="w-6 h-6"
                                                                        viewBox="0 0 40 40"
                                                                        fill="currentColor"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path
                                                                                d="M25 6.66675C23.2318 6.66675 21.5362 7.36913 20.2859 8.61937C19.0357 9.86961 18.3333 11.5653 18.3333 13.3334C18.3333 15.1015 19.0357 16.7972 20.2859 18.0475C21.5362 19.2977 23.2318 20.0001 25 20.0001C26.7681 20.0001 28.4638 19.2977 29.714 18.0475C30.9642 16.7972 31.6666 15.1015 31.6666 13.3334C31.6666 11.5653 30.9642 9.86961 29.714 8.61937C28.4638 7.36913 26.7681 6.66675 25 6.66675ZM25 9.83341C25.4596 9.83341 25.9147 9.92394 26.3394 10.0998C26.764 10.2757 27.1498 10.5335 27.4748 10.8585C27.7998 11.1835 28.0576 11.5694 28.2335 11.994C28.4094 12.4187 28.5 12.8738 28.5 13.3334C28.5 13.793 28.4094 14.2482 28.2335 14.6728C28.0576 15.0974 27.7998 15.4833 27.4748 15.8083C27.1498 16.1333 26.764 16.3911 26.3394 16.567C25.9147 16.7429 25.4596 16.8334 25 16.8334C24.5403 16.8334 24.0852 16.7429 23.6606 16.567C23.2359 16.3911 22.8501 16.1333 22.5251 15.8083C22.2001 15.4833 21.9423 15.0974 21.7664 14.6728C21.5905 14.2482 21.5 13.793 21.5 13.3334C21.5 12.4052 21.8687 11.5149 22.5251 10.8585C23.1815 10.2022 24.0717 9.83341 25 9.83341ZM6.66663 11.6667V16.6667H1.66663V20.0001H6.66663V25.0001H9.99996V20.0001H15V16.6667H9.99996V11.6667H6.66663ZM25 21.6667C20.55 21.6667 11.6666 23.8834 11.6666 28.3334V33.3334H38.3333V28.3334C38.3333 23.8834 29.45 21.6667 25 21.6667ZM25 24.8334C29.95 24.8334 35.1666 27.2667 35.1666 28.3334V30.1667H14.8333V28.3334C14.8333 27.2667 20 24.8334 25 24.8334Z"
                                                                        />
                                                                </svg>
                                                        </NavLink>
                                                        <button
                                                                className={`line-clamp-1 text-start flex justify-start dark:text-white ${
                                                                        isOpen
                                                                                ? "w-25"
                                                                                : "w-0"
                                                                }`}
                                                        >
                                                                Tambah <br />{" "}
                                                                Staf
                                                        </button>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                        <NavLink
                                                                to="/instansi/laporan"
                                                                className={({
                                                                        isActive,
                                                                }) =>
                                                                        isActive
                                                                                ? "group rounded-2xl w-10 h-10 text-white bg-[#64C983] px-1 py-3 border border-gray-400 flex items-center justify-center gap-2"
                                                                                : "group rounded-2xl w-10 h-10 hover:text-white text-black  bg-[#CEFFDC] px-1 py-3 border border-gray-400 flex items-center justify-center hover:bg-[#64C983] gap-2 "
                                                                }
                                                        >
                                                                <svg
                                                                        className="w-6 h-6"
                                                                        viewBox="0 0 50 50"
                                                                        fill="currentColor"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path
                                                                                d="M15.625 28.125H28.125V31.25H15.625V28.125ZM15.625 20.3125H34.375V23.4375H15.625V20.3125ZM15.625 35.9375H23.4375V39.0625H15.625V35.9375Z"
                                                                        />
                                                                        <path
                                                                                d="M39.0625 7.8125H34.375V6.25C34.375 5.4212 34.0458 4.62634 33.4597 4.04029C32.8737 3.45424 32.0788 3.125 31.25 3.125H18.75C17.9212 3.125 17.1263 3.45424 16.5403 4.04029C15.9542 4.62634 15.625 5.4212 15.625 6.25V7.8125H10.9375C10.1087 7.8125 9.31384 8.14174 8.72779 8.72779C8.14174 9.31384 7.8125 10.1087 7.8125 10.9375V43.75C7.8125 44.5788 8.14174 45.3737 8.72779 45.9597C9.31384 46.5458 10.1087 46.875 10.9375 46.875H39.0625C39.8913 46.875 40.6862 46.5458 41.2722 45.9597C41.8583 45.3737 42.1875 44.5788 42.1875 43.75V10.9375C42.1875 10.1087 41.8583 9.31384 41.2722 8.72779C40.6862 8.14174 39.8913 7.8125 39.0625 7.8125ZM18.75 6.25H31.25V12.5H18.75V6.25ZM39.0625 43.75H10.9375V10.9375H15.625V15.625H34.375V10.9375H39.0625V43.75Z"
                                                                        />
                                                                </svg>
                                                        </NavLink>
                                                        <button
                                                                className={`line-clamp-1 flex justify-start dark:text-white ${
                                                                        isOpen
                                                                                ? "w-25"
                                                                                : "w-0"
                                                                }`}
                                                        >
                                                                Laporan
                                                        </button>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                        <NavLink
                                                                to="/instansi/riwayat"
                                                                className={({
                                                                        isActive,
                                                                }) =>
                                                                        isActive
                                                                                ? "group rounded-2xl w-10 h-10 text-white bg-[#64C983] px-1 py-3 border border-gray-400 flex items-center justify-center gap-2"
                                                                                : "group rounded-2xl w-10 h-10 hover:text-white text-black  bg-[#CEFFDC] px-1 py-3 border border-gray-400 flex items-center justify-center hover:bg-[#64C983] gap-2 "
                                                                }
                                                        >
                                                                <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 31 32"
                                                                        fill="currentColor"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path d="M15.4995 28.9915C12.1627 28.9915 9.26725 27.8829 6.81309 25.6655C4.35892 23.4481 2.97038 20.6818 2.64746 17.3665H5.26309C5.586 19.9714 6.72181 22.1298 8.6705 23.8417C10.6192 25.5536 12.8955 26.4091 15.4995 26.4082C18.3843 26.4082 20.8277 25.4072 22.8298 23.4051C24.8318 21.403 25.8329 18.9596 25.8329 16.0749C25.8329 13.1901 24.8318 10.7467 22.8298 8.74466C20.8277 6.74258 18.3843 5.74154 15.4995 5.74154C13.6482 5.74154 11.9311 6.19879 10.3484 7.11329C8.76566 8.02779 7.51188 9.29276 6.58704 10.9082H10.3329V13.4915H2.84121C3.46552 10.4776 4.9617 8.00195 7.32975 6.06445C9.69781 4.12695 12.4211 3.1582 15.4995 3.1582C17.2863 3.1582 18.9655 3.49748 20.537 4.17604C22.1086 4.85459 23.4756 5.77469 24.6381 6.93633C25.8006 8.09797 26.7211 9.46498 27.3997 11.0374C28.0782 12.6098 28.4171 14.2889 28.4162 16.0749C28.4154 17.8608 28.0761 19.54 27.3984 21.1124C26.7207 22.6848 25.8006 24.0518 24.6381 25.2134C23.4756 26.3751 22.1086 27.2956 20.537 27.975C18.9655 28.6544 17.2863 28.9933 15.4995 28.9915ZM19.1162 21.4999L14.2079 16.5915V9.61654H16.7912V15.5582L20.9245 19.6915L19.1162 21.4999Z" />
                                                                </svg>
                                                        </NavLink>
                                                        <button
                                                                className={`line-clamp-1 flex justify-start dark:text-white ${
                                                                        isOpen
                                                                                ? "w-25"
                                                                                : "w-0"
                                                                }`}
                                                        >
                                                                Riwayat
                                                        </button>
                                                </div>
                                        </div>
                                </SidebarItemGroup>
                        </SidebarItems>
                </Sidebar>
        );
}
