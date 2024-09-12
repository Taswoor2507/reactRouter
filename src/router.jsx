import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Courses } from "./pages/Courses";
import Profile1 from "./components/Profile1";
import Profile2 from "./components/Profile2";
import Profile3 from "./components/Profile3";
const router = createBrowserRouter(
    [
        {
            path:"",
            element:<App/>,
            children:[{
                path:"" , 
                element:<Home/>,
                children:[{
                    path:"/profile1",
                    element:<Profile1/>
                } ,
                {
                    path:"/profile2",
                    element:<Profile2/>
                } , 
                {
                    path:"/profile3",
                    element:<Profile3/>
                }
            ]
            } , 
            {
                path:"/about" , 
                element:<About/>
            } ,
            {
                path:"/contact" , 
                element:<Contact/>
            } ,
            {
                path:"/courses" , 
                element:<Courses/>
            } 
        ]
        }
       
    ]
)
export default router