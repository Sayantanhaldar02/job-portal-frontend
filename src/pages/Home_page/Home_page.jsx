import { useEffect } from "react"
import Footer from "../../components/Footer/Footer"
import Get_in_touch_section from "../../components/Get_in_touch_section/Get_in_touch_section"
import Hero_section from "../../components/Hero_section/Hero_section"
import Job_card_section from "../../components/Job_card_section/Job_card_section"
import Job_category_section from "../../components/Job_category_section/Job_category_section"
import Navbar from "../../components/Navbar/Navbar"
import { useGetAllJobsQuery } from "../../reducers/ApiReducers/jobApi/jobApi"


const Home_page = () => {

  const { data, isSuccess, isError,refetch } = useGetAllJobsQuery()
  useEffect(()=>{
    refetch()
  },[data])
  // console.log(data)


  return (
    <>
      {/* <Navbar /> */}
      <div className="boox-border px-[50px] mq900:px-[15px]">
        <Hero_section />
      </div>
      <div className="boox-border px-[70px] mq450:px-[15px]">
        {isSuccess && data && <Job_card_section data={data} />}
        <Job_category_section />
      </div>
      <Get_in_touch_section />
      {/* <Footer /> */}
    </>
  )
}

export default Home_page