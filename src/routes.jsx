import App from "./App";
import { Login } from "./Login";
import { Signup } from "./Signup";

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
    }
];

export default routes;