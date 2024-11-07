import { useEffect, useState } from "react"
import { ArticleCard } from "./ArticleCard"
import { fetchAllArticles } from "../api"
import { useSearchParams } from 'react-router-dom';
export const ArticlesList =()=>{

const [articles,setArticles]= useState([])
const [isLoading, setIsLoading]=useState(true)
const [isError, setIsError]=useState(null)
const [searchParams, setSearchParams] = useSearchParams();

let topic = searchParams.get('topic');
topic?useEffect(()=>{
    setIsLoading(true)
    setIsError(false)
    fetchAllArticles(topic).then((articles)=>{
        setArticles(articles)
        setIsLoading(false)
       
    }).catch((err)=>{
        setIsError(true)
    })
},[searchParams]):

useEffect(()=>{
   
    setIsLoading(true)
    setIsError(false)
    fetchAllArticles().then((articles)=>{
        setArticles(articles)
        setIsLoading(false)
       

    }).catch((err)=>{
        setIsError(true)
    })
},[]);

function handleCahnge(event){
    
   console.log(event.target.value)

}


if(isError){
    return <p>404..Not found</p>
}
if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section >
        <h2>Recent news</h2>
        <section>
        <select name="sort" id="sort" onChange={handleCahnge} value= {searchParams} key="select">
         <option >Sort by</option>
            <option value="created_at" key="created_at">Date</option>
            <option value="comment count" key="comment_count">Most commented</option>
            <option value="votes">Likes</option>
           
        </select>

        </section>
        <ul>
            {articles.map((article)=>{
                return (
                   
                    <ArticleCard article= {article}/>
                    
                )
            })}
        </ul>
    </section>
  )

}