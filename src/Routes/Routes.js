import Animation from "../Components/Animation";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/animation',
                element: <Animation></Animation>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ],
        
    }
])

export default router;