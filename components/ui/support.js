import Link from "next/link";
import React from "react";
import { CoffeBtn } from "./CoffeBtn";

export default function Support() {
  return (
    <>
      <h3>サポート</h3>
      <p>
        もちろん、外国人で、素人の僕には至らぬ点があるので、あくまで自分なりに書き上げた小説なので、
        もし文法的に合っていないところ、またはもっと艶っぽさが感じられるように訂正して、
        ブログの管理人メール : ero_blog@yahoo.com または
        <Link href="/contact">問い合わせ</Link>に送ってください。
        ご連絡をお待ちします。
      </p>
      <p>
        艶っぽい小説が好きで、作者の僕にコーヒーを奢ってみたいと思ったら、
        <a href="https://www.buymeacoffee.com/eroero">こちらへ</a>
        よろしくお願いします。
      </p>
      <CoffeBtn />
    </>
  );
}
