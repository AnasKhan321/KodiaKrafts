import React, { useContext, useEffect, useState } from 'react'

import MyContext from './Mycontext';
import { ToastContainer, toast } from 'react-toastify';

const MyProvider = ({ children }) => {
  const [login1, setlogin1] = useState(false); 
  const [data, setData] = useState(23);
  const fetchData = async(number,page)=>{
    const data2 = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${number}`)
    const data3 = await data2.json(); 
    console.log(data3); 
    return data3 ; 
  }

  const logout = ()=>{
    setlogin1(false);
    toast('You Logout !', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }

  const login = ()=>{
    setlogin1(true)
    toast('You Login !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
  return (
    <MyContext.Provider value={{ data, setData,fetchData  , login,logout,login1 }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;