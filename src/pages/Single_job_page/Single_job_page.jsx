import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/joblogo.png'
import Job_card from '../../components/Job_card_section/Job_card';
import { Link, useLocation } from 'react-router-dom';
import { useGetAllJobsQuery } from '../../reducers/ApiReducers/jobApi/jobApi';
import { image_base_url } from '../../Constant/constant';
const SingleJobDetails = () => {
    const location = useLocation()
    const job = {
        title: "Software Engineer",
        description: "We are looking for a skilled Software Engineer to join our team.",
        location: "San Francisco, CA",
        vacancies: 3,
        responsibilities: [
            "Develop high-quality software design and architecture",
            "Identify, prioritize, and execute tasks in the software development life cycle",
            "Develop tools and applications by producing clean, efficient code",
            "Review and debug code",
            "Collaborate with internal teams and vendors to fix and improve products"
        ],
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Proven experience as a Software Engineer or similar role",
            "Experience with software development tools and methodologies",
            "Strong problem-solving skills"
        ]
    };

    const { data, isSuccess, isError } = useGetAllJobsQuery()

    return (
        <>
            {/* <Navbar /> */}

            {
                location.state &&
                <div className='flex w-full justify-between px-[70px] mb-14 mq900:px-0 mq900:flex-col'>
                    <div className=" p-6 bg-white rounded-lg ">
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">{location.state.job_title}</h1>
                                <p className="text-gray-700 mb-4">{location.state.description}</p>
                            </div>
                            <div>
                                <img src={location.state.company_logo} alt="logo" className='h-[100px] w-[100px] rounded-[50%] mq900:h-[70px] mq900:w-[100px] ' />
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Location:</h2>
                            <p className="text-gray-600">{`${location.state.city}, ${location.state.state}, ${location.state.country}`}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Responsibilities:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {location.state.responsibilities.split(",").map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='mb-4'>
                            <h2 className="text-lg font-semibold">Qualifications:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {location.state.qualifications.split(",").map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Vacancies:</h2>
                            <p className="text-gray-600">{location.state.vacancy}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Skills:</h2>
                            <p className="text-gray-600">{location.state.skills}</p>
                        </div>

                        <div className='my-7 w-full flex justify-center items-center'>
                            <Link to="/job-application-form" state={location.state._id}>
                                <button className='block mx-auto w-[100%] px-[20px] py-[7px] border-[1px] border-primary_color rounded-[5px] hover:bg-primary_color hover:text-white'>Apply Now</button>
                            </Link>
                        </div>
                    </div>

                    {/* <div className='mq900:my-9'>
                        <h2 className='text-[25px] mq900:text-center mq900:mb-2'>Related jobs</h2>
                        <div className='grid grid-cols-2 gap-4 mq900:grid-cols-1'>
                            {isSuccess && data.all_jobs && data.all_jobs.slice(0, 4).map((job, index) => <Job_card data={job} key={index} />)}
                        </div>
                    </div> */}
                </div>
            }
            {/* <Footer /> */}
        </>
    );
};

export default SingleJobDetails;
