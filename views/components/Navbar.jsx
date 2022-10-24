import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const { loggedInUser } = this.props
    console.log(loggedInUser);
    return (
      <>
        <nav style={styles.container}>
          <a style={styles.aTag} href="/">
            HOME
          </a>
          <a style={styles.aTag} href="/blog">
            BLOGS
          </a>
          <a style={styles.aTag} href="/blog/new">
            CREATE BLOG
          </a>

          {/* <a href="/user/signup">SIGNIN</a> */}
          {/* <a href="/user/signout">SIGNOUT</a> */}
          {!loggedInUser ? (
            <a style={styles.aTag} href="/user/signin">
              SIGNIN
            </a>
          ) : (
            <a style={styles.aTag} href="/user/signout">
              SIGNOUT
            </a>
          )}
          {loggedInUser && <h6 style={styles.nameTag}>{loggedInUser}</h6>}
          {/* {loggedInUser && <a href="/user/signout">SIGNOUT</a>} */}
        </nav>
      </>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    background: "#1746A2",
    width: "100%",
    height: "50px",
    alignItems: "center",
    borderRadius: "8px ",
  },
  aTag: {
    textDecoration: "inherit",
    color: "#fff",
  },
  nameTag: {
    fontSize: "16px",
    background: "#FFF7E9",
  },
};