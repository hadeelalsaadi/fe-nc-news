import '../app.css'
import { useState } from 'react'
import { postNewComment} from '../api'

export const CommentAdder = (props)=>{
    const {article_id, username,newCommentsList}= props
    const [newComment,setNewComment]=useState("")
    const [isPosting, setIsPosting]=useState(false)


    return (
        <>
        {isPosting && <h4>is posting the comment...</h4>}
        <form className="commentCard  commentAdder"
        onSubmit={(event)=>{
            event.preventDefault();
            setIsPosting(true)
            postNewComment(article_id, newComment,username).then((newComment)=>{
                newCommentsList(newComment)
                setIsPosting(false)
                setNewComment("")
            }).catch((err)=>{
                setIsPosting(false)
            })
            


        }} >
            <label htmlFor="new-comment"> write your comment:</label>
            <input type="text" id="new-comment" value={newComment} onChange={({target:{value}})=>{
                setNewComment(value)
            }}
            />
            <button>Add</button>

        </form>
        </>
    )

}