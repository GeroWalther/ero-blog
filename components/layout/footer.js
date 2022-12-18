import React from "react";
import Link from "next/link";
import Logo from "./logo";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <Link href="/">
          <Logo className={classes.h3} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/disclaimer">免責事項/利用規約</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
