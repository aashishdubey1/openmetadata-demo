import Image from "next/image"
import logoImage from '../../assests/images/logosaas.png'

import MenuIcon from "./icons/MenuIcon"

export const Navbar = ()=>{
    return (
        <div className="cont bg-black">
            <div className="flex justify-between items-center">
                <div className="relative">
                    <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
                    <Image src={logoImage} alt="logo-image" className="h-12 w-12 relative"/>
                </div>
                <div className="border-1 border-white/50 h-10 w-10 inline-flex justify-center items-center rounded-md sm:hidden">
                    <MenuIcon className="text-white"/>
                </div>
                <nav className="hidden sm:flex gap-6 items-center justify-between">
                    <a href="#" className="text-white/50 hover:text-white transition">Get Started</a>
                    <a href="#" className="text-white/50 hover:text-white transition">Documentation</a>
                    <a href="#" className="text-white/50 hover:text-white transition">Community</a>
                    <a href="#" className="text-white/50 hover:text-white transition">Blog</a>
                    <a href="#" className="text-white/50 hover:text-white transition">Case Studies</a>
                    <button className="py-2 px-6 rounded-lg bg-white text-black font-medium">Try Metadata</button>
                </nav>
            </div>
        </div>
    )
}