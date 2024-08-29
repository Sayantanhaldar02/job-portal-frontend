import newsletter from '../../assets/newsletter.png'

const Get_in_touch_section = () => {
    return (
        <>
            <div className="getInTouchImage bg-newsletter-pattern w-[100%] mt-[50px] flex items-center justify-around bg-no-repeat bg-cover " >
                <div className="flex w-[50%] flex-col justify-start gap-4 p-10 mq900:w-[100%] ">
                    <div className="space-y-2">
                        <h2 className="text-[40px] font-bold text-white">Subscribe to our newsletter</h2>
                        <p className="text-[20px] font-bold text-gray-100">Get the latest updates.</p>
                    </div>
                    <form className="w-full">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <input id="email" type="email" placeholder="Enter your email" className="flex-1 p-3 rounded-[5px]" />
                                <button className='bg-[#00CC8E] text-white p-3 rounded-[5px]' type="submit">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=' mq900:hidden'>
                    <img src={newsletter} alt="" />
                </div>
            </div>
        </>
    )
}

export default Get_in_touch_section