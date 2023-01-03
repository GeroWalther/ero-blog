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

        <p>
          艶っぽいブログの管理者の許可なしに、
          <b>無断転載、盗作を禁止します。</b>
        </p>

        <p>未成年がこのブログを閲覧するのを禁止します。 </p>
        <p>
          <b> 18歳以下の閲覧を禁止します。</b>
        </p>
      </Card>
      <Card className={classes.textcon}>
        <h2>免責事項</h2>
        <p>このブログを閲覧して、 </p>
        <ul>
          <li>精神的ショックを受けた場合、</li>
          <li>またこの小説内の行為を真似した場合でも、</li>
        </ul>
        <b>艶っぽいブログは、責任を一切負いません。</b>
      </Card>
    </div>
  );
}
