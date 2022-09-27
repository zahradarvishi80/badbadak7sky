import {BsBookmark,} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import {setListBucket} from "../redux/Slice/BucketSlice"
import "../style/ResortList.css"
const Delete=({id,img,title,price,index})=>{
    // const listBucket=useSelector(state=>state.Bucket.listBucket)
    const dispatch=useDispatch()
    // const fillout=()=>{
    //     dispatch(
    //         deleteItem({
    //             id:id
    //         })
    //     )
    //     alert("آیتم مورد نظر حذف شد")
    // }
    ////////////////////////
    // const fillout = (id) => () =>
    // dispatch(setListBucket((items) => items.filter((_, i) => i !== id)))
    /////////////////////
    // const fillout=(index)=>{
    //     dispatch(setListBucket(i=>
    //         i.filter(item=>{
    //             return item.id !==index
    //         })
    //         ))
    // }
    return(
        <div>  
           <button className="button" 
    
           >
             <BsBookmark size={13} fill="black" />
                حذف
           </button>
         </div>
    )
}

export default Delete





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