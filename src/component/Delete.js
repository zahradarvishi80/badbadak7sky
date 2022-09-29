import {BsBookmark,} from "react-icons/bs"
import "../style/ResortList.css"
import { useContext } from "react"
import { MyBucket } from "../Context"
const Delete=({index})=>{
    const[listBucket,setListBucket]=useContext(MyBucket)
    const deleteItem = (index) => () =>{
 
      setListBucket((items) => items.filter((_, i) => i !== index))}
       console.log("oooooooooooooooo",listBucket);

    return(
        <div>  
           <button onClick={deleteItem(index)} className="button">
             <BsBookmark size={13} fill="red" />
                حذف
           </button>
         </div>
    )
}

export default Delete
