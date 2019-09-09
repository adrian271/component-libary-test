import React from "react";

function HeaderText(props) {
  const { children } = props;
  return <h1 style={{ color: `blue` }}>{children}</h1>;
}

export default HeaderText;
