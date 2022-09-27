import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import resortlist from "../json/resortlist"
import "../style/ResortList.css"
const ResortList=()=>{
    const [sorted,setSorted]=useState(0)
    const [text, setText] = useState("");
    const navigate=useNavigate()
    return(
        <div className="main"> 
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
        }</div>
      <div className="box2">
        <button onClick={()=>navigate("/Bucket")} className="save">
          ذخیره شده
        </button>
        <input
        className="input"
        placeholder="آیتم مورد نظر را وارد کنید"
        onChange={(e)=>setText(e.target.value)}
        />  
       
        </div>
        </div>

        <div className="wrap">
        {resortlist.length > 0 && (
          <div className="item">
            {resortlist.filter((val)=>{
                // return

                
              if(text===""){
                return val
              }else if (val.title.toLowerCase().includes(text.toLowerCase())){
                return val
              }
            // 
            })
            .map(user => (
                <div className="box" key={user.id} id={user.id}>
                     <nav>
                     <Link to={`/ResortDetails/${user.id}`} state={{props:user}}  >
                     <img  className="img" alt="resort" src={user.img}/> 
                     </Link> 
                     </nav>
                     <p className="title"> {user.title}</p>
                      <p className="title"> {user.price} :شبی </p> 
               
              </div>
            ))}
          </div>
        )}   
        </div>
        </div>
    )
}
export default ResortList
