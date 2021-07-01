import Button from "./Button";
import React from "react";
function NameDisplay({ name }) {
  return (
    <div>
      <h1> Witaj, to ja: {name} </h1>
      <Button />
    </div>
  );
}
export default NameDisplay;
