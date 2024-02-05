import React, { useState } from "react";
import style from "../styles/component/newproducts.module.css";
import SmallModal from "@/layouts/SmallModal";
import Appinput from "@/layouts/Appinput";
import FormButton from "@/layouts/FormButton";
function AddNewProduct({ popup, product }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [profile_url, setProfile_url] = useState();

  const details = { title, description, price, profile_url };
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // async function SubmitHandler(e) {
  //   const formData = new FormData();
  //   formData.append("image", profile_url);
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("price", price);
  //   try {
  //     const response = await fetch("http://localhost:2000/products/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: formData,
  //     });
  //     const server = await response.json();

  //     console.log(server);

  //     if (server?.status) {
  //       alert(server?.message);
  //       popup(false);
  //       setTimeout(() => {
  //         window.location = "/dashboard";
  //       }, 1000);
  //     } else {
  //       alert("server error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function SubmitHandler() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("image", profile_url, "UP Logo.png");
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("price", price);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:2000/products/create", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <SmallModal title="New Products" onClick={() => popup(false)}>
        <Appinput
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Appinput
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Appinput
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Appinput
          type="file"
          onChange={(e) => {
            console.log(e.target.files);
            setProfile_url(e.target.files[0]);
          }}
        />
        <FormButton title="submit" onClick={SubmitHandler} />
      </SmallModal>
    </div>
  );
}

export default AddNewProduct;
