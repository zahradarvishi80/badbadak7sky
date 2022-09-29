import { useState } from "react";
import resortlist from "../json/resortlist"
import "../style/ResortList.css"
import Header from "../component/Header"
import Sortbyprice from "../component/Sortedbyprice";
import Listbyid from "../component/ListbyId";
import End from "../component/End";

const ResortList=()=>{
  const [list,setList]=useState(resortlist.slice(0,20))
  const[click,setClick]=useState(0)


    const onSort=()=>{
      setClick(1)
      list.sort((a,b)=>{
        return a.price-b.price
       })
      setList(list)
     console.log("list",list);
    }
    return(
        <div className="main"> 
        <Header onSort={onSort} />
        {click===0?(
        <Listbyid resortlist={resortlist.slice(0,20)}/> 
        ):(
        <Sortbyprice list={list} setList={setList} />
        )}
        <End/>
        </div>
        )}
export default ResortList
