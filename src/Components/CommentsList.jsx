
import {useParams}from 'react-router-dom'
import { useEffect, useState } from "react"
import { getComments } from '../api'

export const CommentsList =()=>{
    const {article_id}= useParams()
const [comments,setComments]= useState([])
const [isLoading, setIsLoading]=useState(true)
const [isError, setIsError]=useState(null)
useEffect(()=>{
    setIsLoading(true)
    setIsError(false)
    getComments(article_id).then((comments)=>{
        setComments(comments)
        setIsLoading(false)

    }).catch((err)=>{
        setIsError(true)
    })
},[])
if(isError){
    return <p>404..Not found</p>
}
if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
       
        <ul>
            {comments.map((comment)=>{
                return (
                    <section className='commentCard' key= {comment.comment_id}>
                    <h4>{comment.author} :</h4>
                   <h4>{comment.body}</h4> 
                   <h5>{comment.votes} likes</h5>
                   <button>like</button>
                   </section>

                )
            })}
        </ul>
    </section>
  )

}