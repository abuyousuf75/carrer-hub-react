import './Catagory.css'
import PropTypes from 'prop-types';
const CatagoryList = ({catagory}) => {
    const {logo,category_name,availability} = catagory;
    return (
        <div className="mb-20">
           <div className="ct-bg w-80 h-64 p-10 rounded">
           <div className="items-bg  p-10 w-32 h-32 rounded">
            <div className="w-30 h-30 ">  <img src={logo} alt="" /></div>
           </div>
            <h2 className="text-xl font-bold mt-2 mb-2">{category_name}</h2>
            <p>{availability}</p>
           </div>
        </div>
    );
};

CatagoryList.propTypes = {
    catagory:PropTypes.object,
}

export default CatagoryList;