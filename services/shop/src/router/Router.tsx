import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import { Suspense } from "react";
import { ShopLazy } from "@/pages/shop/Shop.lazy";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: (
          <Suspense fallback={"loading..."}>
            <ShopLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
