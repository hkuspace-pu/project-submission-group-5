import App from "views/App"
import LoginPage from "views/LoginPage"; 
import RegisterPage from "views/RegisterPage"; 
import SearchPage from "views/SearchPage"; 
import ItemPage from "views/ItemPage"; 

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
        path: "/survey/search",
        name: "Search",
        component: SearchPage
        
    },
    {
        path: "/survey/item",
        name: "Item",
        component: ItemPage,
    },
    {
        path: "/survey/submit",
        name: "Search",
        component: App
        
    },
    {
        path: "/survey/mysurvey",
        name: "Search",
        component: App
        
    },
    {
        path: "/survey/profile",
        name: "Search",
        component: App
        
    },
    {
        path: "/survey/preferences",
        name: "Search",
        component: App
        
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/home",
        name: "Home"
    },
];

export default pagesRoutes;
