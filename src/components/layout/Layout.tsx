import React, { FC, ReactNode } from "react";
import Header from "./Header/Header";

interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
