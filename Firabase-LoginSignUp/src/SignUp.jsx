import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setDoc } from 'firebase/firestore/lite'
import { doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../Firebaseconfig'
import Swal from 'sweetalert2'


export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  const navigate = useNavigate()

  const handlesignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
         setDoc(doc(db, "users", res.user.uid), { name, age, email })
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
        <form className='mt-4 shadow-lg/30 rounded-2xl w-[37%] p-4'>
          <h1 className='text-4xl font-semibold'>Create Account</h1>
          <div className=' inline-grid gap-5 font-serif leading-10 mt-6 text-lg'>
            <input type='text' placeholder='Enter your name...' className='pl-5 border w-64' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type='number' placeholder='Enter your age...' className='pl-5 border' value={age} onChange={(e) => setAge(e.target.value)} required />
            <input type='email' placeholder='Enter your email...' className='pl-5 border' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type='password' placeholder='Enter strong password...' className='pl-5 border' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button onClick={handlesignup} type='button' className='border mt-2 text-xl h-10 hover:cursor-pointer bg-blue-500 text-white rounded-lg'>Register</button>
            <p className='font-extralight'> Already Have an accout ?
              <Link to='/Login' className='text-blue-400'> Login</Link></p> 
          </div>
        </form>
      </center>
    </>
  )
}
