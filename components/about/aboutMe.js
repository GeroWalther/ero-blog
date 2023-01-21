import Image from "next/image";
import React from "react";
import Card from "../ui/Card";
import Support from "../ui/support";
import classes from "./aboutMe.module.css";

const aboutMe = () => {
  return (
    <div className={classes.disco}>
      <h2>僕について</h2>
      <Card className={classes.gridCon}>
        <div className={classes.div1}>
          <h3>艶っぽいブログの目標</h3>
          <div className={classes.flexCross}>
            <p>
              誘惑や男女とのテンション、魅惑的な言動、女性の美しさ、虜になって我慢できなくなりそうな困っている男などについてこのブログで皆に僕なりに面白くて、ドキドキさせる官能小説っぽい作品を読んでいただいているついでに最近ネットで、盛り上がっている芸術家の傑作を紹介することで男女を問わず皆さんに楽しい読書の時間ができたら、幸いです。
            </p>
            <p>
              2022年にプログラミングを勉強し始めたばかりなので、このブログで日本語もさることながら、プログラミングも練習しています。
            </p>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.image}>
            <Image
              src={"/images/site/flower-twocranesgallery.png"}
              alt={"desert"}
              priority
              sizes="100%"
              layout="fill"
            />
          </div>
          <p>
            <a href="https://www.instagram.com/p/Cja9Fs0LTIp/?igshid=MDJmNzVkMjY=">
              Instagram: @senjushunga
            </a>
          </p>
        </div>

        <div className={classes.div3}>
          <h3>管理人はどのような人なのか</h3>
          <div className={classes.flexCross}>
            <div className={classes.image}>
              <Image
                src={"/images/site/japgirl.png"}
                alt={"desert"}
                sizes="100%"
                fill
              />
            </div>
            <p>
              <a href="https://www.instagram.com/saitamiya/">
                Instagram: @saitamiya
              </a>
            </p>
          </div>
        </div>
        <div className={classes.div4}>
          <p className={classes.p2}>
            日本語が母国語ではない日本語が素敵な言語だなと思って2019年から勉強しているドイツ人ですが、日本語からこそ割と自由に少し恥ずかしい話についても書けるようになったと感じています。
            それに美しい女性との艶っぽい話で盛り上がることが大好きなので、小説を書くことが趣味となっています。
            できる限り綺麗な表現を思いついて文章にすることで常に本当に挑戦ですが、面白くて素敵な勉強方法にもなりました。
            せっかく何年間にわたって様々な文章を練習するために書き上げてきたので、このブログで皆さんにその小説を見せて、楽しく呼んでいただけたら、幸いです。
          </p>
        </div>

        <div className={classes.div5}>
          <h3>どんな刺激や、受けた影響のおかげで小説を思いつきますか</h3>
          <div className={classes.flexCross}>
            <p>
              この小説で出てくる行為、発言、独創的なやり方の全ては自分で思いついた妄想なので、残念ながら実話に基づいた話ではないです。
              基本的にオープンな人だと思い、普段友達同士と話していたら、好みや嫌なことを聞くし、友達と恋人に艶っぽい話をすると盛り上がって、一緒に笑いながら読み上がるので基本的に人間を喜ばせようとすることが僕のモティベーションだと言っても過言ではないです。
              もし皆さんはこの記事で少しでも楽しくなっていたら、ぜひ教えてください!
              SNSで友達にシェアしたりして、僕にも感想を聞かせてください。以下にメールなどが書いてあります。
            </p>
          </div>
        </div>
        <div className={classes.div6}>
          <div className={classes.image}>
            <Image
              src={"/images/site/senjua-fuji.png"}
              alt={"desert"}
              sizes="100%"
              fill
            />
          </div>
          <p>
            <a href="https://www.instagram.com/twocranesgallery/">
              Instagram: @twocranesgallery
            </a>
          </p>
        </div>

        <div className={classes.div7}>
          <Support />
        </div>
      </Card>
    </div>
  );
};

export default aboutMe;
