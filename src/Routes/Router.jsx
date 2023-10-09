import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";

import Blog from "../pages/Blog/Blog";
import Loading from "../component/Loading/Loading";
import React, { Suspense } from "react";
import LoadingHome from "../component/Loading/LoadingHome";
import Error from "../component/Error/Error";
import ViewAll from "../pages/ViewAll/ViewAll";

const Main = React.lazy(() => import("../Layout/Main"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: 
          <Suspense fallback={<LoadingHome/>}>
            <Home />
          </Suspense>
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/store",
        element: <ViewAll/>,
      },
    ],
  },
]);
export default router;
