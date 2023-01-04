import App from "views/App"
import LoginPage from "views/LoginPage"; 
import RegisterPage from "views/RegisterPage"; 
import SearchPage from "views/SearchPage"; 
import ItemPage from "views/ItemPage"; 
import CreatePage from "views/CreatePage"; 

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
        name: "Submit",
        component: CreatePage
        
    },
    {
        path: "/survey/mysurvey",
        name: "My Survey",
        component: App
        
    },
    {
        path: "/survey/profile",
        name: "Profile",
        component: App
        
    },
    {
        path: "/survey/preferences",
        name: "Preferences",
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
