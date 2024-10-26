import { Link } from "react-router-dom"
import { image_base_url } from "../../Constant/constant"

const Job_Card_Job_page = (props) => {
    return (
        <>
            <div className=" bg-white overflow-hidden p-5 border-2 rounded-[5px]">
                <div className="border-b flex items-center justify-between">
                    <div className="flex gap-2 items-center pb-2 mq900:flex-row-reverse mq900:justify-between mq900:pb-1 mq900:w-full ">
                        <div className="flex-shrink-0">
                            <img
                                className="h-[60px] w-[60px] rounded-[50%]"
                                src={props.data.company_logo} // Replace with your logo URL
                                alt="Company Logo"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-xl font-bold">{props.data.job_title}</h2>
                            <p className="text-gray-600">{props.data.company_name}</p>
                        </div>
                    </div>
                    <div>
                        {/* <button className="border-2 mq900:hidden mq1700:block border-primary_color bg-primary_color transition text-white px-4 py-2 rounded font-semibold">
                            APPLY NOW
                        </button> */}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className='flex py-4 gap-5'>
                        <div className='flex flex-col gap-2'>
                            {/* <span className="font-semibold">Job Id:</span> */}
                            <span className="font-semibold">Job Type:</span>
                            <span className="font-semibold">Vacancy:</span>
                            <span className="font-semibold">Skills:</span>
                            <span className="font-semibold">Experience:</span>
                            <span className="font-semibold">Location:</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/* <span>G58726</span> */}
                            <span>{props.data.job_type}</span>
                            <span>{props.data.vacancy}</span>
                            <div>
                                <span className="bg-green-200 text-green-800 rounded-[3px] px-2 py-1 text-xs font-semibold mr-1">{props.data.skills}</span>

                            </div>
                            <span>{props.data.experience} Years</span>
                            <span>{`${props.data.city}, ${props.data.state}, ${props.data.country}`}</span>
                        </div>
                    </div>
                    {/* <button className="border-2 border-primary_color hover:bg-primary_color transition hover:text-white px-2 py-2 rounded mq900:hidden mq1700:block">
                        VIEW DETAILS
                    </button> */}
                </div>
                <div className="mq900:w-full flex  justify-end items-center  gap-3">
                    <Link to="/single-jobs" state={props.data}>
                        <button className="bg-gray-200 transition px-3 py-2 rounded  mq450:text-[13px] font-semibold ">
                            VIEW DETAILS
                        </button>
                    </Link>

                    <button className="border-2 border-primary_color bg-primary_color transition text-white px-4 py-2 rounded mq450:text-[13px] mq900:block mq1700:hidden font-semibold">
                        APPLY NOW
                    </button>
                </div>
            </div>
        </>
    )
}

export default Job_Card_Job_page