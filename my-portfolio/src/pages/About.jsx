import React from 'react';
import common from '../styles/Common.module.css';
import styles from '../styles/Icon.module.css';

const About = () => {
  return (
    <section className={common.container}>
      <h2>陽向穂について</h2>
      <img src="/images/icon.png" alt="プロフィールアイコン" className={styles.icon} />
      <p>東京デザインテクノロジーセンター専門学校ITエンジニア専攻３年生。遊び心を作品に散りばめるのが好きです。</p>
      <p>
        名前：片伊木　陽向穂  
      </p>
      <p>
        趣味：アイディア発想 / 世界観づくり / 不思議なもの集め
      </p>
      <p>
        Unityでは主に2Dゲームを制作しています。マリモをキャッチする癒し系アクションや、
        ケセランパサランの脱出劇など、ちょっと非日常な物語が好きです。
      </p>
    </section>
  );
};

export default About;
