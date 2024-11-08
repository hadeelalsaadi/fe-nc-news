import Header from "./Components/Header"
import { ArticlesList} from "./Components/ArticlesList"
import { SingleArticle } from "./Components/SingleArticle"
import { Route,Routes } from "react-router-dom"
import { TopicsList } from "./Components/TopicsList"
import { Notfound } from "./Components/Notfound"

import '../src/app.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element= {<ArticlesList/>}/>
      <Route path="/articles" element= {<ArticlesList/>}/>
      <Route path= "/articles/:article_id" element = {<SingleArticle/>}/>
      <Route path= "/topics" element={<TopicsList/>}/>
      <Route path="*" element={<Notfound />} />
    </Routes>
 
    </>
  )
}

export default App
