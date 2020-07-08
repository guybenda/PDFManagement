import React from "react";

export default function Label(props) {
  if (props.print) return "TODO";

  return (
    <div style={{ height: "5vh", width: "100%", fontWeight: "bold" }}>
      {props.name}
    </div>
  );
}
