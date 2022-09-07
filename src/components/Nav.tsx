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
        whitespace-nowrap
        ">
            <a href="#">
                <img src="/images/logo.svg" alt="snap" />
            </a>
            <div className="hidden lg:flex flex-row gap-10">
                <div className="nav-dropdown | relative">
                    <a href="#">Features</a>
                    <div className="nav-dropdown-items | absolute p-6 shadow-2xl rounded-2xl">
                        <NavDropdownItem image="/images/icon-todo.svg" text="Todo List" />
                        <NavDropdownItem image="/images/icon-calendar.svg" text="Calendar" />
                        <NavDropdownItem image="/images/icon-reminders.svg" text="Reminders" />
                        <NavDropdownItem image="/images/icon-planning.svg" text="Planning" />
                    </div>
                </div>
                <div className="nav-dropdown | relative">
                    <a href="#">Company</a>
                    <div className="nav-dropdown-items | absolute p-6 shadow-2xl rounded-2xl">
                        <NavDropdownItem text="History" />
                        <NavDropdownItem text="Our Team" />
                        <NavDropdownItem text="Blog" />
                    </div>
                </div>
                <div className=""><a href="#">Careers</a></div>
                <div className=""><a href="#">About</a></div>
            </div>
            <div className="hidden lg:flex flex-row items-center ml-auto gap-10">
                <a href="#">Login</a>
                <a href="#" className="btn-1">Register</a>
            </div>
            <button className="lg:hidden" onClick={e => {
                setActive(true)
            }} >
                <img src="/images/icon-menu.svg" alt="menu button" />
            </button>
        </div>
    )
}

function NavDropdownItem({ image, text }: { image?: string, text: string }) {
    return (
        <a href="#" className="flex flex-row gap-4 items-center">
            {image && <div className="w-4">
                <img src={image} alt="icon todo" />
            </div>}
            {text}
        </a>
    )
}