import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Signup extends Component {
  render() {
    return (
      <>
        <Navbar />
        <form action='/user/signup' method='post'>
          <fieldset>
            <legend>create a account</legend>

            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" required />
            <br />
            <label htmlFor="email">email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input type="password" name="password" required />
            <br />
            <input type="submit" value='Signup'/>
          </fieldset>
        </form>

        <div>
          <p>already have an account? <a href="/user/signin">Signin</a></p>
        </div>
      </>
    );
  }
}
