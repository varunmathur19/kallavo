import { API_URL } from "../config/api";
import axios from "axios";

// const API_URL = "http://localhost:3001/api";
//login api
export const login = async (data) => {
  const response = await axios.post(
    `${API_URL}/login`,
    data
  );

  return response.data;
};

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

export const getCollectionHome = async () => {
  const response = await axios.get(
    `${API_URL}/collection-home`
  );

  return response.data;
};