import { useEffect, useState } from "react"
import { ArticleCard } from "./ArticleCard"
import { fetchAllArticles } from "../api"

export const ArticlesList =()=>{
const [articles,setArticles]= useState([])
const [isLoading, setIsLoading]=useState(true)
const [isError, setIsError]=useState(null)
useEffect(()=>{
    setIsLoading(true)
    setIsError(false)
    fetchAllArticles().then((articles)=>{
        setArticles(articles)
        console.log(articles)
        
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
        <h2>NEWS</h2>
        <ul>
            {articles.map((article)=>{
                return (
                    <div key={article.article_id}>
                    <ArticleCard article= {article}/>
                    </div>
                )
            })}
        </ul>
    </section>
  )

}