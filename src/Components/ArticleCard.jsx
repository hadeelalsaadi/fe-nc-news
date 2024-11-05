import { FancyBox } from "./FancyBox"
import { Link } from "react-router-dom"

export const ArticleCard = (props)=>{
    console.log(props)
    const {article} = props
    return (
        <FancyBox>

           <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link>
            <h4>by: {article.author}</h4>
            <h4>{article.votes}</h4>
            <img src={article.article_img_url} alt={`image of ${article.title}`} className="responsive-img"/>
             <h5>{article.comment_count} comments </h5>
        </FancyBox>
    )
}