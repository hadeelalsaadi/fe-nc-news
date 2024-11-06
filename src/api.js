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

export const incrementVotes= (article_id)=>{
    return api.patch(`articles/${article_id}`,{inc_votes: 1}).then(({data})=>{
        return data.article.votes
    })

}
export const postNewComment=(article_id,newComment, username)=>{
    return api.post(`articles/${article_id}/comments`,{username: username, body: newComment} ).then(({data})=>{
        return data.newComment

    })

}