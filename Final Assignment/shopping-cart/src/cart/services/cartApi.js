import axios from "axios";

const endpoint = "http://localhost:3030/cart";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function getById(id){
    return axios.get(`${endpoint}/${id}`).then(response => response.data);
}

// function save(productData){
//     if (productData.id === 0){
//         return axios.post(endpoint, productData)
//             .then(response => response.data);
//     } else {
//         return axios.post(`${endpoint}/${productData.id}`, productData)
//             .then(response => response.data);
//     }
// }

function save(item){
    if (item.id === 0){
        return axios.post(endpoint,item ).then(response => response.data);
    }
    return axios.put(`${endpoint}/${item.id}`,item).then(response => response.data);
}

function remove(productData){
    return axios
      .delete(`${endpoint}/${productData.id}`)
      .then(response => response.data);
}


export default {
    getAll,
    getById,
    save, 
    remove
};