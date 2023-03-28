import React, { memo } from "react";

function CountDisplay(props) {
  console.log(props, "props");
  const { count = 0 } = props;
  return (
    <>
      <h2>CountDisplay {count}</h2>
      <h2>{count > 0 ? "values is greater than zero" : "value is zero"}</h2>
      <h2>{count === 0 && "value is zero"}</h2>
    </>
  );
}

export default memo(CountDisplay);
