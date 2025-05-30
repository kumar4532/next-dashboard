"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Stages & Checklist", href: "/" },
    { name: "Upload Docs", href: "/" },
    { name: "Preferred Vendors", href: "/" },
    { name: "Tech Stack", href: "/" },
    { name: "Targets", href: "/" },
    { name: "Zee Sales Targets", href: "/" },
    { name: "MAI Settings", href: "/" },
    { name: "Pending Questions", href: "/", badge: "3" },
]

export default function Sidebar() {
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div className="w-72 bg-[#11455D] text-white flex flex-col justify-between h-full md:h-screen shadow-lg">
            <nav className="flex-1 p-4 space-y-1 mt-12">
                {navItems.map((item) => {
                    const isSelected = selected === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelected(item.name);
                            }}
                            className={`flex items-center justify-between px-4 py-3 rounded-md transition-colors 
                                hover:bg-gray-300 hover:text-black  
                                ${isSelected ? 'bg-white/10 text-blue-500' : 'text-zinc-400'}`}
                        >
                            <span>{item.name}</span>
                            {item.badge && (
                                <span className="bg-white text-[#0a3b52] text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>
            <span className="p-4 text-gray-400 text-xs">Logout</span>
        </div>
    )
}