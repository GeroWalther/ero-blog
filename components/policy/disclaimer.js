import classes from "./disclaimer.module.css";
import Card from "../ui/Card";

export default function disclaimer() {
  return (
    <div className={classes.disco}>
      <h1>利用規約と免責事項</h1>
      <div className={classes.d}>
        皆様、艶っぽいブログの内容を
        <br />
        楽しく読みながら、こちらの利用規約と免責事項をご了承ください
      </div>
      <Card className={classes.textcon}>
        <h2>利用規約</h2>

        <p>艶っぽいブログにある小説を許可なしで、</p>
        <ul>
          <li>普及するのを禁止します。</li>
          <li>コピーして自分のものとして他の場所で見せるのを禁止します。</li>
        </ul>
        <p>
          <b>未成年に艶っぽいブログの内容を見せるのが禁止します。</b>
        </p>
      </Card>
      <Card className={classes.textcon}>
        <h2>免責事項</h2>
        <p>
          あまりの艶っぽさにショックを受けた場合、
          又は小説で出た行為を真似してみた場合、
        </p>
        <b>艶っぽいブログは責任を一切負いません。</b>
      </Card>
    </div>
  );
}
