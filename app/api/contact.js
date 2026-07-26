import { API_URL } from "../config/api";
import axios from "axios";


export const contactApi = async (formData) => {

    const response = await fetch(
        `${API_URL}/contact`,
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }
    );


    const data = await response.json();


    if(!response.ok){
        throw new Error(
            data.message || "Something went wrong"
        );
    }


    return data;

};

// export const getHomeProducts = async () => {
//   const response = await axios.get(`${API_URL}/home-page-product?page=${page}`);
//   return response.data;
// };

export const getHomeProducts = async () => {
  const response = await axios.get(
    `${API_URL}/home-page-product`
  );

  return response.data;
};

export const updateHomeProductStock = async (id, data) => {
  const response = await axios.put(
    `${API_URL}/edit-home-product/${id}`,
    data
  );

  return response.data;
};