import {Link} from "react-router-dom"
const Header = ()=>{
    return (
        <header>
        <h1 className="glow"> NC NEWS</h1>
        <nav>
          <div className="nav"><Link to='/articles'>Home</Link></div>
         <div className="nav"> <Link to='/topics'>Topics</Link> </div>
        </nav>
        </header>
    )
}
export default Header