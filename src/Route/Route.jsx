
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Body from '../Components/Body/Body';
import Contact from '../Components/Contact/Contact';
import Main from '../Layout/Main';
import About from '../Components/About/About';

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/body',
                element:<Body></Body>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element: <About></About>
            }
              
        ]

    }
   
])
