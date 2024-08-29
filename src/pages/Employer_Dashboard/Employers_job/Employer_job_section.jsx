import { useEffect, useState } from 'react';
import Job_table from './Job_table';
import { useNavigate } from 'react-router-dom';
import { useDeleteJobMutation, useGetAllJobsQuery } from '../../../reducers/ApiReducers/jobApi/jobApi';
import { toast } from 'react-toastify';

const Employer_job_section = () => {
    const navigate = useNavigate()

    const { data, isSuccess, isLoading, iserror, refetch, error } = useGetAllJobsQuery()
    const allJobsDetails = useGetAllJobsQuery()
    // console.log({ data, isSuccess, isLoading, iserror,error })

    useEffect(() => {
        refetch()
    }, [data])

    const [delete_job, delete_details] = useDeleteJobMutation()
    const deleteHandeler = async (id) => {
        await delete_job({ id: id })
        allJobsDetails.refetch()
    }

    useEffect(() => {
        if (delete_details.isSuccess) {
            toast.success("Job deleted!")
        }
    }, [delete_details.isSuccess, delete_details.isError])



    return (
        <>
            <div className="container mx-auto p-4 mt-10">
                <div className='w-full flex items-center justify-between'>
                    <h1 className="text-2xl font-bold mb-4">Manage Jobs</h1>
                    <button className="mb-4 border-2 border-primary_color p-2 px-4 rounded-[5px] hover:bg-primary_color hover:text-white transition-all " onClick={() => navigate("/employer-job-form")}>
                        Create a New Job
                    </button>
                </div>
                <Job_table jobs={data && data} isLoading={isLoading} deleteHandeler={deleteHandeler} />
            </div>
        </>
    )
}

export default Employer_job_section