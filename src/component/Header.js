
import { useNavigate } from "react-router-dom"
import { setText } from "../redux/Slice/textSlice"
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { MyBucket } from "../Context";



const Header=({onSort})=>{
   const[listBucket,setListBucket]=useContext(MyBucket)
    const navigate=useNavigate()
    const dispatch=useDispatch()


    const bucket=()=>{
      if (listBucket.length===0) {
        alert("در ابتدا آیتم مورد نظرتو انتخاب کن")
      }else{
        navigate("/Bucket")
      }
    }
    return(
        <div className="container">
        <div className="boxSort">
        <button onClick={()=>onSort()} className="sort">بر اساس قیمت</button> </div>
       <div className="box2">
       <button onClick={()=>bucket()} className="sort">
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