import axios from 'axios';

const apiUrl ='https://boredgame-backend.herokuapp.com/'


const api = axios.create({
  baseURL: apiUrl
});

export default api;

export const newUser = (props) => 
axios({
  method: "post",
  url: `${apiUrl}signup`,
  data: props,
})
.then((response) => {
  console.log(response.data)
  return response.data;
})
.catch((error) => {
  console.log(error)
})

export const loginUser = (props) => {
  axios({
    method: "post",
    url: `${apiUrl}login`,
    data: props,
  })
  .then((response) => {
    console.log(response.data)
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })
 
}