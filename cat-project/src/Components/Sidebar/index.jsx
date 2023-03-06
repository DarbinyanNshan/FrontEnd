import React, { useState, useEffect } from "react";
import "./style.css"
import { GetCategories } from "../../Platform/Api";
import { NavLink } from "react-router-dom";





export const Sidebar = () => {
      
    
    const [cat,setCat]  = useState([])
    useEffect(()=>{
    GetCategoriesList()
    },[])
 
    const GetCategoriesList = async () => {
        const result = await  GetCategories()
        if (result.data) {
          setCat(result.data)
        }
    }
    


    return  <div className="sidebar">
           {cat.map ((item, index) => {
                 return <div key={index}>
                    <ul>
                        <li className="li"><NavLink className="title" to={`/${item.id}`} >{item.name}</NavLink></li>
                    </ul>
            </div>
           }) }
    </div>
}