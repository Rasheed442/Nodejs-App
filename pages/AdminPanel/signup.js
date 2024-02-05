import Appinput from "@/layouts/Appinput";
import Authentication from "@/layouts/Authentication";
import FormButton from "@/layouts/FormButton";
import Header from "@/layouts/Header";
import PasswordInput from "@/layouts/PasswordInput";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const details = { username: username, email: email, password: password };

  async function SubmitHandler(e) {
    try {
      const response = await fetch("http://localhost:2000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
      const server = await response.json();

      console.log(server);

      if (server?.status) {
        alert(server?.message);
        setTimeout(() => {
          window.location = "/AdminPanel/login";
        }, 1500);
      } else {
        alert("server error");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Header title="Sign Up" />
      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2>Signup</h2>
        <p style={{ color: "gray" }}>
          Signup to create a new account. it's super easy
        </p>
      </div>
      <Authentication Authtype="Sign up">
        <Appinput
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Appinput
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <PasswordInput
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormButton title="Submit" onClick={SubmitHandler} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Already have an account?</span>
          <Link href="login">
            <span>Sign In Instead</span>
          </Link>
        </div>
      </Authentication>
    </div>
  );
}

export default signup;
