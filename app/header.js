"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
export default function Header(){
    const [navbar, setNavbar] = useState(false);
    return(
        <nav style={{zIndex:100000,opacity:.85}} className="w-full bg-black fixed shadow-md shadow-orange-400">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        {/* <h1 className="text-5xl orange_gt font-bold">FOXHILLOPS</h1> */}
                        <Image src="/icon.png" alt="ffo" width={140} height={140} className='max-w-xs lg:max-w-5xl' />
                    </Link>
                    <div className="md:hidden">
                        <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                        >
                        {navbar ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? 'transition ease-in-out delay-150 block' : 'hidden'
                }`}
                >
                <ul className="items-center text-3xl justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-white" onClick={() => setNavbar(!navbar)}>
                    <Link href="/">
                        HOME
                    </Link>
                    </li>
                    <li className="text-white" onClick={() => setNavbar(!navbar)}>
                    <Link href="/contact">
                        CONTACT US
                    </Link>
                    </li>
                    <li className="text-white" onClick={() => setNavbar(!navbar)}>
                    <Link href="/process">
                        OUR PROCESS
                    </Link>
                    </li>
                    <li className="text-white" onClick={() => setNavbar(!navbar)}>
                    <Link href="/price">
                    PRICE & GUARANTEE
                    </Link>
                    </li>
                    <li className="text-white" onClick={() => setNavbar(!navbar)}>
                    <Link href="/clients">
                    CLIENTS
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}