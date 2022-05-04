import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
/* Importamos las pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn";
import Home from "../pages/home"
import LayoutError404 from "../layouts/LayoutError404";
import Contact from "../pages/contact"
import error404 from "../pages/error404";

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    }
];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
];

const routeNotFound = [
    {
        path: "*",
        layout: LayoutError404,
        component: error404,
    },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;