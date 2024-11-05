import Header from "./Components/Header"
import { ArticlesList} from "./Components/ArticlesList"
import { SingleArticle } from "./Components/SingleArticle"
import {CommentsList} from './Components/CommentsList'
import { Route,Routes } from "react-router-dom"
import '../src/app.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element= {<ArticlesList/>}/>
      <Route path="/articles" element= {<ArticlesList/>}/>
      <Route path= "/articles/:article_id" element = {<SingleArticle/>}/>
      
      
    </Routes>
 
    </>
  )
}

export default App
