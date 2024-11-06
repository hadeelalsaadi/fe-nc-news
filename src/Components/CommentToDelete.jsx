import {useState } from "react"
import { deleteComent } from "../api"
import '../app.css'

export const CommentToDelete =(props)=>{
    const { comment_id, filterComments}= props
    const [isDeleteing, setIsDeleteing]= useState(false)

    return(<>
    {isDeleteing && <h4>is deleteing the comment...</h4>}
     <button  onClick={(event)=>{
         setIsDeleteing(true)
         filterComments(comment_id)
         deleteComent(comment_id).then(({data})=>{
            
             setIsDeleteing(false)
         }).catch((err)=>{
             setIsDeleteing(false)
         })
        } 
        } className="delete">delete</button>
     
    </>
   
) 

}