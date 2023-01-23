import Link from "next/link";
import React from "react";
import { CoffeBtn } from "./CoffeBtn";

export default function Support() {
  return (
    <>
      <h3>サポート</h3>
      <p>
        もちろん、外国人で、素人の私には至らぬ点があり、あくまで自分なりに書き上げた小説なので、
        もし文法的に不自然なところ、 <br />
        またはもっと艶っぽさが感じられるように訂正してくださる場合や感想を送ってくださる場合、
        ブログの管理人メール : ero_blog@yahoo.com <br />
        または
        <Link href="/contact">
          問い合わせ
        </Link>に送っていただけると幸いです。 <br />
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
