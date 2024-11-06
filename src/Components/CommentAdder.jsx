import '../app.css'
import { useState } from 'react'
import { postNewComment} from '../api'

export const CommentAdder = (props)=>{
    const {article_id, username,newCommentsList}= props

    const [newComment,setNewComment]=useState("")

    return (
        <form className="commentCard  commentAdder"
        onSubmit={(event)=>{
            event.preventDefault();
            postNewComment(article_id, newComment,username).then((newComment)=>{
                newCommentsList(newComment)
                setNewComment("")
            })
            


        }} >
            <label htmlFor="new-comment"> write your comment:</label>
            <input type="text" id="new-comment" value={newComment} onChange={({target:{value}})=>{
                setNewComment(value)
            }}
            />
            <button>Add</button>

        </form>
    )

}