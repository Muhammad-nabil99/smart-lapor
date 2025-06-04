import { Button, Dropdown, DropdownItem, Label, TextInput } from "flowbite-react";
import gambarProfilKosong from "../../assets/profile-kosong.png";
import { useNavigate } from "react-router-dom";

export default function EditProfil() {

        const navigate  = useNavigate();

        return (
                <section className="p-4">
                        <div className="brand flex items-center gap-2">
                                <svg className="w-9 h-9" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.3333 21.3333C18.4 21.3333 15.8889 20.2889 13.8 18.2C11.7111 16.1111 10.6667 13.6 10.6667 10.6667C10.6667 7.73333 11.7111 5.22222 13.8 3.13333C15.8889 1.04444 18.4 0 21.3333 0C24.2667 0 26.7778 1.04444 28.8667 3.13333C30.9556 5.22222 32 7.73333 32 10.6667C32 13.6 30.9556 16.1111 28.8667 18.2C26.7778 20.2889 24.2667 21.3333 21.3333 21.3333ZM0 42.6667V35.2C0 33.6889 0.389334 32.3004 1.168 31.0347C1.94667 29.7689 2.97956 28.8018 4.26667 28.1333C7.02222 26.7556 9.82222 25.7227 12.6667 25.0347C15.5111 24.3467 18.4 24.0018 21.3333 24C24.2667 23.9982 27.1556 24.3431 30 25.0347C32.8444 25.7262 35.6444 26.7591 38.4 28.1333C39.6889 28.8 40.7227 29.7671 41.5013 31.0347C42.28 32.3022 42.6684 33.6907 42.6667 35.2V42.6667H0ZM5.33333 37.3333H37.3333V35.2C37.3333 34.7111 37.2116 34.2667 36.968 33.8667C36.7244 33.4667 36.4018 33.1556 36 32.9333C33.6 31.7333 31.1778 30.8338 28.7333 30.2347C26.2889 29.6356 23.8222 29.3351 21.3333 29.3333C18.8444 29.3316 16.3778 29.632 13.9333 30.2347C11.4889 30.8373 9.06667 31.7369 6.66667 32.9333C6.26667 33.1556 5.944 33.4667 5.69867 33.8667C5.45333 34.2667 5.33156 34.7111 5.33333 35.2V37.3333ZM21.3333 16C22.8 16 24.056 15.4782 25.1013 14.4347C26.1467 13.3911 26.6684 12.1351 26.6667 10.6667C26.6649 9.19822 26.1431 7.94311 25.1013 6.90133C24.0596 5.85956 22.8036 5.33689 21.3333 5.33333C19.8631 5.32978 18.608 5.85244 17.568 6.90133C16.528 7.95022 16.0053 9.20533 16 10.6667C15.9947 12.128 16.5173 13.384 17.568 14.4347C18.6187 15.4853 19.8738 16.0071 21.3333 16Z" fill="black"/>
                                </svg>
                                <span className="text-xl font-bold">Profil</span>
                        </div>

                        <div className="flex flex-col items-center gap-7">
                                <div className="w-20 h-20 relative">
                                        <img src={gambarProfilKosong} alt="gambar profil bawaan" />
                                        <Button color="transparent" className="absolute bg-[#787878]/40 p-3 -bottom-2 -right-4 border-0">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.5 7.9166C10.2851 7.9166 10.9563 8.19533 11.5138 8.7528C12.0713 9.31026 12.35 9.98153 12.35 10.7666C12.35 11.5517 12.0713 12.2229 11.5138 12.7804C10.9563 13.3379 10.2851 13.6166 9.5 13.6166C8.71493 13.6166 8.04366 13.3379 7.4862 12.7804C6.92873 12.2229 6.65 11.5517 6.65 10.7666C6.65 9.98153 6.92873 9.31026 7.4862 8.7528C8.04366 8.19533 8.71493 7.9166 9.5 7.9166ZM16.4667 3.79993C17.166 3.79993 17.763 4.04733 18.2578 4.54212C18.7526 5.03691 19 5.63396 19 6.33327V15.1999C19 15.8992 18.7526 16.4963 18.2578 16.9911C17.763 17.4859 17.166 17.7333 16.4667 17.7333H2.53333C1.83403 17.7333 1.23698 17.4859 0.742188 16.9911C0.247396 16.4963 0 15.8992 0 15.1999V6.33327C0 5.63396 0.247396 5.03691 0.742188 4.54212C1.23698 4.04733 1.83403 3.79993 2.53333 3.79993H4.75L5.25469 2.4541C5.38003 2.13084 5.60929 1.85211 5.94245 1.6179C6.27561 1.3837 6.61701 1.2666 6.96667 1.2666H12.0333C12.383 1.2666 12.7244 1.3837 13.0576 1.6179C13.3907 1.85211 13.62 2.13084 13.7453 2.4541L14.25 3.79993H16.4667ZM9.5 15.1999C10.7205 15.1999 11.7645 14.7662 12.632 13.8986C13.4996 13.0311 13.9333 11.9871 13.9333 10.7666C13.9333 9.54611 13.4996 8.5021 12.632 7.63457C11.7645 6.76704 10.7205 6.33327 9.5 6.33327C8.27951 6.33327 7.2355 6.76704 6.36797 7.63457C5.50043 8.5021 5.06667 9.54611 5.06667 10.7666C5.06667 11.9871 5.50043 13.0311 6.36797 13.8986C7.2355 14.7662 8.27951 15.1999 9.5 15.1999Z" fill="#1A1A1A"/>
                                                </svg>
                                        </Button>
                                </div>

                                <p className="font-bold">JOHN DOE</p>

                                <div className="grid gap-3 grid-cols-2 w-full px-27">
                                        <div>
                                                <div className="mb-3">
                                                        <Label htmlFor="edit-nama-user" className="font-light text-base">Nama</Label>
                                                        <TextInput
                                                                id="edit-nama-user"
                                                                type="text"
                                                                placeholder="Nama"
                                                                className="TextInput mt-1"
                                                                required
                                                        />
                                                </div>
                                                <div className="mb-3">
                                                        <Label htmlFor="edit-email-user" className="font-light text-base">Email</Label>
                                                        <TextInput
                                                                id="edit-email-user"
                                                                type="email"
                                                                placeholder="Email"
                                                                className="TextInput mt-1"
                                                                required
                                                        />
                                                </div>
                                                <div className="mb-3 relative">
                                                        <Label htmlFor="edit-gender" className="font-light text-base">Jenis Kelamin</Label>
                                                        <Dropdown id="edit-gender" label="Jenis Kelamin" dismissOnClick={false} className="Dropdown mt-1">
                                                                <DropdownItem>
                                                                        <i className="fas fa-mars me-1"></i> Laki-laki
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                        <i className="fas fa-venus me-1"></i> Perempuan
                                                                </DropdownItem>
                                                        </Dropdown>
                                                </div>
                                        </div>

                                        <div>
                                                <div className="mb-3">
                                                        <Label htmlFor="edit-nomor-user" className="font-light text-base">Nomor</Label>
                                                        <TextInput
                                                                id="edit-nomor-user"
                                                                type="number"
                                                                placeholder="Nomor"
                                                                className="TextInput mt-1"
                                                                required
                                                        />
                                                </div>
                                                <div className="mb-3">
                                                        <Label htmlFor="edit-nik-user" className="font-light text-base">NIK</Label>
                                                        <TextInput
                                                                id="edit-nik-user"
                                                                type="number"
                                                                placeholder="NIK :  7429023453342220"
                                                                className="TextInput mt-1"
                                                                required
                                                        />
                                                </div>
                                                <div className="mb-3">
                                                        <Label htmlFor="edit-alamat-user" className="font-light text-base">Alamat</Label>
                                                        <TextInput
                                                                id="edit-alamat-user"
                                                                type="text"
                                                                placeholder="Contoh: Wolasi, Jl. Abc"
                                                                className="TextInput mt-1"
                                                                required
                                                        />
                                                </div>
                                        </div>
                                </div>

                                <div className="buttons flex w-full gap-3 justify-start px-27">
                                        <Button color="dark">Update</Button>
                                        <Button color="red" onClick={() => navigate("/user/profil")}>Batal</Button>
                                </div>
                        </div>
                </section>
        )
}