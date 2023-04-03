import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Dashboard from '@/components/dashboard'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  

  const [loggedIn, setLoggedIn] =  useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      console.log("log in success");
    } else {
      console.log("Error invalid credentials");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Head>
        <title>Techverse Dashboard</title>
        <meta name="description" content="techverse wireless monitoring service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {loggedIn ? (
      <Dashboard></Dashboard>
    ) : (
      <div className='loginWrapper'>
      <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text"  onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Login</button>
        </form>
        </div>
    )
    }
    </>
  )
}
