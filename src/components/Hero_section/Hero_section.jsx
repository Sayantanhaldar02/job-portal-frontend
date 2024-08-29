import job_hero_image from '../../assets/job_hero_section.png'

const Hero_section = () => {
    return (
        <>
            <div className='flex items-center justify-around box-border mq900:flex-col-reverse py-[70px]'>
                <div className=''>
                    <p className='text-[70px] font-bold text-gray-900 mq900:text-[40px]  '><span className=' text-primary_color'>Search</span> <span >Between</span> More Than <span className=' text-primary_color'>50,000</span> Open Jobs<span className=' text-primary_color'>.</span></p>

                    <form className=' flex flex-wrap gap-3 box-border py-7'>
                        <input type="text" placeholder="Search Keywords..." className="flex-1 p-2 border border-border focus:outline-none focus:ring focus:ring-ring rounded-[5px] border-primary_color " />

                        <input type="text" placeholder="Search location..." className="flex-1 p-2 border border-border focus:outline-none focus:ring focus:ring-ring rounded-[5px] border-primary_color " />

                        <input type="text" placeholder="Search Category..." className="flex-1 p-2 border border-border focus:outline-none focus:ring focus:ring-ring rounded-[5px] border-primary_color " />

                        <button className="bg-primary_color text-white p-3 rounded-[5px] w-[100%] ">SEARCH</button>
                    </form>
                </div>
                <div className=''>
                    <img src={job_hero_image} alt="hero-section-image" className='w-[100%]' />
                </div>
            </div>
        </>
    )
}

export default Hero_section