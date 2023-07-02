import React from "react";

type VisibilityProp = {
  visibility: boolean,
  children?: React.ReactNode
}

export default function Visibility({ visibility = true, children }: VisibilityProp) {
  return visibility ? children : null;
}
