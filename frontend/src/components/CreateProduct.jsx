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
      <Input name="productname" text={"Product Name"} handle={handle} />
      <Input name="productprice" text={"Product Price"} handle={handle} />
      <Input
        name="productdescription"
        text={"Product Description"}
        handle={handle}
      />
      <Input name="inventorycount" text={"Inventory Count"} handle={handle} />
      <Button name={"create product"} handle={createHandler} />
    </div>
  );
};
