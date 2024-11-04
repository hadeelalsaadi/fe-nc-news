import {Link} from "react-router-dom"
const Header = ()=>{
    return (
        <>
        <h1> NC NEWS</h1>
        <nav>
          <Link to='/articles'>Home</Link>
        </nav>
        </>
    )
}
export default Header