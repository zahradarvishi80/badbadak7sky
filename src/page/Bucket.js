import { useContext, useState } from "react"
import "../style/ResortList.css"
import { useSelector } from "react-redux"
import HeaderBucket from "../component/HeaderBucket"
import Delete from "../component/Delete"
import { MyBucket } from "../Context"
const Bucket=()=>{
const text=useSelector(state=>state.Text.text)
// const listBucket=useSelector(state=>state.Bucket.listBucket)
const[listBucket,setListBucket]=useContext(MyBucket)

    return(
        <div className="main">
            <HeaderBucket/>
            <div className="wrap">
      
          {listBucket.length > 0 && (
          <div className="item">
            {listBucket.filter((val)=>{
              if(text===""){
                return val
              }else if (val.title.toLowerCase().includes(text.toLowerCase())){
                return val
              }
            })
            .map((user,index) => (
                <div className="box" key={index} id={user.id}>
                    
                     <img  className="img" alt="resort" src={user.img}/> 
  
                     <div className="text">
                     <p className="title"> {user.title}</p>
                      <div className="cart">
                     
                        <p className="price"> {user.price}</p>
                        <p  className="p">
                        : شروع قیمت رزرو برای 1 شب</p>
                        </div>
                     <Delete img={user.img} id={user.id} title={user.title} price={user.price} index={index} />
                    </div>
                    </div>
                    ))}
                </div>
                )}   
        </div>
        </div>
        )}
export default Bucket