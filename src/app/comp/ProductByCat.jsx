"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function ProductByCat(props) {
    let [post, setPost] = useState([])
    useEffect(() => {
        axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${props.id}`)
        .then(res => {
          setPost(res.data);
        });
    }, [props.id])
  return (
   <section className='py-5 aa'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center  '>
     <h3><div className="bg-red-600 text-2xl font-bold px-4 py-2 border-r-2 rounded-2xl"> {props.title}</div></h3> 
     </div>
     <div className="flex">
       {post.slice(0, 4).map(a => (
         <div key={a.id} className='p-3'>
          <Link href={`/details/${a.id}`}>
           <img className='h-[250px] object-cover border-2' src={a.featured_image_src} alt="" />
           <h1 className='text-2xl text-red-600 font-bold p-4 m-3'>
             {a.title.rendered}
           </h1>
           </Link>
         </div>
       ))}
     </div>
    </div>
   </section>
  )
}

export default ProductByCat