import React from "react";
import style from "../styles/layouts/authentication.module.css";
function Authentication({ Authtype, children }) {
  return (
    <div className={style.top}>
      <div className={style.container}>
        <div className={style.header}>
          <h2>{Authtype}</h2>
        </div>
        <div className={style.children}>{children}</div>
      </div>
    </div>
  );
}

export default Authentication;

//   <div className={style.label}>
//           <label>username</label>
//           <input type="text" placeholder="email" />
//         </div>
//         <div className={style.label}>
//           <label>Email</label>
//           <input type="email" placeholder="email" />
//         </div>
//         <div className={style.label}>
//           <label>password</label>
//           <input type="password" placeholder="email" />
//         </div>
