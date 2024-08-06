"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface LayoutClientType {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
