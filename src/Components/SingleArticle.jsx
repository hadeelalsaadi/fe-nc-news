import { useEffect, useState } from "react"
import {useParams}from 'react-router-dom'
import { getArticleById } from "../api"
import '../app.css'


export const SingleArticle= ()=>{
    const {article_id}= useParams()
    const [article,setArticle]= useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [isError, setIsError]=useState(null)
useEffect(()=>{
    setIsLoading(true)
    setIsError(false)
    getArticleById(article_id).then((article)=>{
        setArticle(article)
        setIsLoading(false)
        setIsError(false)
    }).catch((err)=>{
        setIsError(true)
    })

},[article_id])

if(isError){
    return <p>404..Not found</p>
}
if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="article">
     <h3>{article.author}</h3>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={`image of ${article.title}`} className ='responsive-img'/>
       <p>{article.body}</p>
       <h4>{article.comment_count} comments </h4>
       <h4>{article.votes} likes</h4>
       <button>like</button>
       <h4>Add a comment</h4>

       

    </section>
  )

}

