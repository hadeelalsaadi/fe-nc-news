import { useEffect, useState } from "react"
import { ArticleCard } from "./ArticleCard"
import { fetchAllArticles } from "../api"
import { useSearchParams } from 'react-router-dom';
export const ArticlesList =()=>{

const [articles,setArticles]= useState([])
const [isLoading, setIsLoading]=useState(true)
const [isError, setIsError]=useState(null)
const [searchParams, setSearchParams] = useSearchParams();
const [sortBy,setSortby]= useState('created_at')
const [order,setOrder]= useState('desc')


const topic = searchParams.get('topic');

useEffect(()=>{
    setIsLoading(true)
    setIsError(false)
    console.log(searchParams)
    fetchAllArticles(topic,sortBy,order).then((articles)=>{
        setArticles(articles)
        setIsLoading(false)
       
    }).catch((err)=>{
        setIsError(true)
    })
},[searchParams, sortBy, order])


function handleCahngeSortBy(event){ setSortby(event.target.value)}
function handleCahngeOrder(event){ setOrder(event.target.value)}

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
           <label htmlFor="sort"> Sort by </label>     
             <select name="sort" id="sort" onChange={handleCahngeSortBy} value= {sortBy} >
                 <option value="created_at" >Date</option>
                 <option value="title" >title</option>
                 <option value="votes">likes</option>   
            </select>

           
           <label htmlFor="sortting_order"> Sort order: </label>     
             <select name="sortting_order" id="sortting_order" onChange={handleCahngeOrder}  value={order} >
                 <option value="desc" >Descending</option>
                 <option value="asc" >Ascending</option>
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

