"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation';

function page() {
    let {id}=useParams()
    let [posts, setPosts]=useState([])

    useEffect(() => {
      console.log("ID:", id);
      axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts/${id}`)
        .then(res => {
          setPosts(res.data);
        });
    }, [id]);
  return (
   <>
   
  
   {posts && posts.yoast_head_json && posts.content ? (
     <>
     <section className='py-5'>
       <div className="container mx-auto text-center border-2 p-4 item-center">
       <h2 className='font-bold text-3xl py-3'>{posts.yoast_head_json.title}</h2>
       <div 
         className='text-left prose prose-lg max-w-none [&_img]:w-full [&_img]:rounded-2xl [&_img]:my-4 [&_p]:my-3' 
         dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
       ></div>
       </div>
       </section>
     </>
   ) : (
     <p>Loading...</p>
   )}
   </>
  )
}

export default page