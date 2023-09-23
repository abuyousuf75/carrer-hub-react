import { useEffect, useState } from "react";
import JobsList from "./JobsList";

const Jobs = () => {
    const [jobsItems,setJobsItem] = useState([]);
    // first i loaded all data
    // then just loaded how many data i need and slice it,
    // after done i again show it
    const [dataLength, setDataLength] = useState(4)
    useEffect(()=>{
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data =>setJobsItem(data) )
    },[])
    return (
        <section className="container ">
            <h2 className="text-center text-5xl font-bold mt-4">Featured Jobs</h2>
            <p className="text-center text-xl mt-8 mb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 gap-8 mb-6  ">
                    {
                       jobsItems.slice(0,dataLength).map(jobs =><JobsList key={jobs.id} jobs={jobs}></JobsList>)
                    }
                </div>
                <div className={dataLength ===jobsItems.length ? 'hidden' : 'text-center mb-20'}>
              <button onClick={()=>setDataLength(jobsItems.length)} className="py-4 px-6 rounded btn-bg">See All Jobs</button>
              </div>
        </section>
    );
};

export default Jobs;