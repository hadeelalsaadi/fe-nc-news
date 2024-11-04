import axios from 'axios'
const api= axios.create({
    baseURL: 'https://build-api-ncnews.onrender.com/'
})
export const fetchAllArticles =()=>{
return api.get(`/api/articles`).then(({data})=>{
    console.log(data)
  
    return data.articles
})
}