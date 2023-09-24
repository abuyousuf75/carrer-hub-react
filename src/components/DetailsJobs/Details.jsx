import { Link, useLoaderData, useParams } from "react-router-dom";
import img1 from '../Images/bg1.png'
import img2 from '../Images/bg2.png'
import {MdOutlineAttachMoney} from 'react-icons/md'
import { saveJobApplication } from "../../utility/Localstorage";
import { toast } from "react-toastify";


const Details = () => {
   const jobs =  useLoaderData();
   const {id} = useParams();
   const jobInt = parseInt(id)
   const job = jobs.find(job => job.id ===jobInt) ;
    const handelApplyJob = ()=>{
       saveJobApplication(jobInt)
       toast('Sucessfuly applied')
      
    }
    return (
        <section className="container">
             <div className="pt-10 pb-10 ">
               <div className="absolute left-0 top-0 mt-20"> <img src={img1}alt="" /></div>
               <div className="absolute right-0 top-0 "> <img src={img2}alt="" /></div>
             <h1 className="text-3xl font-bold text-center">Job Details </h1>
             </div>
            <div className="grid md:grid-cols-4 gap-4 mt-28 mb-20">
                <div className=" md:col-span-3 p-4">
                    <h2 className="text-xl text-[#1A1919]"><span className="font-bold">Job Description: </span>{job.job_description} </h2>
                    <h2 className="text-xl text-[#1A1919] mt-10"><span className="font-bold">Job Responsibility: </span>{job.job_responsibility} </h2>
                    <h2 className="text-xl text-[#1A1919] mt-10"><span className="font-bold">Educational Requirements: </span>{job.educational_requirements} </h2>
                    <h2 className="text-xl text-[#1A1919] mt-10"><span className="font-bold">Experiences: </span>{job.experiences} </h2>
                </div>
                <div className="items-bg p-4">
                    <div className="detals border-b ">
                        <h2 className="text-xl font-bold mb-3">Job Details</h2>
                    </div>
                        <div className="flex mt-6 gap-2 items-center text-xl">
                        <MdOutlineAttachMoney></MdOutlineAttachMoney>
                        <h4 className="font-bold">Salary:<span>{job.salary}(m)</span></h4>
                        </div>
                        <div className=" mt-6 gap-2 items-center text-xl">
                        <h4 className="font-bold">Job Title:</h4>
                        <span>{job.job_title}</span>
                        <div className="border-b mt-4  font-bold"><h3>Contact Information</h3></div>
                        </div>
                    <div className="contact">
                        <div className=" mt-2">
                        <h2 className="text-xl "><span className="font-bold">Phone:</span>{job.contact_information.phone}</h2>
                        </div>
                        <div className="flex mt-2">
                        <h2 className="text-xl "><span className="font-bold">Email:</span>{job.contact_information.email}</h2>
                        </div>
                        <div className="flex mt-2">
                            <h2 className="text-xl "><span className="font-bold">Address:</span>{job.contact_information.address}</h2>
                        </div>
                    </div>
                   <div className="mt-4">
                  <Link to='/appliedJobs'>
                  <button onClick={handelApplyJob} className="w-full px-6 py-3 rounded text-white btn-bg" >Apply Now</button>
                  </Link>
            
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Details;