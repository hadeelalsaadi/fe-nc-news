import axios from 'axios'
const api= axios.create({
    baseURL: 'https://build-api-ncnews.onrender.com/api'
})

export const fetchAllArticles =(slug, sort_by,order)=>{
    const queryObj = { topic: slug , sort_by: sort_by, order: order};
return api.get(`/articles`, {
    params: queryObj}).then(({data})=>{
    return data.articles
}).catch((err)=>{
    console.log(err)
    return Promise.reject(err.response)
})
}
export const  getArticleById=(article_id)=>{
    return api.get(`articles/${article_id}`).then(({data})=>{
        return data.article
    }).catch((err)=>{
        return Promise.reject(err.response)
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

export const deleteComent= (comment_id)=>{
   return api.delete(`/comments/${comment_id}`).then(({data})=>{
    return data.msg
   })
}
export const fetchAllTopics =()=>{
    return api.get(`/topics`).then(({data})=>{
       
        return data.topics
    })
    }
    
