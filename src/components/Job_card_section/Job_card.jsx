import { Link } from 'react-router-dom'
import dummy_logo from '../../assets/dummy_logo.png'
import { image_base_url } from '../../Constant/constant'

const Job_card = (props) => {
    return (
        <>
            {
                props.data &&
                <div className="w-full max-w-md border-[1px]  rounded-[5px] p-2 py-[20px]">
                    <div>
                        <div className="flex justify-between items-center gap-4 py-2">
                            <div className="font-medium bg-green-200 text-[10px] text-primary_color px-[5px] py-[3px] rounded-[3px]">{props.data.job_type}</div>
                            <div className="tfont-medium bg-pink-200 text-[10px] text-[#f762be] px-[5px] py-[3px] rounded-[3px]">{props.data.vacancy} openings</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src={props.data.company_logo}
                                width="100"
                                height="100"
                                alt="Company Logo"
                                className="rounded-[50%]"
                                style={{ aspectRatio: "48/48", objectFit: "cover" }}
                            />
                            <div>
                                <h3 className="text-[18px] text-center font-semibold">{props.data.job_title}</h3>
                                <div className="text-muted-foreground text-center">{props.data.company_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] mt-4'>
                        <Link to="/single-jobs" state={props.data}>
                            <button className='block mx-auto w-[70%] px-[20px] py-[7px] border-[1px] border-primary_color rounded-[5px] hover:bg-primary_color hover:text-white'>Apply Now</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Job_card