import { useContext } from "react"
import { DrawerContext } from "./Drawer"

export function Nav() {
    const { active, setActive } = useContext(DrawerContext)
    return (
        <div
            className="
        flex flex-row gap-16 items-center 
        justify-between lg:justify-start
        p-4 lg:px-10 lg:py-5
        ">
            <a href="#">
                <img src="/images/logo.svg" alt="snap" />
            </a>
            <div className="hidden lg:flex flex-row gap-10">
                <div className=""><a href="#">Features</a></div>
                <div className=""><a href="#">Company</a></div>
                <div className=""><a href="#">Careers</a></div>
                <div className=""><a href="#">About</a></div>
            </div>
            <div className="hidden lg:flex flex-row items-center ml-auto gap-10">
                <a href="#">Login</a>
                <a href="#" className="border-2 border-solid py-3 px-6 rounded-2xl">Register</a>
            </div>
            <button onClick={e => {
                setActive(true)
            }} >
                <img src="/images/icon-menu.svg" alt="" />
            </button>
        </div>
    )
}