import React, { useState } from "react";
import { Button } from "./Button";
import Input from "./Input";

export const CreateProduct = () => {
  console.log(JSON.parse(sessionStorage.getItem("user")));
  const [product, setProduct] = useState({});
  const createHandler = () => {
    console.log(product);
  };

  const handle = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Input name="name" text={"Product Name"} handle={handle} />
      <Input name="price" text={"Product Price"} handle={handle} />
      <Input name="description" text={"Product Description"} handle={handle} />
      <Input name="count" text={"Inventory Count"} handle={handle} />
      <Button name={"create product"} handle={createHandler} />
    </div>
  );
};
