import Appinput from "@/layouts/Appinput";
import FormButton from "@/layouts/FormButton";
import SmallModal from "@/layouts/SmallModal";
import React, { useState } from "react";

function EditNewProduct({ popupEdit }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const productID =
    typeof window !== "undefined" ? localStorage.getItem("productID") : null;
  console.log(productID);

  const details = { title, description, price };
  async function SubmitHandler(e) {
    try {
      const response = await fetch(
        `http://localhost:2000/products/update/${productID}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(details),
        }
      );
      const server = await response.json();
      console.log(server);
      if (server?.status) {
        alert(server?.message);
        popupEdit(false);
        setTimeout(() => {
          window.location = "/dashboard";
        }, 1000);
      } else {
        alert("server error");
      }
    } catch (error) {}
  }
  return (
    <div>
      <SmallModal title="Edit Products" onClick={() => popupEdit(false)}>
        <Appinput
          placeholder="Title"
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
        <FormButton title="SUBMIT" onClick={SubmitHandler} />
      </SmallModal>
    </div>
  );
}

export default EditNewProduct;
