import axios from 'axios'
const api= axios.create({
    baseURL: 'https://build-api-ncnews.onrender.com/api'
})
export const fetchAllArticles =()=>{
return api.get(`/articles`).then(({data})=>{
   
    return data.articles
})
}
export const  getArticleById=(article_id)=>{
    return api.get(`articles/${article_id}`).then(({data})=>{
        return data.article
    })
}
export const getComments= (article_id)=>{
    return api.get(`articles/${article_id}/comments`).then(({data})=>{
        return data.comments
    })
}

export const incrementVotes= (article_id,votes)=>{
    return api.patch(`articles/${article_id}`,{inc_Votes:votes}).then(({data})=>{
        console.log(data.article.votes)
        return data.article.votes
    })

}