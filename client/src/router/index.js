import Home from "../package/Home";
import Signin from "../package/Signin";
import SignUp from "../package/SignUp";
import UserPage from "../package/UserPage";



export const publicRoutes = [
    { path: '/signin', component: Signin, exact: true }
]

export const privateRoutes = [
    { path: '/', component: Home, exact: true },
    { path: '/signin', component: Signin, exact: true },
    { path: '/signup', component: SignUp, exact: true },
    { path: '/userPage', component: UserPage, exact: true }

]