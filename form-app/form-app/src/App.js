import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.slice(0, 50) }); // 50文字制限
  };

  return (
    <div>
      <h1>フォームアプリ</h1>

      {/* フォーム部分 */}
      <div>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange} />
        <p>{formData.name ? `${formData.name.length}/50` : "未入力です"}</p>

        <input type="email" name="email" placeholder="メール" value={formData.email} onChange={handleChange} />
        <p>{formData.email ? `${formData.email.length}/50` : "未入力です"}</p>

        <textarea name="comment" placeholder="コメント" value={formData.comment} onChange={handleChange} />
        <p>{formData.comment ? `${formData.comment.length}/50` : "未入力です"}</p>
      </div>
    </div>
  );
}

export default App;
