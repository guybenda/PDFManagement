import React from "react";

import "./Label.css";

export default function Label(props) {
  if (props.print) return "TODO";

  return <div style={{ padding: "1em", width: "100%" }}>{props.name}</div>;
}
