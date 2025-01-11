import React from 'react';
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
export default function Main(){
    return(
        <>
            <div className='flex justify-evenly'>
                <div className='mx-4 p-10 rounded-2xl border-8 border-[#44546a] '>
                    <h2 className='mb-10'>Active Issues</h2>
                    <div className='flex bg-[#0068ff] items-center justify-between p-4 rounded-2xl text-white'>
                        <BiSolidUpvote />
                        <CiWarning />
                        <div>
                            <h3>Issue Title</h3>
                            <p>Issue Description</p>
                        </div>
                        <CiMaximize1 />
                    </div>
                </div>
                <div className='mx-4 p-10 rounded-2xl border-8 border-[#44546a] '>
                    <h2>Resolved Issues</h2>
                </div>
            </div> 
        </>
    )
}