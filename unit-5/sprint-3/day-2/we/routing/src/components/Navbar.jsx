import { Link } from "react-router-dom"

export const Navbar=()=>{
    return <nav style={{ }}><span><Link to="/">Home</Link></span>
    <Link to="/about">About</Link><span></span>
    <div> <Link to ="/users">Users</Link></div>
    </nav>
}