import { FaUserAlt } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

export default function DropdownNavbarInstansi(props) {
    return (
        <div className="flex items-center text-sm gap-2 justify-end">
            <p className="line-clamp-1 dark:text-white">John Doe</p>
            <span
                className="
                        dark:bg-gray-600 bg-gray-100
                        cursor-pointer h-8 w-8 flex text-black
                        items-center justify-center rounded-[50%]
                "
            >
                <FaUserAlt className="dark:text-white" />
            </span>
            <span
                onClick={() =>
                    props.setDarkThemeInstansi(!props.darkThemeInstansi)
                }
                className="
                        dark:bg-sky-300 bg-amber-100
                        cursor-pointer h-8 w-8 flex text-black
                    items-center justify-center rounded-[50%]
                "
            >
                {props.darkThemeInstansi ? <MdDarkMode /> : <IoSunnyOutline />}
            </span>
        </div>
    );
}
