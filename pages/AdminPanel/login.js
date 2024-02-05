import Appinput from "@/layouts/Appinput";
import Authentication from "@/layouts/Authentication";
import FormButton from "@/layouts/FormButton";
import Header from "@/layouts/Header";
import PasswordInput from "@/layouts/PasswordInput";
import React, { useEffect, useState } from "react";

function login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const details = { email, password };
  async function SubmitHandler() {
    try {
      const response = await fetch("http://localhost:2000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
      const server = await response.json();

      console.log(server);

      if (server?.status) {
        localStorage.setItem("username", server?.username);
        localStorage.setItem("token", server?.token);
        window.location = "/AdminPanel/dashboard";
      } else {
        alert(server?.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header title="Dashboard Panel" content="login" />
      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2>Signin</h2>
        {/* <p style={{ color: "gray" }}>
          Signup to create a new account. it's super easy
        </p> */}
      </div>
      <Authentication Authtype="Log in">
        <Appinput
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormButton title="Submit" onClick={SubmitHandler} />
      </Authentication>
    </div>
  );
}

export default login;
