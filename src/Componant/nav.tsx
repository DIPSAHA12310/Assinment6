import { useState } from "react"
import logo from "../assets/logo-text.png"

const Nav = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-amber-50">

            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>

                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Dev Stack" className="w-36" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 justify-center font-bold">
                    <li className="text-red-600">
                        Home
                    </li>
                    <li>
                        Technologies
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

                {/* Right Buttons */}
                <div className="flex gap-2">
                    <button className="btn btn-ghost">
                        Sign In
                    </button>

                    <button className="btn rounded-full bg-black text-white">
                        Sign Up
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden px-6 pb-4 flex flex-col gap-3 font-bold">
                    <li className="text-red-600">
                        Home
                    </li>
                    <li>
                        Technologies
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default Nav