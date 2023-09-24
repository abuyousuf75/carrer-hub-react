import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";
import AppliedItems from "./AppliedItems";
import img1 from '../Images/bg1.png'
import img2 from '../Images/bg2.png'
const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id)) ;
           setAppliedJobs(jobsApplied)
        }
    },[jobs])

    return (
       <section className="container">
        <div className="pt-10 pb-10 ">
               <div className="absolute left-0 top-0 mt-20"> <img src={img1}alt="" /></div>
               <div className="absolute right-0 top-0 "> <img src={img2}alt="" /></div>
             <h1 className="text-3xl font-bold text-center">Applied jobs {appliedJobs.length}</h1>
             </div>
           <div className="mt-28 p-8 grid gap-4">
           {
                appliedJobs.map(job => <AppliedItems key={job.id} job={job}></AppliedItems>)
            }
           </div>
       </section>
       
    );
};

export default AppliedJobs;