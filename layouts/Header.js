import React, { useEffect, useState } from "react";
import style from "../styles/layouts/header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

function Header({ title, content }) {
  const router = useRouter();
  const [like, setLike] = useState(true);
  const [authentication, setAuthentication] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("UserData")));
  }, [
    typeof window !== "undefined"
      ? window.localStorage.getItem("UserData")
      : null,
  ]);

  console.log(userData);
  return (
    <>
      <div className={style.header}>
        <h2
          onClick={() => {
            localStorage.clear();
            window.location = "/login";
          }}
        >
          {/* {title} */}
          Ecomm
        </h2>
        <div className={style.navlinks}>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/">
            <span>Sell</span>
          </Link>
          <Link href="/">
            <span>Orders</span>
          </Link>
          <Link href="/dashboard">
            {router.pathname === "dashboard" ? "" : <span>Dashboard</span>}
          </Link>
          <Link href="" onClick={() => setLike(!like)}>
            <span>
              {like ? <MdFavoriteBorder size={20} /> : <MdFavorite size={20} />}
            </span>
          </Link>
          <Link href="/CartPage">
            <div className={style.cart1}>
              <span>
                <FaShoppingCart size={20} />
              </span>
              <p>{userData?.[0]?.length}</p>
            </div>
          </Link>

          <Link href="/" onMouseOver={() => setAuthentication(true)}>
            <span>
              <FaCircleUser size={20} />
            </span>
          </Link>

          <Link href="signup">
            {router.pathname === "dashboard" ? <span>Signup</span> : ""}
          </Link>
          <Link href="login">
            {router.pathname === "dashboard" ? <span>Signin</span> : ""}
          </Link>
        </div>
      </div>

      <div className={authentication ? style.auth : style.authnone}>
        <Link href="login">
          <span>Login</span>
        </Link>
        <Link href="signup">
          <span>Signup</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
