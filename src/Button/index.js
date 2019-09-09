import React from "react";

function Button(props) {
  const { children } = props;
  return <button style={{ color: `red` }}>{children}</button>;
}

export default Button;
