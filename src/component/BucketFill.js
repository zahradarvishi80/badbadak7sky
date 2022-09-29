import { useContext } from "react"
import {BsBookmarkFill} from "react-icons/bs"
import { MyBucket } from "../Context"
import "../style/ResortList.css"
const Buck=({id,img,title,price})=>{
    const[listBucket,setListBucket]=useContext(MyBucket)
    const fillin=()=>{
    
        let temp=[...listBucket]
        const item={id,title,price,img}
        temp.push(item)
       setListBucket([...temp])
        console.log("temmp",temp);
        alert("آیتم مورد نظر ذخیره شد")
    }
 
    return(
        <div>  
           <button className="button" onClick={()=>fillin()}>
             <BsBookmarkFill size={13} fill="black" />
                ذخیره
           </button>
         </div>
    )
}

export default Buck

