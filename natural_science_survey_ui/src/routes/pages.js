import App from "views/App"
import LoginPage from "views/LoginPage"; 
import RegisterPage from "views/RegisterPage"; 
import SearchPage from "views/SearchPage"; 

const pagesRoutes = [
    {
        path: "/home",
        name: "Home",
        component: App
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage
    },
    {
        path: "/search",
        name: "Search",
        component: SearchPage
        
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/home",
        name: "Home"
    },
];

export default pagesRoutes;
