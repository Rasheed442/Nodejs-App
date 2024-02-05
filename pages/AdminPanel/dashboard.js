import Header from "@/layouts/Header";
import React, { useState, useEffect } from "react";
import style from "../../styles/pages/dashboard.module.css";
import FormButton from "@/layouts/FormButton";
import Axios from "axios";
import AddNewProduct from "@/component/AddNewProduct";
import EditNewProduct from "@/component/EditNewProduct";
import Image from "next/image";
function dashboard() {
  const [username, setUsername] = useState();
  const [popup, setPopup] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [product, setProduct] = useState();

  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token && token}`,
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:2000/products/getProducts", config).then(
      (response) => {
        setProduct(response?.data?.getProducts);
      }
    );
  }, []);
  console.log(product);

  async function SubmiHandler(p) {
    try {
      const response = await fetch(
        `http://localhost:2000/products/delete/${p?.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      const server = await response.json();
      console.log(server);
      alert(server?.message);
      setTimeout(() => {
        window.location = "/dashboard";
      }, 1000);
    } catch (error) {
      alert(error?.message);
    }
  }
  return (
    <div>
      {/* {popup && <SmallModal />} */}
      {popup && <AddNewProduct popup={setPopup} product={setProduct} />}
      {popupEdit && <EditNewProduct popupEdit={setPopupEdit} />}
      <Header title="Ecomm" content={username} />
      <div className={style.table}>
        <div className={style.header}>
          <h1>Products</h1>
          <FormButton title="Add New Products" onClick={() => setPopup(true)} />
        </div>

        <div className={style.data}>
          <table className={style.mytable}>
            <thead>
              <tr>
                <th>Products ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Profile Url</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((p) => {
                return (
                  <tr>
                    <td>{p?.id}</td>
                    <td>{p?.title}</td>
                    <td>{p?.description}</td>
                    <td>{p?.price}</td>
                    <td>
                      <img
                        src={`http://localhost:2000/${p?.profile_url}`}
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td
                      className={style.edit}
                      onClick={() => {
                        setPopupEdit(true);
                        localStorage.setItem("productID", p?.id);
                      }}
                    >
                      Edit
                    </td>
                    <td
                      className={style.delete}
                      onClick={() => SubmiHandler(p)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default dashboard;
