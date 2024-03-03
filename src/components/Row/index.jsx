import React from "react";

function Row(props) {
  return <div className="row flex-lg-row flex-column-reverse">{props.children}</div>;
}

export default Row;
