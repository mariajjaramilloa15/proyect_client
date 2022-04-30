import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutError404 from "../layouts/LayoutError404";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn";
import error404 from "../pages/error404";

const routes = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
    {
        path: "*",
        layout: LayoutError404,
        component: error404,
        },
];

export default routes;