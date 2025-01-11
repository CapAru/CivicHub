import React from 'react';
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
export default function Main(){
    return(
        <>
            <div className='flex flex-col items-center my-3'>
                <div className='flex justify-evenly w-3/4 border-b-4 p-3'>
                    <div className='mx-4 p-1'>
                        <h2>Active Issues</h2>
                        
                    </div>
                    <div className='mx-4 p-1'>
                        <h2>Resolved Issues</h2>
                    </div>
                </div>
                
                <div className='my-4 w-3/4'>
                    <div className='flex bg-[#0068ff] items-center justify-between py-4 px-8 rounded-2xl text-white'>
                        <div className='flex items-center'>
                            <BiSolidUpvote className='mx-1'/>
                            <CiWarning className='mx-1'/>
                        </div>
                            <div className='flex flex-col items-center'>
                                <h3 className='font-bold text-xl'>Pothole on main street</h3>
                                <p>Submitted by: Arunava</p>
                            </div>
                            <CiMaximize1 className='mx-2'/>
                        </div>
                </div>
            </div> 
        </>
    )
}