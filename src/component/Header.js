import { useState } from "react"
import "../style/Header.css"
// import resortlist from "../json/resortlist"

const Header=({resortList})=>{
    const [sorted,setSorted]=useState(0)
    const [text, setText] = useState("")



    // const SortTitle=()=>{
    //     // const titr=[...resortlist]
    //     resortlist.sort((a,b)=>{
    //    return a.title - b.title
    //     })
    //     // setPoems(titr)
    //   }
    
    
    //   const SortPrice=()=>{
    //     // const auth=[...resortlist]
    //     resortlist.sort((a,b)=>{
    //       console.log(a.author);
    //       return a.author - b.author
    //     })
  
    //   }
    
    const keys=["title","price","description"]
    const search=(data)=>{
    return data.filter(item=>
        keys.some((key)=>item[key].toLowerCase().includes(text))
        )
        }
    return(
        <div className="container">
            {/* <button onClick={()=>SortTitle()} > title</button>
             <button  onClick={()=>SortPrice()}> price</button> */}
        <div className="boxSort">
        {
            sorted===0?(
                <button onClick={()=>setSorted(1)} className="sort">مرتب سازی</button>
            ):(
                // <></>
                <div onClick={()=>setSorted(0)} className="sort2">
                <button className="click" onClick={()=>setSorted(1)} >مرتب سازی</button>
                 <button className="click">بر اساس قیمت</button>
                 <button className="click">بر اساس عنوان</button>
                 </div>
            )
        }
        </div>
        <div className="filter">
        <input
        placeholder="Search..."
        onChange={(e)=>setText(e.target.value)}
        />
        
        </div>
        </div>
    )
}

export default Header