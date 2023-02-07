import classes from "./heroSilder.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    title: "玉門 - 浮世絵のアート",
    alt: "玉門 - 浮世絵のアート",
    artist: "twocranesgallery",
    description:
      "浮世絵は、江戸時代から大衆に楽しんでもらうために手に入りやすい価格で提供されていました。そのため、twocranesgalleryは「Standard Edition」で昔と同じように手に入りやすい価格でアートを人々に提供します。リンクをご覧ください。",
    link: "https://www.instagram.com/p/Cja9Fs0LTIp/?igshid=MDJmNzVkMjY=",
  },
  {
    url: "/images/site/duft.webp",
    title: "聞き香",
    alt: "聞き香",
    artist: "Senjushunga",
    description:
      "'The scent (of Buddhist temples) is gentle yet complex, and I always burn incense when painting. It has become a part of my creative ritual.' ",
    link: "https://www.instagram.com/p/CgCqHc8NcZ8/",
  },

  {
    url: "/images/site/big.png",
    title: "Sketch",
    alt: "Sketch",
    artist: "milkformycoconut",
    description: "",
    link: "https://www.instagram.com/p/CGYRTQppjYw/",
  },
  {
    url: "/images/site/japgirl.png",
    title: "小説挿絵",
    alt: "小説挿絵",
    artist: "saitamiya",
    description:
      "「特選小説」２０２３年３月号『たまのこし』（著・花房観音）小説挿絵",
    link: "https://www.instagram.com/p/CnonjCQvZhb/",
  },
  {
    url: "/images/site/squirt.png",
    title: "CherryBlossomStudy",
    alt: "CherryBlossomStudy - sketch / study",
    artist: "milkformycoconut",
    description: "- sketch / study -",
    link: "https://www.instagram.com/p/B9t0v1yIFpN/",
  },
  {
    url: "/images/site/views-of-fuji.jpeg",
    title: "36 Views Of Mount Fuji #13",
    alt: "36 Views Of Mount Fuji #13",
    artist: "senjushunga",
    description:
      "「夕焼け」 This is an homage to one of my absolutly favorite Meiji period (1869-1912) woodblock prints.",
    link: "https://www.instagram.com/p/CnH9NBaNt-j/",
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
    title: "「夕霧」- Yuugiri",
    alt: "「夕霧」- Yuugiri",
    artist: "saitamiya",
    description: "",
    link: "https://www.instagram.com/p/Cg_rszivkMI/",
  },
  {
    url: "/images/site/girlontop.png",
    title: "NewApproachStudy - study",
    alt: "NewApproachStudy - study",
    artist: "milkformycoconut",
    description: "",
    link: "https://www.instagram.com/p/B-hEJa6pO1B/",
  },

  {
    url: "/images/site/fee.png",
    title: "No.351 'お運びさん'",
    alt: "No.351 'お運びさん'",
    artist: "tsubakianna",
    description:
      "完成品はMERRY ART GALLERY、存分に猥雑さを堪能できるレディメイドメタル展にて展示しております。",
    link: "https://www.instagram.com/p/Ce6FcB3haj-/",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const lastEl = slides.length - 1;

  useEffect(() => {
    let timer = setTimeout(function () {
      currentIndex === lastEl
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    }, 10000);
    return () => {
      clearTimeout(timer);
      setShowText(false);
    };
  }, [currentIndex]);

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
          priority
          width={800}
          height={400}
          onLoadingComplete={() => setShowText(true)}
        />
        {showText && (
          <div className={classes.description}>
            <div className={classes.letters}>
              <h1>艶っぽい小説が好きなブロガーです。</h1>
              <p>
                僕なりに面白く書いていた官能小説を皆さんに楽しく読んでいただけたら幸いです。
              </p>
            </div>
            <Link className={classes.explore} href="/posts">
              小説を閲覧する
            </Link>

            {slides[currentIndex].link && showText && (
              <div className={classes.backText}>
                <h3 className={classes.h3}>
                  ご紹介させていただく芸術家 : {slides[currentIndex].artist}
                </h3>
                <div className={classes.pc}>
                  <p>{slides[currentIndex].title}</p>
                  <p className={classes.p}>
                    {slides[currentIndex].description}
                  </p>
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
        )}
      </div>
    </section>
  );
}
