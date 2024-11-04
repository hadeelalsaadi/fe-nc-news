import { FancyBox } from "./FancyBox"

export const ArticleCard = (props)=>{
    const {article} = props
    return (
        <FancyBox>
            <h3>{article.title}</h3>
            <h4>by: {article.author}</h4>
            <h4>{article.votes}</h4>
            <img src={article.article_img_url} alt={`image of ${article.title}`}/>
             <h5>{article.comment_count} comments </h5>
        </FancyBox>
    )
}