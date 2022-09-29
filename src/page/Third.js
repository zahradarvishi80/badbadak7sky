import End from "../component/End"
import Header from "../component/Header"
import Listbyid from "../component/ListbyId"
import resortlist from "../json/resortlist"
import { useState } from "react"
import Sortbyprice from "../component/Sortedbyprice"
const Third=()=>{
    const[click,setClick]=useState(0)
    const [list,setList]=useState(resortlist.slice(40,54))

    const onSort=()=>{
      setClick(1)
      list.sort((a,b)=>{
        return a.price-b.price
       })
      setList(list)
     console.log("list",list);
    }

    return(
        <>
        
        <Header onSort={onSort}/>
        {click===0?(
        <Listbyid  resortlist={resortlist.slice(40,54)}/>
        ):(
         <Sortbyprice list={list} setList={setList} />
        )}
        <End/>
        </>
    )
}
export default Third