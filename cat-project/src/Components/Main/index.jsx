import React, { useEffect, useState } from "react";
import "./style.css"
import { useParams } from "react-router-dom";
import { GetCatImg } from "../../Platform/Api";


export const Main = () =>{

    const { id } = useParams()
    const [catimg,setCatImg]  = useState([])
    const [pageCount, setPageCount] = useState(1)

    useEffect(()=>{

        GetCatsImgList(1, id)
       },[id])
 
    const GetCatsImgList = async (page, id) => {
     const result = await GetCatImg(page, id)
     if (result.data) {
        setCatImg(result.data)
      }
      }


    const MoreBtn = async (page, id )  =>{
    page++;
    const  result  = await GetCatImg( page, id)
        result.data.forEach(item => 
             {
              catimg.push(item);
             }
         )
        setPageCount(page)
        }

     const handleMoreBtn = () =>{
        MoreBtn(pageCount,id)
     }

   return <>
             <div className="main" >
                     {catimg.map ((item, index) => {
                     return <div key={index}>
                     <img className="img" src={item.url}  alt="img" />
             </div>
               }) }
    
             </div>
                <button onClick={()=> handleMoreBtn(pageCount)} className="more">More </button>
       </>

}