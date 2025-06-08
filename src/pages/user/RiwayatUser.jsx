import { Dropdown, DropdownItem, Label, TextInput } from "flowbite-react";

import gambarKecelakaan from "../../assets/kecelakaan.png";
import gambarKebakaran from "../../assets/kebakaran.png";

export default function RiwayatUser() {
        return (
                <section className="p-4">
                        <div className="brand flex items-center gap-2">
                                <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 7.5V15L20 17.5M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-xl font-normal">Riwayat</span>
                        </div>
                        <hr className="border-2 border-gray-100 my-5"/>

                        <div className="flex flex-col sm:flex-row mb-3 items-start sm:items-center gap-0 sm:gap-4 ">
                                <Dropdown label="Urutkan" className="my-3 sm:w-auto relative bg-white text-dark border border-gray-200 hover:bg-white" dismissOnClick={false}>
                                        <DropdownItem>test</DropdownItem>
                                        <DropdownItem>test</DropdownItem>
                                        <DropdownItem>test</DropdownItem>
                                </Dropdown>

                                <TextInput
                                        type="search"
                                        placeholder="Cari..."
                                />
                        </div>

                        {/* kumpulan card laporan */}
                        <div className="conainer-card grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* list card */}
                                <div className="card p-4 shadow-md/30 rounded-md">
                                        <div className="card-header">
                                                <span className="text-2xl font-extrabold">Kecelakaan</span>
                                        </div>
                                        <div className="card-body mt-3">
                                                <div className="flex lg:flex-row flex-col gap-3">
                                                        <div className="w-full">
                                                                <img src={gambarKecelakaan} className="w-full h-48 rounded lg:h-full object-cover" alt="gambar kecelakaan" />
                                                        </div>
                                                        <div>
                                                                <p className="text-base line-clamp-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                                                                <p className="text-xs italic mt-1">Deadline : 1 Mei - 5 Mei 2025</p>
                                                                <div className="p-1 px-3 rounded-full text-[.7rem] bg-selesai w-fit flex items-center gap-1 mt-2">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="5" cy="5" r="5" fill="#51FF94"/>
                                                                        </svg>
                                                                        Selesai
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="card-footer mt-3 text-sm">
                                                <div className="flex items-center gap-4">
                                                        <p className="flex items-center gap-1">
                                                                <svg className="w-4 h-4" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 5.33333C8 4.59722 7.73958 3.96875 7.21875 3.44792C6.69792 2.92708 6.06944 2.66667 5.33333 2.66667C4.59722 2.66667 3.96875 2.92708 3.44792 3.44792C2.92708 3.96875 2.66667 4.59722 2.66667 5.33333C2.66667 6.06944 2.92708 6.69792 3.44792 7.21875C3.96875 7.73958 4.59722 8 5.33333 8C6.06944 8 6.69792 7.73958 7.21875 7.21875C7.73958 6.69792 8 6.06944 8 5.33333ZM10.6667 5.33333C10.6667 6.09028 10.5521 6.71181 10.3229 7.19792L6.53125 15.2604C6.42014 15.4896 6.25521 15.6701 6.03646 15.8021C5.81771 15.934 5.58333 16 5.33333 16C5.08333 16 4.84896 15.934 4.63021 15.8021C4.41146 15.6701 4.25 15.4896 4.14583 15.2604L0.34375 7.19792C0.114583 6.71181 0 6.09028 0 5.33333C0 3.86111 0.520833 2.60417 1.5625 1.5625C2.60417 0.520833 3.86111 0 5.33333 0C6.80556 0 8.0625 0.520833 9.10417 1.5625C10.1458 2.60417 10.6667 3.86111 10.6667 5.33333Z" fill="#1A1A1A"/>
                                                                </svg>
                                                                <span className="italic">Wolasi Jl. Abc</span>
                                                        </p>
                                                        <p>
                                                                <span>29/02/2025</span>
                                                        </p>
                                                </div>
                                        </div>
                                </div>

                                {/* card dibawah ini dan seterusnya abaikan saja.. yang diambil hanya 1 card di atas untuk dilooping */}
                                <div className="card p-4 shadow-md/30 rounded-md">
                                        <div className="card-header">
                                                <span className="text-2xl font-extrabold">Kebakaran</span>
                                        </div>
                                        <div className="card-body mt-3">
                                                <div className="flex flex-col lg:flex-row gap-3">
                                                        <div className="w-full">
                                                                <img src={gambarKebakaran} className="w-full h-48 rounded lg:h-full object-cover" alt="gambar kecelakaan" />
                                                        </div>
                                                        <div>
                                                                <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                                                                <p className="text-xs italic mt-1">Deadline : 1 Mei - 5 Mei 2025</p>
                                                                <div className="p-1 px-3 rounded-full text-[.7rem] bg-selesai w-fit flex items-center gap-1 mt-2">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="5" cy="5" r="5" fill="#51FF94"/>
                                                                        </svg>
                                                                        Selesai
                                                                </div>
                                                        </div>
                                                        
                                                </div>
                                        </div>
                                        <div className="card-footer mt-3 text-sm">
                                                <div className="flex items-center gap-4">
                                                        <p className="flex items-center gap-1">
                                                                <svg className="w-4 h-4" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 5.33333C8 4.59722 7.73958 3.96875 7.21875 3.44792C6.69792 2.92708 6.06944 2.66667 5.33333 2.66667C4.59722 2.66667 3.96875 2.92708 3.44792 3.44792C2.92708 3.96875 2.66667 4.59722 2.66667 5.33333C2.66667 6.06944 2.92708 6.69792 3.44792 7.21875C3.96875 7.73958 4.59722 8 5.33333 8C6.06944 8 6.69792 7.73958 7.21875 7.21875C7.73958 6.69792 8 6.06944 8 5.33333ZM10.6667 5.33333C10.6667 6.09028 10.5521 6.71181 10.3229 7.19792L6.53125 15.2604C6.42014 15.4896 6.25521 15.6701 6.03646 15.8021C5.81771 15.934 5.58333 16 5.33333 16C5.08333 16 4.84896 15.934 4.63021 15.8021C4.41146 15.6701 4.25 15.4896 4.14583 15.2604L0.34375 7.19792C0.114583 6.71181 0 6.09028 0 5.33333C0 3.86111 0.520833 2.60417 1.5625 1.5625C2.60417 0.520833 3.86111 0 5.33333 0C6.80556 0 8.0625 0.520833 9.10417 1.5625C10.1458 2.60417 10.6667 3.86111 10.6667 5.33333Z" fill="#1A1A1A"/>
                                                                </svg>
                                                                <span className="italic">Wolasi Jl. Abc</span>
                                                        </p>
                                                        <p>
                                                                <span>29/02/2025</span>
                                                        </p>
                                                </div>
                                        </div>
                                </div>

                                <div className="card p-4 rounded-md shadow-md/30">
                                        <div className="card-header">
                                                <span className="text-2xl font-extrabold">Kecelakaan</span>
                                        </div>
                                        <div className="card-body mt-3">
                                                <div className="flex flex-col lg:flex-row gap-3">
                                                        <div className="w-full">
                                                                <img src={gambarKecelakaan} className="w-full h-48 rounded lg:h-full object-cover" alt="gambar kecelakaan" />
                                                        </div>
                                                        <div>
                                                                <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                                                                <p className="text-xs italic mt-1">Deadline : 1 Mei - 5 Mei 2025</p>
                                                                <div className="p-1 px-3 rounded-full text-[.7rem] bg-selesai w-fit flex items-center gap-1 mt-2">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="5" cy="5" r="5" fill="#51FF94"/>
                                                                        </svg>
                                                                        Selesai
                                                                </div>
                                                        </div>
                                                        
                                                </div>
                                        </div>
                                        <div className="card-footer mt-3 text-sm">
                                                <div className="flex items-center gap-4">
                                                        <p className="flex items-center gap-1">
                                                                <svg className="w-4 h-4" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 5.33333C8 4.59722 7.73958 3.96875 7.21875 3.44792C6.69792 2.92708 6.06944 2.66667 5.33333 2.66667C4.59722 2.66667 3.96875 2.92708 3.44792 3.44792C2.92708 3.96875 2.66667 4.59722 2.66667 5.33333C2.66667 6.06944 2.92708 6.69792 3.44792 7.21875C3.96875 7.73958 4.59722 8 5.33333 8C6.06944 8 6.69792 7.73958 7.21875 7.21875C7.73958 6.69792 8 6.06944 8 5.33333ZM10.6667 5.33333C10.6667 6.09028 10.5521 6.71181 10.3229 7.19792L6.53125 15.2604C6.42014 15.4896 6.25521 15.6701 6.03646 15.8021C5.81771 15.934 5.58333 16 5.33333 16C5.08333 16 4.84896 15.934 4.63021 15.8021C4.41146 15.6701 4.25 15.4896 4.14583 15.2604L0.34375 7.19792C0.114583 6.71181 0 6.09028 0 5.33333C0 3.86111 0.520833 2.60417 1.5625 1.5625C2.60417 0.520833 3.86111 0 5.33333 0C6.80556 0 8.0625 0.520833 9.10417 1.5625C10.1458 2.60417 10.6667 3.86111 10.6667 5.33333Z" fill="#1A1A1A"/>
                                                                </svg>
                                                                <span className="italic">Wolasi Jl. Abc</span>
                                                        </p>
                                                        <p>
                                                                <span>29/02/2025</span>
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </section>
        )
}