import React from 'react';
import IssueBar from '../elements/IssueBar';
export default function Main(){
    return(
        <>
            <div className='flex flex-col items-center my-3'>
                <div className='flex justify-evenly w-3/4 border-b-[#44546a] border-b-4 p-3'>
                    <div className='mx-4 p-1 w-1/2 text-center cursor-pointer hover:bg-white rounded-full transition duration-200'>
                        <h2>Active Issues</h2>
                    </div>
                    <div className='mx-4 p-1 w-1/2 text-center cursor-pointer hover:bg-white rounded-full transition duration-200'>
                        <h2>Resolved Issues</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full my-2'>
                    <IssueBar/>
                    <IssueBar/>
                    <IssueBar/>
                </div>
            </div> 
        </>
    )
}