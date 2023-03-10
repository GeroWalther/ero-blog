import React from "react";
import Card from "../ui/Card";
import classes from "./policy.module.css";

export default function Policy() {
  return (
    <div className={classes.policy}>
      <h1>プライバシーポリシー</h1>
      <p className={classes.d}>
        皆様の個人情報の重要性を認識し、その適正な収集、利用、保護をはかるとともに、安全管理を行うため、プライバシーポリシーを定め、
        次のとおり運用します。
      </p>
      <Card className={classes.textcon}>
        <h2>1 - 個人情報の定義</h2>
        <p>
          このプライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、以下のいずれかに該当するものをいいます。
        </p>
        <ul>
          <li>
            当該情報に含まれる氏名、生年月日その他の記述等｛文書、図画もしくは電磁的記録（電子的方式、磁気的方式そのほか人の知覚によって認識することができない方式により作られた記録をいう）に記載され、もしくは記録され、または音声、動作その他の方法を用いて表された一切の事項（個人識別符号を除く）をいう｝により、特定の個人を識別できるもの（他の情報と容易に照合でき、それにより特定の個人を識別できるものを含む）。
          </li>

          <li>個人識別符号が含まれるもの。</li>
        </ul>
      </Card>
      <Card className={classes.textcon}>
        <h2>2 - 個人情報の提供及び受領時の記録等</h2>
        <p>
          個人情報を第三者（国の機関、地方公共団体、独立行政法人等及び地方独立行政法人を除き、以下、本項において同様とします）に提供し、または第三者から受領する場合は、個人情報保護法に従って、必要な事項について記録を作成するとともに、個人情報保護委員会規則で定められた期間保存いたします。
        </p>
      </Card>
      <Card className={classes.textcon}>
        <h2>3 - 個人情報の第三者提供</h2>
        <p>
          ご本人から承諾を得たとき、個人情報保護法その他の法令等に基づく場合、または次のいずれかに該当する場合を除き、個人情報を第三者に提供することはありません。
        </p>
        <ul>
          <li>
            人の生命、身体、または財産の保護のために個人データの第三者提供が必要である場合であって、本人の同意を得ることが困難である場合
          </li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を取ることが困難である場合
          </li>

          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合。
          </li>
          <li>
            また、ご本人から承諾を得たとき、または個人情報保護法で認められている場合を除き、個人情報を海外の第三者に提供することはありません。
          </li>
        </ul>
      </Card>
    </div>
  );
}
