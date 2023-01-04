import App from "views/App"
import LoginPage from "views/LoginPage"; 
import RegisterPage from "views/RegisterPage"; 
import SearchPage from "views/SearchPage"; 
import ItemPage from "views/ItemPage"; 
import CreatePage from "views/CreatePage"; 
import MySurveyPage from "views/MySurveyPage"; 
import ProfilePage from "views/ProfilePage"; 
import PreferencesPage from "views/PreferencesPage"; 

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
        component: MySurveyPage
        
    },
    {
        path: "/survey/profile",
        name: "Profile",
        component: ProfilePage
        
    },
    {
        path: "/survey/preferences",
        name: "Preferences",
        component: PreferencesPage
        
    },
    {
        redirect: true,
        path: "/",
        pathTo: "/home",
        name: "Home"
    },
];

export default pagesRoutes;
