import React, {  useState } from 'react';
import Job_Card_Job_page from '../../components/Job_Card_Job_page/Job_Card_Job_page';
import Job_filter_form from '../../components/Job_filter_form/Job_filter_form';
import { useGetAllJobsQuery } from '../../reducers/ApiReducers/jobApi/jobApi';

const JobCard = () => {
    const [filters, setFilters] = useState({ job_type: '', city: '', job_title: '' });
    const { data, isSuccess, isError, isLoading, refetch  } = useGetAllJobsQuery(filters)

    const handelgetFilter = ({ jobTitle, jobType, city }) => {
        setFilters({ job_type: jobType, city: city, job_title: jobTitle })
        refetch()
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className='w-[100%] mb-[80px] '>
                <div className="w-[100%] mb-10 ">
                    <Job_filter_form handelgetFilter={handelgetFilter} />
                </div>
                <div className='px-[40px] flex-1 min-h-[100vh]  grid grid-cols-1 gap-3 mq900:grid-cols-1 mq900:px-[10px] '>
                    {isSuccess && data && data.map((details, index) => isLoading ? "Loading..." : <Job_Card_Job_page data={details} index={index} key={index} />)}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default JobCard;
