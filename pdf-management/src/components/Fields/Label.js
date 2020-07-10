import React from "react";

export default function Label(props) {

  return (
    <div style={{ height: "5vh", width: "100%", fontWeight: "500" }}>
      {props.name}
    </div>
  );
}
