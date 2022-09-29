
import { useNavigate } from "react-router-dom"
import { setText } from "../redux/Slice/textSlice"
import { useDispatch } from "react-redux";



const HeaderBucket=()=>{
    
    const navigate=useNavigate()
    const dispatch=useDispatch()



    return(
        <div className="container">
        <div className="boxSort">
        <button onClick={()=>navigate("/")} className="click">صفحه اصلی</button>
   
         </div>
         <div className="box3">
    

    <input
    className="input"
    placeholder="آیتم مورد نظر را وارد کنید"
    onChange={(e)=>dispatch(setText(e.target.value))}
    />  
   
    </div>
    </div>

    )
}
export default HeaderBucket