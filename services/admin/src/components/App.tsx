import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <h1>ADMIN PAGE</h1>
      <Outlet />
    </div>
  );
};
