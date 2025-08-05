import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '/Fbconfig'
import Swal from 'sweetalert2'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handlelogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged-in",
                    text: "User Logged-in Successfully...",
                });
                navigate("/Dashboard");
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "invalid email !",
                    });
                } else if (error.code === "auth/wrong-password") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "invalid password!",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "invalid email & password!",
                    });
                }
                setEmail('')
                setPassword('')
            });
    };


    return (
        <div>
            <center>
                <form className='mt-10 shadow-lg/30 rounded-2xl w-[37%] p-4'>
                    <h1 className='mt-5 text-4xl font-semibold '>Login User</h1>
                    <div className=' inline-grid gap-5 font-serif leading-10 mt-10 text-lg'>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-14 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Email
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-14 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Password
                            </label>
                        </div>
                        <button onClick={handlelogin} className='border mt-6 text-xl h-10 hover:cursor-pointer bg-blue-500 text-white rounded-lg'>Login</button>
                        <p className='font-extralight'> Don't Have an accout ?
                            <Link to='/' className='text-blue-400'> Sign In</Link></p>
                    </div>
                </form>
            </center>
        </div>
    )
}
