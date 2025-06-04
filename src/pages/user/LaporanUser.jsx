import { Button } from "flowbite-react";
import gambarKebakaran from "../../assets/kebakaran.png";
import gambarKecelakaan from "../../assets/kecelakaan.png";
import gambarIkonReport from "../../assets/report-icon.png";

export default function Laporan() {
        return (
                <section className="p-4">
                        <div className="brand flex items-center gap-2">
                                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 7.5V15L20 17.5M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="text-2xl font-bold">Laporan</span>
                        </div>

                        <div className="conainer-card grid grid-cols-2 gap-5 mt-10">
                                <div className="card p-4 shadow-md/30 rounded-md">
                                        <div className="card-header">
                                                <div className="flex gap-1 items-center">
                                                        <svg className="w-12 h-12" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="21" cy="21" r="20.5" fill="#E6E6E6" stroke="#D9D9D9"/>
                                                                <path d="M21 21C19.625 21 18.4479 20.5104 17.4687 19.5312C16.4896 18.5521 16 17.375 16 16C16 14.625 16.4896 13.4479 17.4687 12.4688C18.4479 11.4896 19.625 11 21 11C22.375 11 23.5521 11.4896 24.5312 12.4688C25.5104 13.4479 26 14.625 26 16C26 17.375 25.5104 18.5521 24.5312 19.5312C23.5521 20.5104 22.375 21 21 21ZM11 31V27.5C11 26.7917 11.1825 26.1408 11.5475 25.5475C11.9125 24.9542 12.3967 24.5008 13 24.1875C14.2917 23.5417 15.6042 23.0575 16.9375 22.735C18.2708 22.4125 19.625 22.2508 21 22.25C22.375 22.2492 23.7292 22.4108 25.0625 22.735C26.3958 23.0592 27.7083 23.5433 29 24.1875C29.6042 24.5 30.0887 24.9533 30.4537 25.5475C30.8187 26.1417 31.0008 26.7925 31 27.5V31H11Z" fill="#1A1A1A"/>
                                                        </svg>
                                                        <div className="my-2">
                                                                <p className="font-bold text-md">Tolen</p>
                                                                <p className="font-bold text-[.6rem]">Dibuat <span className="text-[.5rem] font-normal">20/03/2025</span></p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="card-body mt-3">
                                                <div className="flex gap-3">
                                                        <div className="w-full">
                                                                <img src={gambarKebakaran} className="w-full h-full" alt="gambar kebakaran" />
                                                                <div className="flex items-center gap-4 mt-1 text-[.5rem]">
                                                                        <p>
                                                                                <span className="italic">
                                                                                        <font color="red">Deadline</font> : 29/02/2025
                                                                                </span>
                                                                        </p>
                                                                        <p className="flex items-center gap-1">
                                                                                <svg className="w-3 h-3" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M8 5.33333C8 4.59722 7.73958 3.96875 7.21875 3.44792C6.69792 2.92708 6.06944 2.66667 5.33333 2.66667C4.59722 2.66667 3.96875 2.92708 3.44792 3.44792C2.92708 3.96875 2.66667 4.59722 2.66667 5.33333C2.66667 6.06944 2.92708 6.69792 3.44792 7.21875C3.96875 7.73958 4.59722 8 5.33333 8C6.06944 8 6.69792 7.73958 7.21875 7.21875C7.73958 6.69792 8 6.06944 8 5.33333ZM10.6667 5.33333C10.6667 6.09028 10.5521 6.71181 10.3229 7.19792L6.53125 15.2604C6.42014 15.4896 6.25521 15.6701 6.03646 15.8021C5.81771 15.934 5.58333 16 5.33333 16C5.08333 16 4.84896 15.934 4.63021 15.8021C4.41146 15.6701 4.25 15.4896 4.14583 15.2604L0.34375 7.19792C0.114583 6.71181 0 6.09028 0 5.33333C0 3.86111 0.520833 2.60417 1.5625 1.5625C2.60417 0.520833 3.86111 0 5.33333 0C6.80556 0 8.0625 0.520833 9.10417 1.5625C10.1458 2.60417 10.6667 3.86111 10.6667 5.33333Z" fill="#1A1A1A"/>
                                                                                </svg>
                                                                                <span className="italic">Wolasi Jl. Abc</span>
                                                                        </p>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <span className="text-2xl font-extrabold">Kebakaran</span>
                                                                <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                                                                <div className="font-bold text-white p-1 px-3 rounded-full text-[.7rem] bg-pending/50 w-fit flex items-center gap-1 my-2">
                                                                        <svg className="w-2" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="5" cy="5" r="5" className="fill-dot-pending"/>
                                                                        </svg>
                                                                        Pending
                                                                </div>
                                                                <p className="text-[.6rem] italic">Ditangani oleh <b>Damkar</b></p>
                                                        </div>
                                                        
                                                </div>
                                        </div>
                                        <div className="card-footer mt-3">
                                                <div className="flex gap-2 items-center justify-end font-bold">
                                                        <button className="text-[.6rem] py-[8px] shadow-md/30 bg-[#4175D7] text-white rounded-xl px-3 flex items-center gap-1 boder border-[#2B60C1] outline-none">
                                                                <svg className="w-2 h-2" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path className="fill-white" d="M5.5 0.0313187L10.25 4.06299L9.14167 5.00371L6.29167 2.58471V8.7666H4.70833V2.58471L1.85833 5.00371L0.75 4.06299L5.5 0.0313187Z"/>
                                                                </svg>     
                                                                Bantu
                                                        </button>
                                                        <button className="text-[.6rem] py-[8px] shadow-md/30 bg-[#FFC8C8] text-red-600 rounded-xl px-3 flex items-center gap-1 boder border-[#FF0000] outline-none">
                                                                Report
                                                                <img src={gambarIkonReport} alt="icon report" className="w-3 h-3"/>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}