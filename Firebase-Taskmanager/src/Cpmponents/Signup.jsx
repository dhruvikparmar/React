
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '/Fbconfig'
import Swal from 'sweetalert2'
import { setDoc } from 'firebase/firestore/lite'
import { doc } from 'firebase/firestore'

export default function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')

    const navigate = useNavigate()

    const handlesignup = (e) => {
        if(!name || !email || !password || !age) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setDoc(doc(db, "NewUsers", res.user.uid), { name, age, email })
            }),
            Swal.fire({
                icon: "success",
                title: "Logged-in",
                text: "User Logged-in Successfully...",
            });
        navigate("/Login")
    }

    return (
        <>
            <center>
                <form className='mt-4 shadow-lg/30 rounded-2xl w-[37%] p-2'>
                    <h1 className='text-4xl font-semibold'>Create Account</h1>
                    <div className=' inline-grid gap-5 font-serif leading-10 mt-6 text-lg'>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-12 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-3
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Your Name
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="email"
                                // id="name"
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-12 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-3
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Your Email
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="number"
                                placeholder=" "
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-12 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="age"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-3
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Your Age
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2 h-12 text-base placeholder-transparent focus:outline-none focus:border-blue-500"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all 
                                    peer-placeholder-shown:top-3
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                    peer-focus:-top-2 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600 
                                    pointer-events-none"
                            >
                                Enter Strong Password
                            </label>
                        </div>
                        <button onClick={handlesignup} type='button' className='border mt-1 text-xl h-10 hover:cursor-pointer bg-blue-500 text-white rounded-lg'>Register</button>
                        <p className='font-extralight'> Already Have an accout ?
                            <Link to='/Login' className='text-blue-400'> Login</Link></p>
                    </div>
                </form>
            </center>
        </>
    )
}
