import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevState) => prevState + 1);

  return (
    <div className={css.container}>
      <div className={css.linkBlock}>
        <h1>Best shop</h1>
        <Link to="/admin" className={css.link}>
          Admin
        </Link>
        <Link to="/shop" className={css.link}>
          Shop
        </Link>
      </div>
      <div>
        <h2>{count}</h2>
        <button className={css.button} onClick={increment}>
          +
        </button>
      </div>
      <Outlet />
    </div>
  );
};
