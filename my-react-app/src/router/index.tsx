import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
const Discover = lazy(() => import("@/views/discover"));
const Mine = lazy(() => import("@/views/mine"));
const Focus = lazy(() => import("@/views/focus"));
const Download = lazy(() => import("@/views/download"));
const Recommend = lazy(() => import("@/views/discover/children-views/recommend"));
const Ranking = lazy(() => import("@/views/discover/children-views/ranking"));
const Songs = lazy(() => import("@/views/discover/children-views/songs"));
const Djradio = lazy(() => import("@/views/discover/children-views/djradio"));
const Artist = lazy(() => import("@/views/discover/children-views/artist"));
const Album = lazy(() => import("@/views/discover/children-views/album"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover" /> // 重定向
    },
    {
        path: "/discover",
        element: <Discover />,
        children: [
            {
                path: "/discover",
                element: <Navigate to="/discover/recommend" /> // 重定向
            },
            {
                path: "/discover/recommend",
                element: <Recommend />
            },
            {
                path: "/discover/ranking",
                element: <Ranking />
            },
            {
                path: "/discover/songs",
                element: <Songs />
            },
            {
                path: "/discover/djradio",
                element: <Djradio />
            },
            {
                path: "/discover/artist",
                element: <Artist />
            },
            {
                path: "/discover/album",
                element: <Album />
            }
        ]
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