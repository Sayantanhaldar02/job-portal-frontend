import React from 'react'
import Job_category_card from './Job_category_card'

const Job_category_section = () => {
  return (
    <section className='py-[50px]'>
      <div className='box-border py-7'>
        <p className='text-[40px] font-bold text-center'>Job <span className='text-primary_color'>Categories</span></p>
      </div>
      <div className='w-[50%] mq1325:w-[70%] mq900:w-[90%] mq450:w-[100%] mq450:text-[13px] mx-auto mb-10'>
        <p className='text-center'>Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
      </div>
      <div className='grid grid-cols-4 gap-10 mq1325:grid-cols-3 mq900:grid-cols-2 mq900:gap-2'>
        {
          Array.from({ length: 10 }, (_, i) => i + 1).slice(0, 8).map((i, j) => <Job_category_card />)
        }
      </div>
    </section>
  )
}

export default Job_category_section