import { TextField } from '@mui/material';
import React, { useState } from 'react'

const Job_filter_form = (props) => {

    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [city, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle filter submission logic here
        props.handelgetFilter({ jobTitle, jobType, city });
    };


    return (
        <>
            <form onSubmit={handleSubmit} className=" p-4 bg-white  px-10 mq450:px-3 ">
                <div className=' w-[100%] flex justify-center gap-5 p-5  border-2 rounded-[5px] mq450:flex-col mq450:gap-2 bg-white bg-opacity-20 shadow backdrop-blur-sm border-white border-opacity-30 '>
                    <div className="flex-1">
                        <input
                            variant="outlined"
                            type="text"
                            id="jobTitle"
                            placeholder='Job title'
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="mt-1 rounded-[5px] border border-gray-300 p-2 focus:outline-none w-[100%]"
                        />
                    </div>

                    <div className="flex-1">
                        <select
                            id="jobType"
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            className="mt-1 rounded-[5px] border border-gray-300 p-2 focus:outline-none w-[100%]"
                        >
                            <option value="">Select Job Type</option>
                            {
                                ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'].map((type, index)=>( <option value={type}>{type}</option>))
                            }
                        </select>
                    </div>

                    <div className="flex-1">
                        <input
                            type="text"
                            id="city"
                            placeholder='city'
                            value={city}
                            onChange={(e) => setLocation(e.target.value)}
                            className="mt-1  border border-gray-300 rounded-[5px] p-2 focus:outline-none w-[100%]"
                        />
                    </div>

                    <div className=" mq450:w-full ">
                        <button type="submit" className="px-4 py-2 border-2 border-primary_color bg-primary_color transition text-white rounded mq450:w-full ">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Job_filter_form