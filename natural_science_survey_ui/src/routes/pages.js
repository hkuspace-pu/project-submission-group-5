import App from "views/App"
import LoginPage from "views/LoginPage"; 
import RegisterPage from "views/RegisterPage"; 

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
        redirect: true,
        path: "/",
        pathTo: "/home",
        name: "Home"
    },
];

export default pagesRoutes;
