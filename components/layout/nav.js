import Link from "next/link";
import classes from "./nav.module.css";
import Logo from "./logo";

function Nav() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/posts">全ての記事</Link>
          </li>
          <li>
            <Link href="/contact">問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
