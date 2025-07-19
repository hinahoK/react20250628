import React from 'react';
import styles from '../styles/Home.module.css';
import common from '../styles/Common.module.css';

const Home = () => {
  return (
<main className={common.container}>
  <h1 className={styles.welcome}>ようこそ！</h1>
  <p className={styles.message}>Reactポートフォリオへ</p>
  <p>
    こんにちは！このサイトは、ゲームとWeb制作を愛する開発者「陽向穂」の創作活動を紹介するポートフォリオです。
    Unityを中心に、マリモやケセランパサランなどユニークなモチーフを使った作品を展開しています。
  </p>
  <p>
    このホームページでは、制作実績や自己紹介、活動履歴などをまとめています。  
    どうぞ、ごゆっくりご覧ください。
  </p>
</main>
  );
}

export default Home;