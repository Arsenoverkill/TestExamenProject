import React from "react";
import Link from "next/link";
import scss from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image
            width={100}
            height={100}
            src="https://cdn.prod.website-files.com/646218c67da47160c64a84d5/64faef04f0101dc9ac9e3fbc_94.png"
            alt="logo"
          />
          <nav>
            <Link href="/">Home</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
