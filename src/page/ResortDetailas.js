import { useLocation} from "react-router-dom";
import "../style/ResortDetails.css"
import {BsBookmark} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"
import { useState } from "react";
const ResortDetails=()=>{
    const location = useLocation();
    const [fill , setFill]=useState(0)
    return(
        <div className="main">
         <img alt={location.state.props.title} className="img2" src={location.state.props.img}/>
         <div className="div">
         <p className="title1">{location.state.props.title} </p>
        {
            fill===0?(
                <BsBookmark onClick={()=>setFill(1)} />
            ):(
                <BsBookmarkFill onClick={()=>setFill(0)}/>
            )
        }
        </div>
        {/* */}
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
