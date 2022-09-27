import {BsBookmark,} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import {setListBucket} from "../redux/Slice/BucketSlice"
import "../style/ResortList.css"
const Buck=({id,img,title,price})=>{
    const listBucket=useSelector(state=>state.Bucket.listBucket)
    const dispatch=useDispatch()
    const fillin=()=>{
    
        let temp=[...listBucket]
        const item={id,title,price,img}
        temp.push(item)
        dispatch(setListBucket([...temp]))
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





// const [fill,setFill]=useState(0)

    // const[list,setList]=useContext(MyList)

    // const Save=()=>{
    //     setFill(1)
    //     let temp = [...list]
    //     const items = {img, title, price,}
    //     temp.push(items)
    //     console.log("temp2", temp);
    //     setList([...temp])
    //   }
    
    // const UnSave=()=>{
    //     setFill(0)
    // }