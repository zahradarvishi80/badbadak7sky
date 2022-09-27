
import "../style/ResortList.css"
import { useDispatch, useSelector } from "react-redux"
const Bucket=()=>{
const listBucket=useSelector(state=>state.Bucket.listBucket)
    return(
        <div>
         {listBucket.map((user,index)=>{
            return(
                <div className="box" key={index} id={user.id}>
                
                     <img  className="img" alt="resort" src={user.img}/> 
                   
                     <p className="title"> {user.title}</p>
                      <p className="title"> {user.price} :شبی </p> 
                     {/* <Buck img={user.img} id={user.id} title={user.title} price={user.price} index={index} /> */}
               
                    </div>
            )
        })}
        </div>
        )}
export default Bucket