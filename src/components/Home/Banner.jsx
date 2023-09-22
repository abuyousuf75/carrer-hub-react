import user from '../Images/user.png';
const Banner = () => {
    return (
        <section className="container ">
           <div className="banner-main grid  md:grid-cols-2 items-center">
            <div className="banner-text ">
                <h2 className="text-[#1A1919] text-7xl font-bold pr-28 mb-8 ">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h2>
                <p className="md:w-3/4 text-xl font-medium pb-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-bg px-8 py-4 rounded">Get Started</button>
            </div>
            <div className="banner-img">
            <img src={user} alt="" />
            </div>
           </div>
        </section>
    );
};

export default Banner;