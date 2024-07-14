import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/listed-books",
                element: <ListedBooks />,
            },
            {
                path: `/book-details/:id`,
                element: <BookDetails />,
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead />,
            },
        ],
    },
]);

export default router;
