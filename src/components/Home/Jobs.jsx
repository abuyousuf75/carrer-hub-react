import { useEffect, useState } from "react";
import JobsList from "./JobsList";

const Jobs = () => {
    const [jobsItems, setJobsItem] = useState([]);
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobsItem(data))
    },[])
    return (
        <section className="container ">
            <h2 className="text-center text-5xl font-bold mt-4">Featured Jobs</h2>
            <p className="text-center text-xl mt-8 mb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 gap-8 mb-10  ">
                    {
                        jobsItems.map(jobs =><JobsList key={jobs.id} jobs={jobs}></JobsList>)
                    }
                </div>
        </section>
    );
};

export default Jobs;