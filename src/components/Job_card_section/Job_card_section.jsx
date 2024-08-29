import React from 'react'
import Job_card from './Job_card'


const Job_card_section = (props) => {

    
    return (
        <>
            <div className='py-[50px]'>
                <div className='box-border py-7'>
                    <p className='text-[40px] font-bold text-center'>Recent <span className='text-primary_color'>Jobs</span></p>
                </div>

                <div className='grid grid-cols-4 gap-10 mq1325:grid-cols-3 mq900:grid-cols-2 mq450:grid-cols-1'>
                    {
                         props.data && props.data.slice(0,8).map((data, index)=><Job_card data={data} key={index} />)
                    }
                </div>
                <div className='mt-[30px]'>
                    <button className='block mx-auto px-[20px] py-[7px] border-[1px] border-primary_color hover:bg-primary_color hover:text-white rounded-[5px]'>Load More</button>
                </div>
            </div>

        </>
    )
}

export default Job_card_section