import classes from "./heroSilder.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    {
      url: "/images/site/flower-red.png",
      title: "red flower",
      alt: "red flower picture artwork",
      artist: "",
      description: "",
    },
    {
      url: "/images/site/flower-twocranesgallery.png",
      title: "浮世絵のアート",
      alt: "浮世絵のアート",
      artist: "twocranesgallery",
      description:
        "浮世絵は江戸時代から一般人向けで、皆は安く買えてアートを集めることができるようになりました。こうしてtwocranesgalleryは「Standard Edition」で昔と同じようにアートを皆に提供するつもりです。リンクをご覧ください。",
      link: "https://www.instagram.com/p/Cja9Fs0LTIp/?igshid=MDJmNzVkMjY=",
    },
    {
      url: "/images/site/girlontop.png",
      title: "milkformycoconut",
      alt: "NewApproachStudy - study",
      artist: "milkformycoconut",
      description: " NewApproachStudy - study",
      link: "https://www.instagram.com/p/B-hEJa6pO1B/",
    },
    {
      url: "/images/site/japgirl.png",
      title: "saitamiya",
      alt: "小説挿絵",
      artist: "saitamiya",
      description:
        "「特選小説」２０２３年３月号『たまのこし』（著・花房観音）小説挿絵",
      link: "https://www.instagram.com/p/CnonjCQvZhb/",
    },
    {
      url: "/images/site/squirt.png",
      title: "milkformycoconut",
      alt: "CherryBlossomStudy - sketch / study,",
      artist: "milkformycoconut",
      description: "CherryBlossomStudy - sketch / study",
      link: "https://www.instagram.com/p/B9t0v1yIFpN/",
    },
    {
      url: "/images/site/tangle.png",
      title: "No.21 ''Tangled up''",
      alt: "No.21 ''Tangled up''",
      artist: "tsubakianna",
      description:
        "完成品はMERRY ART GALLERY、存分に猥雑さを堪能できるレディメイドメタル展にて展示しております。",
      link: "https://www.instagram.com/p/CYrKdQxP-kC/",
    },
    {
      url: "/images/site/kimono.png",
      title: "saitamiya",
      alt: "夕霧」- Yuugiri",
      artist: "saitamiya",
      description: "「夕霧」",
      link: "https://www.instagram.com/p/Cg_rszivkMI/",
    },
    {
      url: "/images/site/senjua-fuji.png",
      title: "senjushunga",
      alt: "36 Views Of Mount Fuji #13",
      artist: "senjushunga",
      description:
        "36 Views Of Mount Fuji #13 「夕焼け」 This is an homage to one of my absolutly favorite Meiji period (1869-1912) woodblock prints.",
      link: "https://www.instagram.com/p/CnH9NBaNt-j/",
    },
    {
      url: "/images/site/fee.png",
      title: "No.351 お運びさん",
      alt: "No.351 お運びさん",
      artist: "tsubakianna",
      description:
        "完成品はMERRY ART GALLERY、存分に猥雑さを堪能できるレディメイドメタル展にて展示しております。",
      link: "https://www.instagram.com/p/Ce6FcB3haj-/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const lastEl = slides.length - 1;

  useEffect(() => {
    console.log("effect runs");
    let timer = setTimeout(function () {
      currentIndex === lastEl
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  // const bgImageStyle = {
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   height: "100%",
  // };

  const goToNext = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  return (
    <section className={classes.section}>
      <div className={classes.grid}>
        <Image
          className={classes.image}
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          width={800}
          height={400}
        />
        <div className={classes.description}>
          <div className={classes.letters}>
            <h1>艶っぽい小説が好きなブロガーです。</h1>
            <p>
              僕なりに面白く書いていた官能小説を皆に楽しく読書させていただけたら、幸いです。
            </p>
          </div>
          <Link className={classes.explore} href="/posts">
            小説を閲覧する
          </Link>

          {slides[currentIndex].link && (
            <div className={classes.backText}>
              <h3 className={classes.h3}>
                紹介している芸術家 : {slides[currentIndex].title}
              </h3>
              <div className={classes.pc}>
                <p className={classes.p}>{slides[currentIndex].description}</p>
              </div>
              <a href={slides[currentIndex].link} className={classes.link}>
                Instagram:
                <span> @{slides[currentIndex].artist}</span>
              </a>
            </div>
          )}

          <div className={classes.taps}>
            {slides.map((slide, currentIndex) => (
              <span
                key={currentIndex}
                onClick={() => goToNext(currentIndex)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
