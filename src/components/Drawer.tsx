import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

export const DrawerContext = createContext<{ active: boolean, setActive: (x: boolean) => void }>({ active: false, setActive: (_) => { } })

export function DrawerProvider({ children }: { children: ReactNode }) {
    const [active, setActive] = useState(false)
    return <DrawerContext.Provider value={{ active, setActive }}>
        {children}
    </DrawerContext.Provider>
}

export function Drawer() {
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)

    const { active, setActive } = useContext(DrawerContext)

    return (
        <div className={(active ? "block" : "hidden") + " fixed top-0 whitespace-nowrap "}>
            <div className="fixed opacity-80 h-screen w-screen bg-black z-10">
            </div>
            <div className="fixed right-0 w-60 h-screen bg-white z-20 ">
                <button
                    onClick={e => {
                        setActive(false);
                    }}
                    className="ml-auto p-5 mb-3 block">
                    <img src="/images/icon-close-menu.svg" alt="" />
                </button>
                <div className="flex flex-col gap-4 px-6">
                    <div>
                        <a href="#"
                            data-value={dropdown1}
                            className="dropdown-btn"
                            onClick={e => setDropdown1(!dropdown1)}>
                            Features
                        </a>
                        <div data-value={dropdown1} className={
                            (dropdown1 ? "flex" : "hidden") +
                            " px-6 py-2 overflow-hidden flex-col w-min gap-4 transition-height"}>
                            <a href="#" className="flex flex-row gap-4 items-center">
                                <img src="/images/icon-todo.svg" alt="icon todo" />
                                Todo List
                            </a>
                            <a href="#" className="flex flex-row gap-4 items-center">
                                <img src="/images/icon-calendar.svg" alt="icon calendar" />
                                Calendar
                            </a>
                            <a href="#" className="flex flex-row gap-4 items-center">
                                <img src="/images/icon-reminders.svg" alt="icon reminders" />
                                Reminders
                            </a>
                            <a href="#" className="flex flex-row gap-4 items-center">
                                <img src="/images/icon-planning.svg" alt="icon planning" />
                                Planning
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="#"
                            data-value={dropdown2}
                            className="dropdown-btn"
                            onClick={e => setDropdown2(!dropdown2)}>
                            Company
                        </a>
                        <div className={
                            (dropdown2 ? "flex" : "hidden") +
                            " flex flex-col w-min px-6 py-2 gap-4"
                        }>
                            <a href="#">
                                <div>History</div>
                            </a>
                            <a href="#">
                                <div>Our Team</div>
                            </a>
                            <a href="#">
                                <div>Blog</div>
                            </a>
                        </div>
                    </div>
                    <div><a href="#">Careers</a></div>
                    <div><a href="#">About</a></div>
                    <div className="h-8"></div>
                    <button>Login</button>
                    <button className="btn-1">Register</button>
                </div>
            </div>

        </div>
    )
}