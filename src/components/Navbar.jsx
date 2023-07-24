import React from 'react'
import { logo } from '../assets/data'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const data = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "Pizza",
      value: "/pizza",
    },
    {
      label: "Paste",
      value: "/paste",
    },
    {
      label: "Soups ",
      value: "/soups ",
    },
    {
      label: "Salads ",
      value: "/salads ",
    },
    {
      label: "Beverages ",
      value: "/beverages ",
    },
    {
      label: "Desert ",
      value: "/dessert ",
    },
    {
      label: "Antipasti ",
      value: "/antipasti ",
    },
    {
      label: "Stock ",
      value: "/stock ",
    },
    {
      label: "Combo ",
      value: "/combo ",
    },
    {
      label: "Location ",
      value: "/location ",
    }

  ];

  window.addEventListener("resize", () => {
    setOpen(false)
  })

  window.addEventListener("scroll", () => {
    if (open) {
      setOpen(false)
    }
  })


  return (

    <header className='pt-5' >

      <div className="top flex justify-between items-center">
        <a href="index.html">
          <img className='md:w-auto w-16' src={logo} alt="site logo" />
        </a>


        <div className="hidden gap-5 items-center close-tab:flex">
          <a href="tel:+998939170731" className='btn-gray'>
            Request a call
          </a>

          <a className='inline-block text-2xl font-bold text-yellow' href="tel:+998939170731">
            998 93 917 07 31
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className='close-tab:hidden block'><i className={`text-2xl ${open ? 'bi bi-x' : 'bi bi-list'}`}></i></button>
      </div>


      <div onClick={() => setOpen(false)} className={`mobile-nav bg-yellow flex flex-col py-10 gap-4 items-center rounded-2xl w-full right-0 sm:w-60 absolute sm:right-10 z-[60] close-tab:hidden ${open ? 'flex' : 'hidden'}`}>
        {data.map((i, index) => {
          return (
            <NavLink className=' inline-block font-extrabold ' key={index} to={i.value}>{i.label}</NavLink>
          )
        })}
        <a className='inline-block text-xl font-bold text-black py-4' href="tel:+998939170731">
          998 93 917 07 31
        </a>
      </div>
    </header>
  )
}
