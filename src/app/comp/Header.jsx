"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function Header() {
let [cat, setCat]=useState([])
useEffect(()=>{
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/categories`)
    .then(res => {
        setCat(res.data);
    });
},[])
  
  return (
    <>
    <section className='text-[#f2f2f2] bg-[#1a1a1a]'>
    <div className="container mx-auto " >
        <div className='flex justify-between items-center p-2 '>
            <h1 className='text-2xl font-bold'>English</h1>
            <div className='flex gap-4'>
                <Link href="/login" className='border-r-3 px-2'> Login</Link>
                <Link href="/about" className='border-r-3 px-2'>About</Link>
                <Link href="/Contact" className='border-r-3 px-2'>Contact</Link>
            </div>
            </div>
        </div>
    </section>
    <header className='p-3'>
    <div className="container mx-auto justify-between flex items-center">
<Link href="/">
<img className='w-[400px]' src="https://bankingkhabar.com/wp-content/uploads/2022/11/banking-logo.jpg" alt="" /></Link>
<Link href="/">
<img className='w-[900px]' src="https://bankingkhabar.com/wp-content/uploads/2025/03/1000-by-100-new.gif" alt="" /></Link>
</div>
    </header>


    <nav className='bg-red-700 text-white'>
        <div className="container mx-auto ">
            <ul className='flex '>
                {cat.map(a=>(
                    <li className='border border-[#ec6b6b] p-2' key={a.id}><Link href={`/category/${a.id}`}>{a.name}</Link></li>
                ))}
            </ul>
        </div>
    </nav>


    <section className='p-2'>
    <div className="container mx-auto flex justify-end border-b-2 p-2">
<span>
Wednesday, Sep 19, 2025 </span>
<span className='bg-red-700 text-white'> 3:54:47 PM</span>


<hr />
</div>
       

    </section>


    <section className='py-2'>
        <div className="container mx-auto">
            <img className='w-full' src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif" alt="" />
        </div>
    </section>
    
    </>
  )
}

export default Header