import React, { useState } from "react";

function App() {
  const [formData, setInputText] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <h1>フォームアプリ</h1>

      {/* フォーム部分 */}
      <div>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="メール" value={formData.email} onChange={handleChange} />
        <textarea name="comment" placeholder="コメント" value={formData.comment} onChange={handleChange} />
      </div>

      {/* 表示部分 */}
      <div>
        <p>名前：{formData.name}</p>
        <p>メールアドレス：{formData.email}</p>
        <p>コメント：{formData.comment}</p>
      </div>
    </div>
  );
}

export default App;
