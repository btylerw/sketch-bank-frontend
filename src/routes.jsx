import App from "./App";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { HomePage } from "./HomePage";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/home",
        element: <HomePage />
    }
];

export default routes;