import { useLocation} from "react-router-dom";
import "../style/ResortDetails.css"
import Buck from "../component/BucketFill";

const ResortDetails=()=>{
    const location = useLocation();
    return(
        <div className="main">
         <img alt={location.state.props.title} className="img2" src={location.state.props.img}/>
         <div className="div">
         <p className="title1">{location.state.props.title} </p>
         <Buck img={location.state.props.img} title={location.state.props.title} id={location.state.props.id} price={location.state.props.price} />
        </div>
        <div className="div2">
         <p className="describtion">{location.state.props.describtion} </p>
        </div>
        <div className="div">
         <p className="title1">{location.state.props.price} </p>
        </div>
        </div>
    )
}
export default ResortDetails
