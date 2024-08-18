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