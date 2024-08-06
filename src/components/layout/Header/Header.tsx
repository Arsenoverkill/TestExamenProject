import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
};

export default Header;
