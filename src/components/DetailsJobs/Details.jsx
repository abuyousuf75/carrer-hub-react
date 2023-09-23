import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
   const jobs =  useLoaderData();
   const {id} = useParams();
   const jobInt = parseInt(id)
   const job = jobs.find(job => job.id ===jobInt) 
    return (
        <section className="container">
             <h1>Job details of {id}</h1>
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" border md:col-span-3">
                    <h2 className="text-4xl">heloo</h2>
                </div>
                <div className="border">
                    <h2 className="2xl">something</h2>
                    <button>apply now</button>
                </div>
            </div>
        </section>
    );
};

export default Details;