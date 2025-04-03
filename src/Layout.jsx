import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
       <Link to="home">Home</Link>
       <Link to="about">About us</Link>
       <Link to="contact">Contact us</Link>

       <hr size="4" color="blue"/>

  <Outlet/>

       <hr size="4" color="blue"/>
       www.mycompany all rights reserved
        </>
    )
}
export default Layout