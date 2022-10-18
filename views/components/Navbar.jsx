import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const { loggedInUser } = this.props
    console.log(loggedInUser);
    return (
      <nav style={styles.container}>
        <a href="/">HOME</a>
        <a href="/blog">BLOGS</a>
        <a href="/blog/new">CREATE NEW BLOG</a>

        {/* <a href="/user/signup">SIGNIN</a> */}
        {/*<a href="/user/signout">SIGNOUT</a> */}
        {!loggedInUser ? (
          <a href="/user/signin">SIGNIN</a>
          ) : (
          <a href="/user/signout">SIGNOUT</a>
        )}
        {loggedInUser && <h6>{loggedInUser}</h6>}
        {/* {loggedInUser && <a href="/user/signout">SIGNOUT</a>} */}
      </nav>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(193,235,187,0.9)'
  }
}