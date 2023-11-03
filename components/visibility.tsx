"use client";

import { clsV2 } from "@/lib/cls";
import React from "react";

type VisibilityProp = {
  visibility: boolean;
  children?: React.ReactNode;
};

export function Visibility({
  visibility = true,
  children,
}: VisibilityProp) {
  return (
    <div className={clsV2(visibility ? "block" : "hidden")}>{children}</div>
  );
}
