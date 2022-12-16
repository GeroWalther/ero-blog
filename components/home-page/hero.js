import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/cherry.png"
          alt="A cherry blossom image"
          width={300}
          height={300}
        />
      </div>
      <h1>艶っぽい小説が好きなブロガーです。</h1>
      <p>
        僕なりに面白く書いていた官能小説を皆に楽しく読書させていだけたら、幸いです。
      </p>
    </section>
  );
}
export default Hero;
