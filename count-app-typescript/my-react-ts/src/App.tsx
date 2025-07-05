//Reactの機能を使用するためにReactをインポートする。
//useState（状態の管理）とuseEffect（副作用処理）をインポートしている。
import React, {useState, useEffect} from "react";
import { JSX } from "react/jsx-runtime";

//Appコンポーネントを定義
function App(): JSX.Element {

  //countの状態を管理し、localStorageから保存された値を取得（なければ0）
  //setCountでcountを更新
  const [count, setCount] = useState<number>(() => {
    const stored = localStorage.getItem("count");
    return stored ? Number(stored) : 0;
  });

  //countが更新されるたびにlocalStorageに保存。
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  //画面に表示する要素を定義
  return (
    <div>

      {/* countの値を表示 */}
      <p>カウント: {count}</p>

      {/* ボタンを実装、クリックされるとcountに+1 */}
      <button onClick={() => setCount(count + 1)}>増やす</button>

      {/* ボタンを実装、クリックされるとcountに-1 */}
      <button onClick={() => setCount(count - 1)}>減らす</button>
    </div>
  );//divを閉じ、表示内容を完結
}//Appコンポーネントを閉じる

//Appコンポーネントをエクスポートし、ほかのファイルでの使用を可能にする
export default App;
