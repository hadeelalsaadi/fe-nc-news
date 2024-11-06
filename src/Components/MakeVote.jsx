import { incrementVotes } from "../api"
import { useState } from "react"

export const MakeVote = (props)=>{
    const {setVotes , article_id}= props
    const [error, setError]=useState(null)
   
   
 return <button onClick={()=>{  
    incrementVotes(article_id,1).then((votes)=>{
        setVotes(votes)
        setError(false)
       
    }).catch((err)=>{
        setVotes(curr=>curr-1)
        setError(err)

    })


 }} disabled= {error===false} >{error === false? "liked" : "like"}</button>



}

