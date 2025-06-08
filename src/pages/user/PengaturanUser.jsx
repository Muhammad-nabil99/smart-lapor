import { Button, Radio, TextInput } from "flowbite-react";


export default function PengaturanUser() {
        return (
                <section className="p-4 overflow-y-auto">
                        <div className="brand flex items-center gap-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.4891 24.1863L35.9004 22.252C36.2626 20.4278 36.2626 18.5565 35.9004 16.7323L39.4891 14.798C39.9019 14.5778 40.0872 14.1218 39.9524 13.6972C39.0173 10.898 37.4252 8.36617 35.3444 6.25892C35.0243 5.93654 34.5019 5.85791 34.0976 6.07807L30.5089 8.01234C29.0009 6.80146 27.2655 5.86578 25.3869 5.25247V1.3918C25.3869 0.951481 25.0584 0.566201 24.5951 0.471846C21.5034 -0.17291 18.3358 -0.141458 15.3958 0.471846C14.9325 0.566201 14.6039 0.951481 14.6039 1.3918V5.26034C12.7337 5.8815 10.9983 6.81718 9.48199 8.0202L5.90169 6.08594C5.4889 5.86578 4.97502 5.93654 4.6549 6.26678C2.57412 8.36617 0.981938 10.898 0.0468488 13.7051C-0.0963631 14.1297 0.0973941 14.5857 0.510181 14.8059L4.0989 16.7401C3.73666 18.5643 3.73666 20.4357 4.0989 22.2599L0.510181 24.1941C0.0973941 24.4143 -0.0879389 24.8703 0.0468488 25.2949C0.981938 28.0941 2.57412 30.626 4.6549 32.7332C4.97502 33.0556 5.49732 33.1342 5.90169 32.9141L9.49041 30.9798C10.9983 32.1907 12.7337 33.1264 14.6123 33.7397V37.6082C14.6123 38.0485 14.9409 38.4338 15.4042 38.5282C18.4959 39.1729 21.6634 39.1415 24.6035 38.5282C25.0668 38.4338 25.3954 38.0485 25.3954 37.6082V33.7397C27.2655 33.1185 29.0009 32.1828 30.5173 30.9798L34.106 32.9141C34.5188 33.1342 35.0327 33.0635 35.3528 32.7332C37.4336 30.6338 39.0258 28.102 39.9608 25.2949C40.0872 24.8625 39.9019 24.4064 39.4891 24.1863ZM19.9954 25.7824C16.2803 25.7824 13.256 22.9597 13.256 19.4921C13.256 16.0246 16.2803 13.2018 19.9954 13.2018C23.7105 13.2018 26.7348 16.0246 26.7348 19.4921C26.7348 22.9597 23.7105 25.7824 19.9954 25.7824Z" fill="black"/>
                                </svg>
                                <span className="text-xl font-normal">Pengaturan</span>
                        </div>

                        <div className="container-settings mt-5">
                                <div className="grid gap-4 px-0 sm:px-12 lg:px-40 py-10 grid-cols-1">
                                        <div id="ukuran-font-user" className="border border-gray-200 p-7">
                                                <span className="font-bold text-md">Ukuran Font</span>
                                                <div className="mt-3 flex flex-col gap-1">
                                                        <div className="flex items-center gap-1">
                                                                <Radio id="kecil-u" name="options" value="1"/>
                                                                <label htmlFor="kecil-u" className="text-sm">Kecil</label>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                                <Radio id="sedang-u" name="options" value="2" />
                                                                <label htmlFor="sedang-u" className="text-base">Sedang</label>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                                <Radio id="besar-u" name="options" value="3"/>
                                                                <label htmlFor="besar-u" className="text-lg">Besar</label>
                                                        </div>
                                                </div>
                                        </div>

                                        <div id="ubah-sandi" className="border border-gray-200 p-7">
                                                <span className="font-bold text-md">Ubah Kata Sandi</span>
                                                <div className="mt-3">
                                                        <div className="mb-3">
                                                                <label htmlFor="sandi-lama-user">Sandi lama</label>
                                                                <TextInput
                                                                        id="sandi-lama-user"
                                                                        type="password"
                                                                        required
                                                                />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="sandi-baru-user">Sandi baru</label>
                                                                <TextInput
                                                                        id="sandi-baru-user"
                                                                        type="password"
                                                                        required
                                                                />
                                                        </div>
                                                        <div className="mb-5">
                                                                <label htmlFor="-konfirmasi-sandi-baru-user">Konfirmasi sandi baru</label>
                                                                <TextInput
                                                                        id="konfirmasi-sandi-baru-user"
                                                                        type="password"
                                                                        required
                                                                />
                                                        </div>
                                                        <div>
                                                                <Button color="indigo">Simpan Sandi</Button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}