"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductByCat from './comp/ProductByCat';
import './globals.css';

export default function Home() {
  let [post, setPost] = useState([]);
  
  useEffect(() => {
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts`)
    .then(res => {
      setPost(res.data);
    });
  }, []);

  return (
   <>
   {/* <section className='py-3'>
    <div className="container mx-auto">
      <img src="https://bankingkhabar.com/wp-content/uploads/2025/01/bank-liqualityyy-final.jpg" alt="" />
    </div>
   </section> */}

   {post.slice(0, 2).map(a => (
     <section key={a.id} className='py-4'>
       <div className="container mx-auto text-center py-3">
         <h1 className='text-3xl text-red-600 font-bold'>{a.title.rendered}</h1>
         <img className='w-full object-cover rounded-2xl' src={a.featured_image_src} alt="" />
       </div>
     </section>
   ))}

   <section className='py-4'>
     <div className="container mx-auto justify-center">
       <img className='w-[500px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/800-x-200-gif%20new.gif" alt="" />
     </div>
   </section>

   {post.slice(1, 6).map(a => (
     <section key={a.id} className='py-4'>
       <div className="container mx-auto">
         <div className='relative'>
           <img className='w-full h-[300px] object-cover rounded-2xl' src={a.featured_image_src} alt="" />
           <div className="w-full h-full absolute start-0 top-0 flex justify-center items-center">
             <h1 className='text-5xl font-bold text-white'>{a.title.rendered}</h1>
           </div>
         </div>
       </div>
     </section>
   ))}

   <section>
     <div className="container mx-auto justify-center">
       <img className='w-[750px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" alt="" />
     </div>
   </section>

   <ProductByCat id={2} title="अन्तरवार्ता" />
   <ProductByCat id={71} title="अन्तर्राष्ट्रिय बैंकिङ" />
   {/* <ProductByCat id={89} title="अर्थ" />
   <ProductByCat id={86} title="कोरोना अपडेट" />
   <ProductByCat id={206} title="घर-जग्गा" />
   <ProductByCat id={92} title="दशैं बिशेष" />
   <ProductByCat id={3} title="दृष्टिकोण" /> */}

   <section className='py-4'> 
     <div className="container mx-auto justify-center">
       <img className='w-[900px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/900x150.gif" alt="" />
     </div>
   </section>

   <ProductByCat id={89} title="अर्थ" />
   </>
  );
}