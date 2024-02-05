import React from "react";
import style from "../styles/layouts/appinput.module.css";
function FormButton({ title, onClick }) {
  return (
    <div className={style.top}>
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export default FormButton;
