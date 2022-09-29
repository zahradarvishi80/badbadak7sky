
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import Buck from "../component/BucketFill"
const Listbyid=({resortlist})=>{
    const text=useSelector(state=>state.Text.text)
    return(
        <div className="wrap">
        {resortlist.length > 0 && (
          <div className="item">
            {resortlist.filter((val)=>{
              if(text===""){
                return val
              }else if (val.title.toLowerCase().includes(text.toLowerCase())){
                return val
              }
            })
           
            .map((user,index) => (
                <div className="box" key={index} id={user.id}>
                     <nav>
                     <Link to={`/ResortDetails/${user.id}`} state={{props:user}}  >
                     <img  className="img" alt="resort" src={user.img}/> 
                     </Link> 
                     </nav>
                     <div className="text">
                     <p className="title"> {user.title}</p>
                      <div className="cart">
                     
                        <p className="price"> {user.price}</p>
                        <p  className="p">
                        : شروع قیمت رزرو برای 1 شب</p>
                        </div>
                     <Buck img={user.img} id={user.id} title={user.title} price={user.price} index={index} />
                    </div>
                    </div>
                    ))}
                </div>
                )}   
 </div>
    )
}
export default Listbyid