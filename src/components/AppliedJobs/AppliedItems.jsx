
import {FaLocationDot} from 'react-icons/fa6';
import {MdOutlineAttachMoney} from 'react-icons/md'
import { Link } from 'react-router-dom';
const AppliedItems = ({job}) => {
    console.log(job)
const {logo,company_name,job_title,remote_or_onsite,job_type,salary,location,id} = job;
    return (
        <div className="border flex rounded p-8  items-center justify-between">
           
            <div className="company flex gap-8">
            <div className="logo p-4 bg-[#ddd] rounded w-52 h-52 items-center justify-center flex ">
                <img className="" src={logo} alt="log" />
            </div>
                <div className="title">
                    <h2 className="font-bold text-2xl">{job_title}</h2>
                    <p className="font-medium text-xl"> {company_name}</p>
                    <div className="mt-4">
                    <button  className="px-5 py-2 font-extrabold bordr-btn rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</ button>
                    <button className="px-5 py-2 font-extrabold  rounded border-[#7E90FE] mr-4 text-[#7E90FE] bordr-btn">{job_type}</button>
                    </div>
                   <div className='mt-4 flex gap-3 items-center text-xl'>
                        <FaLocationDot ></FaLocationDot><span>{location}</span>
                        <MdOutlineAttachMoney></MdOutlineAttachMoney><span>{salary}</span>
                   </div>
                </div>
            </div>
            <div className="button ">
            <Link to={`/job/${id}`}>
                <button className="py-3 px-6 rounded btn-bg mt-4">View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default AppliedItems;