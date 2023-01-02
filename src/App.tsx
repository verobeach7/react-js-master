import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  // typescript: form의 type을 읽어와서 자동으로 string으로 타입 설정
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  // typescript를 이용해 event를 보호하는 것, 어떤 이벤트를 받을 지 결정해놓는 것
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
