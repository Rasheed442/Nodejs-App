import React from "react";
import style from "../styles/layouts/modal.module.css";
import Authentication from "./Authentication";
import { AiOutlineClose } from "react-icons/ai";
import Appinput from "./Appinput";
import FormButton from "./FormButton";
function SmallModal({ title, onClick, children }) {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.heading}>
          <h2>{title}</h2>
          <AiOutlineClose size={25} onClick={onClick} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default SmallModal;
