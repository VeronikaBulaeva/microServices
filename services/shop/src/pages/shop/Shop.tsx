import { FC } from "react";
import { sum } from "@packages/shared";

const Shop: FC = () => {
  return (
    <>
      <div>Shop</div>
      <div>{sum(2, 4)}</div>
    </>
  );
};

export default Shop;
