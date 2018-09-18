import React from "react";

//solumn definitions for spacing out content

const Column = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  return (
    <div className={size}>
      {props.children}
    </div>
  );
};

export default Column;