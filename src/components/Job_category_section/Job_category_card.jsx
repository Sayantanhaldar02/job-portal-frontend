import { Link } from 'react-router-dom'
import dummy_logo from '../../assets/dummy_logo.png'

const Job_category_card = () => {
    return (
        <>
            <Link to="#" className="w-full max-w-sm p-6  border-[1px] shadow mq450:p-4 mq450:shadow-none ">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={dummy_logo}
                        width="100"
                        height="100"
                        alt="Company Logo"
                        className="rounded-[50%]"
                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <h3 className="text-xl font-semibold mq450:text-[15px]">Software Engineering</h3>
                    <p className="font-medium bg-green-200 text-[14px] text-primary_color px-[5px] py-[3px] rounded-[3px]">
                       100+ jobs
                    </p>
                </div>
            </Link>
        </>
    )
}

export default Job_category_card