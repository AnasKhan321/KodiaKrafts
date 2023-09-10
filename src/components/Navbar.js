import React, { useContext, useEffect, useState } from 'react'

import   {Link } from 'react-router-dom';
import MyContext from '../ContextApi/Mycontext';

const Navbar = () => {
    const { login, login1,logout } = useContext(MyContext)

  return (

        <nav className="flex justify-between items-center my-4 w-4/5 mx-auto  md:flex-row flex-col">
            <div className="logo mx-6  text-3xl font-bold text-orange-600">KodiakKrafts</div>
            
            <ul className="flex justify-between mx-4">

                <Link  to="/"  className="cursor-pointer hover:text-orange-400 mx-3 font-bold my-2 " >Home</Link>
                <Link   to="/" className="cursor-pointer hover:text-orange-400 mx-3 font-bold my-2 " >About</Link>
                <Link   to="/beer" className="cursor-pointer hover:text-orange-400 mx-3 font-bold my-2 " >Beers</Link>
            </ul>

            <div className="auth mx-4 my-2">
                {login1 &&  <button className="mx-4 font-bold" onClick={logout} >Logout </button> }
                {!login1 &&  <button className="mx-4 font-bold" onClick={login} >Login  </button> }
     

            </div>
        </nav>
  )
}

export default Navbar