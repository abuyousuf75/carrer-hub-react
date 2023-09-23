import { useEffect } from "react";
import { useState } from "react";
import CatagoryList from "./CatagoryList";

const Catagory = () => {
    const [jobCatagory, setCatagory] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then (data => setCatagory(data))
    },[])
    return (
        <section className="container ">
            <h2 className="text-center text-5xl font-bold mt-20">Job Category List</h2>
            <p className="text-center text-xl mt-8 mb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid md:grid-cols-4 justify-between">
           {
                jobCatagory.map(catagory => <CatagoryList key={catagory.id} catagory={catagory}></CatagoryList>)
            }
           </div>
        </section>
    );
};

export default Catagory;