import { useEffect, useState } from "react"
import {useParams}from 'react-router-dom'
import { getArticleById } from "../api"
import '../app.css'
import { CommentsList } from "./CommentsList"
import { MakeVote } from "./MakeVote"



export const SingleArticle= ()=>{
    const {article_id}= useParams()
    const [article,setArticle]= useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [isError, setIsError]=useState(null)
    const [votes, setVotes]= useState(0)
  
   
useEffect(()=>{
    setIsLoading(true)
    setIsError(null)
    getArticleById(article_id).then((article)=>{
        setArticle(article)
        setIsLoading(false)
        setIsError(null)
        setVotes(article.votes)
        
        
    }).catch((err)=>{
        setIsError(err)
    })

},[article_id])

if(isError!==null){
    return <p>{isError.status} {isError.data.msg}  </p>
}
if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="article">
     <h3>{article.author}</h3>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={`image of ${article.title}`} />
       <p>{article.body}</p>
       
        <p><b>{article.comment_count} comments </b></p>
        <p><b>{votes} likes</b></p>
       
       
      <MakeVote setVotes={setVotes} article_id={article_id} votes= {votes}/>
     <CommentsList article_id= {article_id}/>
    </section>
  )

}

