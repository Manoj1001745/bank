"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation';

function Page() {
    let {cid} = useParams()
    let [post, setPost] = useState([])
    let [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}`)
        .then(res => {
          setPost(res.data);
        });
    }, [cid])

    if (!mounted) {
        return null;
    }

    return (
        <section>
            <div className="container mx-auto">
                <div className="box-22 flex gap-4 flex-wrap">
                    {post.map(a => (
                        <div key={a.id} className='box-33 p-3 w-[30%] box-1'>
                            <Link href={`/details/${a.id}`}>
                                <img className='h-[250px] object-cover' src={a.featured_image_src} alt={a.title?.rendered || 'Post image'} />
                                <p className='pp-1 text-2xl text-red-600 hover:text-red-400 font-bold py-3'>{a.title?.rendered}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page