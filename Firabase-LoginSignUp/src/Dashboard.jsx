import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebaseconfig";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });


  }, []);

  return (
    <div>
      <center>
        <h1 className='mt-20 text-5xl font-semibold animate-bounce transition duration-500 ease-in-out '>Welcome to Dashboard</h1>
        {user ? (
          <>
            <p className='mt-20 text-3xl'><span className=" font-semibold">Email:</span> <span className="text-blue-400">{user.email}</span></p>
          </>
        ) : (
          <p className=" mt-20">Loading user info or not logged in...</p>
        )}
      </center>
    </div>
  );
}
