import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  // const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} priority sizes='100%' fill />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          {/* <time>{formattedDate}</time> */}
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
export default PostItem;
