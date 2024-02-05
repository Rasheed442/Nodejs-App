import React from "react";
import style from "../styles/layouts/appinput.module.css";
function PasswordInput({ type, placeholder, value, onChange }) {
  return (
    <div className={style.top}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default PasswordInput;
