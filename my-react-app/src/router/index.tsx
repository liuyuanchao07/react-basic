import React from "react";
import { RouteObject } from "react-router-dom";
import Discover from "@/views/discover";
import Mine from "@/views/mine";
import Focus from "@/views/focus";
import Download from "@/views/download";

const routes: RouteObject[] = [
    {
        path: "/discover",
        element: <Discover name="abc" age={20} />
    },
    {
        path: "/mine",
        element: <Mine />
    },
    {
        path: "/focus",
        element: <Focus />
    },
    {
        path: "/download",
        element: <Download />
    }
]

export default routes;