import axios from 'axios'
const api= axios.create({
    baseURL: 'https://build-api-ncnews.onrender.com/api'
})
export const fetchAllArticles =()=>{
return api.get(`/articles`).then(({data})=>{
    console.log(data)
  
    return data.articles
})
}
export const  getArticleById=(article_id)=>{
    return api.get(`articles/${article_id}`).then(({data})=>{
        return data.article
    })
}