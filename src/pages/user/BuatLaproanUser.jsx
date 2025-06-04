import { Button, FileInput, HelperText, Label, Textarea, TextInput } from "flowbite-react";


export default function BuatLaporanUser() {
        return (
                <section id="buatLaporanUser" className="p-4">
                        
                        {/* header nya  */}
                        <div className="flex gap-2 items-center">
                                <svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 24.75H17.6V18.15H24V14.85H17.6V8.25H14.4V14.85H8V18.15H14.4V24.75ZM16 33C13.7867 33 11.7067 32.5666 9.76 31.6998C7.81333 30.833 6.12 29.6576 4.68 28.1737C3.24 26.6898 2.10027 24.9436 1.2608 22.935C0.421335 20.9264 0.00106869 18.7814 2.02531e-06 16.5C-0.00106464 14.2186 0.419202 12.0736 1.2608 10.065C2.1024 8.0564 3.24213 6.31015 4.68 4.82625C6.11787 3.34235 7.8112 2.167 9.76 1.3002C11.7088 0.4334 13.7888 0 16 0C18.2112 0 20.2912 0.4334 22.24 1.3002C24.1888 2.167 25.8821 3.34235 27.32 4.82625C28.7579 6.31015 29.8981 8.0564 30.7408 10.065C31.5834 12.0736 32.0032 14.2186 32 16.5C31.9968 18.7814 31.5765 20.9264 30.7392 22.935C29.9018 24.9436 28.7621 26.6898 27.32 28.1737C25.8779 29.6576 24.1845 30.8335 22.24 31.7014C20.2955 32.5693 18.2155 33.0022 16 33ZM16 29.7C19.5733 29.7 22.6 28.4212 25.08 25.8637C27.56 23.3062 28.8 20.185 28.8 16.5C28.8 12.815 27.56 9.69375 25.08 7.13625C22.6 4.57875 19.5733 3.3 16 3.3C12.4267 3.3 9.4 4.57875 6.92 7.13625C4.44 9.69375 3.2 12.815 3.2 16.5C3.2 20.185 4.44 23.3062 6.92 25.8637C9.4 28.4212 12.4267 29.7 16 29.7Z" fill="#1A1A1A"/>
                                </svg>
                                <span className="text-xl">Buat Laporan</span>
                        </div>

                        {/* isi nya */}
                        <div className="grid gap-0 md:gap-6 grid-cols-1 md:grid-cols-2 p-0 mt-5 md:mt-0 md:p-10 pb-0">
                                <div>

                                        {/* input judul laporan */}
                                        <div className="mb-3">
                                                <Label htmlFor="judul-laporan-user" className="font-light text-base">Judul Laporan</Label>
                                                <TextInput
                                                        id="judul-laporan-user"
                                                        type="text"
                                                        placeholder="Judul"
                                                        className="TextInput mt-1"
                                                        required
                                                />
                                        </div>

                                        {/* input lokasi */}
                                        <div className="mb-3">
                                                <Label htmlFor="lokasi-user" className="font-light text-base">Lokasi</Label>
                                                <TextInput
                                                        id="lokasi-user"
                                                        type="text"
                                                        placeholder="Contoh: Wolasi, Jl. Abc"
                                                        className="TextInput mt-1"
                                                        required
                                                />
                                        </div>
                                        
                                        {/* input deskripsi */}
                                        <div className="mb-3">
                                                <Label htmlFor="deskripsi-user" className="font-light text-base">Deskripsi</Label>
                                                <Textarea
                                                        id="deskripsi-user"
                                                        placeholder="Deskripsi"
                                                        rows={6}
                                                        className="Textarea mt-1"
                                                        required
                                                />
                                        </div>
                                </div>

                                <div>
                                        <Label
                                                htmlFor="dropzone-file"
                                                className="flex p-4 text-center h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg 
                                                        border-2 border-[#41FF6A] bg-[#F1FFF6] hover:bg-[#41ff6a96] "
                                        >
                                                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                                        <svg
                                                        className="mb-4 h-10 w-10 text-gray-500 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 16"
                                                        >
                                                        <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 
                                                                0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 
                                                                0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                        />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500">
                                                                <span className="font-semibold">Klik untuk upload</span> atau seret foto ke sini
                                                        </p>
                                                        <p className="text-xs text-gray-500 font-light">
                                                                Hanya file SVG, PNG, JPG atau GIF (MAX. 800×400px)
                                                        </p>
                                                </div>
                                                
                                                {/* Komponen FileInput ini yang menangani upload dan drag-and-drop */}
                                                <FileInput id="dropzone-file" className="hidden" />
                                        </Label>
                                </div>
                        </div>

                        {/* tombol kirim */}
                        <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:p-10 md:pt-0 pt-8 pb-5">
                                <Button className="w-full py-7" color="dark">Kirim</Button>
                        </div>
                </section>
        )
}