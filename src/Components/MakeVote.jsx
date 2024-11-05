import { incrementVotes } from "../api"
import { useState } from "react"

export const MakeVote = (props)=>{
    const {votes,setVotes , article_id}= props
    
    
    const [Error, setError]=useState(null)
   
   
 return <button onClick={()=>{
      setVotes((currVotes) => {
       return currVotes + 1;
      })
       console.log(votes)
    incrementVotes(article_id,1).then(({votes})=>{
        setVotes(votes)
        setError(false)
       
    }).catch((err)=>{
        setVotes(curr=>curr-1)
        setError(err)

    })


 }} disabled= {Error===false} >{Error === false? "liked" : "like"}</button>



}
//onClick setvotes to be currnet votes +1
//invoke patch func in api 
// disable vote button 

//if success do nothing 
//if err set curr votes = curr-1 + enable vote button 
