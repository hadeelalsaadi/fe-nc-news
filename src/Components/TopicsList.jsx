import { useState,useEffect } from "react";
import { fetchAllTopics } from "../api";
import { Link } from 'react-router-dom';
export const TopicsList=()=>{
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetchAllTopics()
          .then((topics) => {
            setTopics(topics);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsError(true);
          });
      }, []);
    
      if (isError) {
        return <p>404 - Not found</p>;
      }
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      return (
        <section className="topics">
          <h2>Here are some topics you may like</h2>
          <ul >
            {topics.map((topic) => {
              return ( <>
             <Link to= {`/articles?topic=${topic.slug}`} ><h4>{topic.slug}</h4></Link> 
              <p>{topic.description}</p>
              </> );
            })}
          </ul>
         
        </section>
        
        
      );
}