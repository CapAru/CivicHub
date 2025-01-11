import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";

export default function IssueBar() {
    return(
        <div className='my-2 w-3/4'>
            <div className='flex bg-[#0068ff] items-center justify-between py-4 px-8 rounded-2xl text-white'>
                <div className='flex items-center'>
                    <BiSolidUpvote className='mr-1 text-2xl'/>
                    <CiWarning className='mx-1 text-2xl'/>
                </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-bold text-xl'>Pothole on main street</h3>
                        <p>Submitted by: Arunava</p>
                    </div>
                    <CiMaximize1 className='text-2xl'/>
                </div>
        </div>
    )
}