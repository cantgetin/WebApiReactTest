import { Home } from "./components/Home";
import { Cars } from "./components/Cars/Cars";

const AppRoutes = [
    {
    index: true,
    element: <Home />
    },
    {
        path: '/cars',
        element: <Cars />
    }
];

export default AppRoutes;
