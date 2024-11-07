import { FancyBox } from "./FancyBox"
import { Link } from "react-router-dom"
import '../app.css'
export const ArticleCard = (props)=>{
   
    const {article} = props
    return (
        <FancyBox>

           <Link to={`/articles/${article.article_id}`}> <h3 className="FancyBoxItems">{article.title}</h3></Link>
            <h4 className="FancyBoxItems">by: {article.author}</h4>
            <h4 className="FancyBoxItems"> topic: {article.topic}</h4>
            <p className="FancyBoxItems">Date: {article.created_at}</p>
            <img src={article.article_img_url} alt={`image of ${article.title}`} className="responsive-img"/>
            <h5 id="likes">{article.votes} likes</h5>
            <h5 id="comments">{article.comment_count} comments </h5>
        </FancyBox>
    )
}