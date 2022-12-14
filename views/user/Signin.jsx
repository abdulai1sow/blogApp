import React from 'react'
import Navbar from "../components/Navbar";

export default function Signin() {
  return (
    <div>
      <Navbar />

      <h1>sign in page</h1>

      <form action="/user/signin" method="post">
        <fieldset>
          <legend>signin to your account</legend>
          <label htmlFor="email">email</label>
          <br />
          <input type="text" name="email" id="" /> <br />
          <label htmlFor="password">password</label>
          <br />
          <input type="password" name="password" /> <br />
          <input type="submit" value="signin" />
          <a href="/user/signup">signup</a>
        </fieldset>
      </form>
    </div>
  );
}

const styles = {
  container: {
    alignText: 'center'
  }
};