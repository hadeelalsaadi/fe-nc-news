import Header from "./Components/Header"
import { ArticlesList } from "./Components/ArticlesList"
import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/articles" element= {<ArticlesList/>}/>
    </Routes>
 
    </>
  )
}

export default App
