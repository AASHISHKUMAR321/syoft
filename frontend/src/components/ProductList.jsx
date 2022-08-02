import React, { useState } from "react";
import { Button } from "./Button";
import { CreateProduct } from "./CreateProduct";

export const ProductList = () => {
  console.log(JSON.parse(sessionStorage.getItem("user")));
  const [get, setGet] = useState(false);
  const createHandler = () => {
    setGet(!get);
  };

  const gethandler = () => {};
  return (
    <div>
      {get ? (
        <CreateProduct />
      ) : (
        <Button name="Create Products" handle={createHandler} />
      )}

      <Button name="Get All  Products" handle={gethandler} />
    </div>
  );
};
