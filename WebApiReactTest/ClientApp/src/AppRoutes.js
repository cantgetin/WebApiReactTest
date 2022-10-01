import { Home } from "./components/Home";
import Cars from "./components/Cars/Cars";
import Car from "./components/Car/Car";

const AppRoutes = [
    {
    index: true,
    element: <Home />
    },
    {
        path: '/cars',
        element: <Cars />
    },
    {
        path: '/car/:id',
        element: <Car />
    }
];

export default AppRoutes;
