import {createRoot} from "react-dom/client";
import {MainPage} from "@/pages/MainPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "../shared/global_styles/_global.module.scss"
import React from "react";
import {DeparturePage} from "@/pages/DeparturePage";
import {ArrivalsPage} from "@/pages/ArrivalsPage";
import {TransferPage} from "@/pages/TransferPage";
import {QueryClient, QueryClientProvider} from "react-query";
import {DepartingInfoPage} from "@/pages/DepartingInfoPage";
import {EscortInfoPage} from "@/pages/EscortInfoPage";
import {DepartingOVZInfoPage} from "@/pages/DepartingOVZInfoPage";
import {ArrivingInfoPage} from "@/pages/ArrivingInfoPage";
import {GreeterInfoPage} from "@/pages/GreeterInfoPage";
import {ArrivingOVZInfoPage} from "@/pages/ArrivingOVZInfoPage";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/departure",
        element: <DeparturePage/>,
    },
    {
        path: "/arrivals",
        element: <ArrivalsPage/>,
    },
    {
        path: "/transfer",
        element: <TransferPage/>,
    },
    {
        path: "/departure/d-for-departing-passengers",
        element: <DepartingInfoPage/>
    },
    {
        path: "/departure/d-provozhayushchim",
        element: <EscortInfoPage/>
    },
    {
        path: "/departure/d-passazhiram-s-ovz",
        element: <DepartingOVZInfoPage/>
    },
    {
        path: "/arrival/a-vyletayushchim",
        element: <ArrivingInfoPage/>
    },
    {
        path: "/arrival/a-provozhayushchim",
        element: <GreeterInfoPage/>
    },
    {
        path: "/arrival/a-passazhiram-s-ovz",
        element: <ArrivingOVZInfoPage/>
    },
]);

const queryClient = new QueryClient();

const container = createRoot(root);
container.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </QueryClientProvider>
)