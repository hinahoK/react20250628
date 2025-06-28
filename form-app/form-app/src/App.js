import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("formData")) || { name: "", email: "", comment: "" };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.slice(0, 50) });
  };

  return (
    <div>
      <h1>フォームアプリ</h1>

      {/* フォーム部分 */}
      <div>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="メール" value={formData.email} onChange={handleChange} />
        <textarea name="comment" placeholder="コメント" value={formData.comment} onChange={handleChange} />
        <button onClick={() => localStorage.setItem("formData", JSON.stringify(formData))}>保存</button>
      </div>

      {/* 表示部分 */}
      <div>
        <h2>保存されたデータ</h2>
        <p>名前: {formData.name}</p>
        <p>メール: {formData.email}</p>
        <p>コメント: {formData.comment}</p>
      </div>
    </div>
  );
}

export default App;
