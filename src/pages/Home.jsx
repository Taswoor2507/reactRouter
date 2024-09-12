import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>HOme</h1>
        <p>
          unt dicta dolores! Sint eum repudiandae laudantium recusandae voluptatum commodi iste voluptates maiores esse saepe quia asperiores non, corrupti ipsam iusto aut eveniet! Quis maxime commodi nostrum provident ea quasi dolores natus nobis!
        </p>
         
         <Link to={"/profile1"}>Profile 1</Link>
         <Link to={"/profile2"}>Profile 2</Link>
         <Link to={"/profile3"}>Profile 3</Link>

         <Outlet/>
    </div>
  )
}

export default Home