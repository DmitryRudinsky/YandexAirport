import {createRoot} from "react-dom/client";
import {MainPage} from "@/pages/MainPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "../shared/global_styles/_global.module.scss"
import React from "react";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
]);

const container = createRoot(root);
container.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)