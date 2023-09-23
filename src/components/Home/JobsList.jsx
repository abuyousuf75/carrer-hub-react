import "./jobs.css";
const JobsList = ({ jobs }) => {
  const {
    id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,} = jobs;

  return (
    <div className="border p-6 rounded">
      <figure>
        <img src={logo} alt="companyLogo"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mt-5">
         {job_title}
        </h2>
        <p className="font-semibold"> {company_name}</p>
        <div className="card-actions ">
         <button  className="px-5 py-2 font-extrabold bordr-btn rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
         <button className="px-5 py-2 font-extrabold  rounded border-[#7E90FE] mr-4 text-[#7E90FE] bordr-btn">{job_type}</button>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
