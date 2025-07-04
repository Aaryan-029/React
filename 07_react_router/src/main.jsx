import { StrictMode } from 'react'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Home from './component/Home/Home.jsx'
import Contact  from './component/contact/Contact.jsx';
import User from './component/User/User.jsx';
import Github from './component/Github/Github.jsx';



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:'/',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/'  element = {<Layout />}>
      <Route path =''  element = {<Home/>}></Route>
      <Route path ='about'  element = {<About />}></Route>
      <Route path ='contact'  element = {<Contact />}></Route>
      <Route path ='user/:userid'  element = {<User  />}></Route>
      <Route path ='github'  element = {<Github />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
