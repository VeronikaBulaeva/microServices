import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import { Suspense } from "react";
import { AdminLazy } from "@/pages/admin/Admin.lazy";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={"loading..."}>
            <AdminLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
