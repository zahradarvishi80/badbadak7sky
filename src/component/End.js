import { useNavigate } from "react-router-dom"
import "../style/End.css"


const End=()=>{

const navigate=useNavigate()
    return(
      <div className="end"> 
      
      <button onClick={()=>navigate("/")} className="button1">1</button>
      <button onClick={()=>navigate("/Secound")} className="button1">2</button>
      <button onClick={()=>navigate("/third")} className="button1">3</button>
   
      </div>
    )
}
export default End