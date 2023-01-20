import React from "react";
import List from "./card";

function Item(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <List products={props.products} />
    </div>
  );
}

export default Item;
