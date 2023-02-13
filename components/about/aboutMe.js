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
              誘惑や男女とのテンション、魅惑的な言動や流し目、女性の美しさ、虜になって我慢できなくなりそうなほど困っている男などについて、愛を込めて情熱で上品に作品を作るつもりで、全ての小説を書き上げようとしています。
              なぜかというと艶っぽい小説ならあえて上品に書かなければエロくなくなってかえってただの下品な文章にすぎなくなるからです。艶っぽさを表す上で欠かさないことだと思います。
              アートとは理解されるものじゃないと思うわけ。寧ろ理解されないこそアートです。
              作者としてはまだ素人なんですけど、このブログの小説を書くことでこれ以上上達できてよりいい小説家になれるように頑張るので、ぜひ僕なりのアートをぜひ見て頂きたいです。
              このブログで読者に僕なりに面白くて、ドキドキさせる官能小説のような作品を読んでいただきながら、最近ネットで、盛り上がっている個人的に素敵だと思った芸術品を紹介することで男女を問わず皆さんに楽しい時間を過ごしていただけたら、幸いです。
            </p>
            <p>
              そして管理人は2022年にプログラミングを勉強し始めたばかりなので、このブログを通して日本語の勉強はもちろん、プログラミングも同時に練習しています。
            </p>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.image1}>
            <Image
              src={"/images/site/flower-twocranesgallery.png"}
              alt={"desert"}
              priority
              sizes="100%"
              layout="fill"
            />
          </div>
          <p>
            <a href="https://www.instagram.com/twocranesgallery/">
              Instagram: @senjushunga
            </a>
          </p>
        </div>

        <div className={classes.div3}>
          <h3>管理人はどのような人なのか</h3>
          <div className={classes.flexCross}>
            <div className={classes.image2}>
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
            日本語が母国語ではないドイツ人が日本語が素敵な言語だなと思って2019年から勉強し始めました。
            不思議な事にロマンチックどころか堅苦しくて柔らかくないドイツの母国語に比べて割と自由に少し恥ずかしい話についてもきれいな日本語なら表現することができるようになったと感じた上に、
            美しい女性との艶っぽい話で盛り上がることが大好きなので、勉強のやる気が絶えず溢れんばかりに出るように日本語で小説を書くことが趣味になっています。
          </p>
          <p>
            実際に上品な作品になるように、あらかじめできる限り綺麗な表現を考え、文章にするので常に本当に挑戦ですが、
            面白くて素敵な勉強方法にもなりました。せっかく何年間にもわたって様々な文章を練習するために書
            き上げてきたので、このブログを通して皆さんにわたしの小説を楽しく読んでいただけた
            らと思います。
          </p>
        </div>

        <div className={classes.div5}>
          <h3>どんな刺激や、受けた影響のおかげで小説を思いつきますか</h3>
          <div className={classes.flexCross}>
            <p>
              短く言うと女性が素敵な存在なのでとっくに虜になった僕はその刺激のおかげで小説を書けるようになりました。
              刺激的な友達との会話や、遠距離恋愛を経て、物理的に好きな人から離れたことを感じたのをきっかけに色々な空想が自然に湧いてきて、後で教えられるように書きはじめたら、どんどんもっと独創的でワイルドになってくると思います。
              この小説で出てくる行為、発言、独創的なやり方の全ては完全に自分で思いついた妄想なので、残念ながら実話に基づいた話ではないです。
              基本的にオープンな人だと思い、普段友達同士と話していたら、好みや嫌なことを聞くし、
              恋人に艶っぽい話をすると盛り上がって、一緒に笑いながら読み上がるので基本的に僕の天使を喜ばせようとすることが僕のモティベーションだと言っても過言ではないです。
            </p>
            <p>
              もし皆さんはこのブログの記事で少しでも楽しくなっていたら、ぜひ教えてください!
              SNSで友達にシェアしたりして、僕にも感想を聞かせてください。以下にメールなどが書いてあります。
            </p>
          </div>
        </div>
        <div className={classes.div6}>
          <div className={classes.image2}>
            <Image
              src={"/images/site/views-of-fuji.jpeg"}
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
