import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React, {Suspense} from "react";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);

const container = createRoot(root);
container.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)