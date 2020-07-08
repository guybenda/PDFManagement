import React from "react";

import { Divider as MuiDivider } from "@material-ui/core";
import {} from "@material-ui/icons";

function Divider(props) {
  if (props.print) return "TODO";
  return (
    <MuiDivider style={{ margin: "1em", width: "-webkit-fill-available" }} />
  );
}

export default Divider;
