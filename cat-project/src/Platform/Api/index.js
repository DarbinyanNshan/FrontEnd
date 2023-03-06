import axios from "axios";

export const GetCategories = () => {
    return  axios.get(`${ApiUrl}/categories` )
  }

export const GetCatImg = (page, id) => {
    return  axios.get(`${ApiUrl}/images/search?limit=10&page=${page}&category_ids=${id}` )
  }

  
  
export const  ApiUrl = "https://api.thecatapi.com/v1"
