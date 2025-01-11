import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
import { useState } from "react";

export default function IssueBar() {
    const [upvoted, setUpvoted] = useState(false);
    const [upvotes, setUpvotes] = useState(0);
    function changeUpvote(){
        if(upvoted){
            setUpvotes(upvotes-1);
        }else{
            setUpvotes(upvotes+1);
        }
        setUpvoted(!upvoted);
    }
    return(
        <div className='my-2 w-3/4'>
            <div className='flex bg-[#0068ff] items-center justify-between py-4 px-8 rounded-2xl text-white'>
                <div className='flex items-center'>
                    <div className="cursor-pointer flex items-center mr-2 py-1 px-2 rounded-full hover:bg-[#2954c8] transition duration-200" onClick={changeUpvote}>
                        {upvoted ? <BiSolidUpvote className='mr-1 text-2xl'/> : <BiUpvote className='mr-1 text-2xl'/>}
                        <p className="text-lg">{upvotes}</p>
                    </div>
                    <CiWarning className='mx-1 text-2xl'/>
                </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-bold text-xl'>Pothole on main street</h3>
                        <p>Submitted by: Arunava</p>
                    </div>
                    <div className='cursor-pointer'>
                        <CiMaximize1 className='text-2xl'/>
                    </div>
                </div>
        </div>
    )
}