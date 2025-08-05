import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav className="bg-white shadow-md py-4 px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold text-blue-500 font-serif">
                    MyApp
                </div>
                <div className="flex gap-10 text-lg font-medium text-blue-600">
                    <Link
                        to="/"
                        className="hover:text-blue-800 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/Login"
                        className="hover:text-blue-800 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                    >
                        Login
                    </Link>
                    <Link
                        to="/Dashboard"
                        className="hover:text-blue-800 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </nav>
    );
}
