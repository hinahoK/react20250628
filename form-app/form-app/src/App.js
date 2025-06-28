import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <h1>フォームアプリ</h1>

      {/* フォーム部分 */}
      <div>
        <input
          type="text"
          placeholder="入力してください"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      {/* 表示部分 */}
      <div>
        <p>表示: {inputText}</p>
      </div>
    </div>
  );
}

export default App;
