// import { BiSolidUpvote } from "react-icons/bi";
// import { BiUpvote } from "react-icons/bi";
// import { CiWarning } from "react-icons/ci";
// import { CiMaximize1 } from "react-icons/ci";
// import { CiMinimize1 } from "react-icons/ci";
// import { useState } from "react";
// import { CiLocationOn } from "react-icons/ci";

// export default function IssueBar() {
//     const [upvoted, setUpvoted] = useState(false);
//     const [upvotes, setUpvotes] = useState(0);
//     function changeUpvote(){
//         if(upvoted){
//             setUpvotes(upvotes-1);
//         }else{
//             setUpvotes(upvotes+1);
//         }
//         setUpvoted(!upvoted);
//     }
//     const [expanded, setExpanded] = useState(false);
//     function expand(){
//         setExpanded(!expanded);
//     }
//     const expandComponent = (
//         <div className='flex flex-col items-center bg-slate-400 p-3 mt-1 rounded-2xl lg:flex-row lg:justify-between lg:items-start lg:p-5'>
//             <div className='flex flex-col items-center lg:w-1/2'>
//             <img src="https://arjasrikanth.in/wp-content/uploads/2024/09/potholes2.jpg" className='rounded-2xl w-full mb-4'/>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10698.731362005097!2d88.3080103067757!3d22.557345115440707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sIndian%20Institute%20of%20Engineering%20Science%20and%20Technology%2C%20Shibpur%20(IIEST)!5e0!3m2!1sen!2sin!4v1736608501746!5m2!1sen!2sin" width="400" height="300" referrerpolicy="no-referrer-when-downgrade" className="mb-4 rounded-2xl"/>
//             </div>
//             <div>
//                 <p className="my-4 lg:mx-6 lg:my-0 text-lg">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
//                 <div className='flex items-center'>
//                     <CiLocationOn className='text-2xl mr-2'/>
//                     <p>IIEST Shibpur</p>
//                 </div>
//             </div>
//         </div>
//     )
//     return(
//         <div className='my-2 w-3/4'>
//             <div className='flex bg-[#0068ff] items-center justify-between py-4 px-5 rounded-2xl text-white cursor-pointer' onClick={expand}>
//                 <div className='flex items-center'>
//                     <div className="cursor-pointer flex items-center mr-2 py-1 px-2 rounded-full hover:bg-[#2954c8] transition duration-200" onClick={changeUpvote}>
//                         {upvoted ? <BiSolidUpvote className='mr-1 text-2xl'/> : <BiUpvote className='mr-1 text-2xl'/>}
//                         <p className="text-lg">{upvotes}</p>
//                     </div>
//                     <CiWarning className='mx-1 text-2xl'/>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                     <h3 className='font-bold text-xl'>Pothole on main street</h3>
//                     <p>Submitted by: Arunava</p>
//                 </div>
//                 <div className='cursor-pointer rounded-full hover:bg-[#2954c8] transition duration-200 py-1 px-2' onClick={expand}>
//                     {expanded ? <CiMinimize1 className='text-2xl'/> : <CiMaximize1 className='text-2xl'/>}
//                 </div>
//             </div>
//             <div>
//                 {expanded ? expandComponent : null}
//             </div>
//         </div>
//     )
// }

import { BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { CiWarning, CiMaximize1, CiMinimize1, CiLocationOn } from "react-icons/ci";
import { useState } from "react";

export default function IssueBar() {
    const [upvoted, setUpvoted] = useState(false);
    const [upvotes, setUpvotes] = useState(0);
    const [expanded, setExpanded] = useState(false);

    function changeUpvote(event) {
        event.stopPropagation(); // Prevents the expand function from triggering
        setUpvoted(!upvoted);
        setUpvotes(upvoted ? upvotes - 1 : upvotes + 1);
    }

    function expand() {
        setExpanded(!expanded);
    }

    function handleTypeIconClick(event) {
        event.stopPropagation(); // Prevents the expand function from triggering
        console.log("Type icon clicked");
    }

    const expandComponent = (
        <div className='flex flex-col items-center bg-slate-400 p-3 mt-1 rounded-2xl lg:flex-row lg:justify-between lg:items-start lg:p-5'>
            <div className='flex flex-col items-center lg:w-1/2'>
                <img src="https://arjasrikanth.in/wp-content/uploads/2024/09/potholes2.jpg" className='rounded-2xl w-full mb-4' />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10698.731362005097!2d88.3080103067757!3d22.557345115440707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sIndian%20Institute%20of%20Engineering%20Science%20and%20Technology%2C%20Shibpur%20(IIEST)!5e0!3m2!1sen!2sin!4v1736608501746!5m2!1sen!2sin"
                    width="400" height="300" referrerPolicy="no-referrer-when-downgrade" className="mb-4 rounded-2xl" />
            </div>
            <div>
                <p className="my-4 lg:mx-6 lg:my-0 text-lg">
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                <div className='flex items-center'>
                    <CiLocationOn className='text-2xl mr-2' />
                    <p>IIEST Shibpur</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className='my-2 w-3/4'>
            <div className='flex bg-[#0068ff] items-center justify-between py-4 px-5 rounded-2xl text-white cursor-pointer' onClick={expand}>
                <div className='flex items-center'>
                    {/* Upvote button - stopPropagation applied */}
                    <div className="cursor-pointer flex items-center mr-2 py-1 px-2 rounded-full hover:bg-[#2954c8] transition duration-200" onClick={changeUpvote}>
                        {upvoted ? <BiSolidUpvote className='mr-1 text-2xl' /> : <BiUpvote className='mr-1 text-2xl' />}
                        <p className="text-lg">{upvotes}</p>
                    </div>

                    {/* "I Type" Icon - stopPropagation applied */}
                    <CiWarning className='mx-1 text-2xl cursor-pointer' onClick={handleTypeIconClick} />
                </div>

                <div className='flex flex-col items-center'>
                    <h3 className='font-bold text-xl'>Pothole on main street</h3>
                    <p>Submitted by: Arunava</p>
                </div>

                <div className='cursor-pointer rounded-full hover:bg-[#2954c8] transition duration-200 py-1 px-2' onClick={expand}>
                    {expanded ? <CiMinimize1 className='text-2xl' /> : <CiMaximize1 className='text-2xl' />}
                </div>
            </div>
            
            <div>
                {expanded ? expandComponent : null}
            </div>
        </div>
    );
}
