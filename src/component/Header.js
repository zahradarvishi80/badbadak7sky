import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setText } from "../redux/Slice/textSlice"
import { useDispatch } from "react-redux";

const Header=()=>{
    const [sorted,setSorted]=useState(0)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    return(
        <div className="container">
        <div className="boxSort">
     {
        sorted===0?(
            <button onClick={()=>setSorted(1)} className="sort">مرتب سازی</button>
        ):(
            <div onClick={()=>setSorted(0)} className="sort2">
            <button className="click" onClick={()=>setSorted(1)} >مرتب سازی</button>
            <div className="line"></div>
             <button className="click">بر اساس قیمت</button>
             <button className="click">بر اساس عنوان</button>
             </div>
        )
    }
    </div>
  <div className="box2">
    <button onClick={()=>navigate("/Bucket")} className="sort">
      ذخیره شده
    </button>
    <input
    className="input"
    placeholder="آیتم مورد نظر را وارد کنید"
    onChange={(e)=>dispatch(setText(e.target.value))}
    />  
   
    </div>
    </div>

    )
}
export default Header