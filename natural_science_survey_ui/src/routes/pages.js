import App from "views/App"

const pagesRoutes = [
    {
        path: "/home",
        name: "Home",
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
