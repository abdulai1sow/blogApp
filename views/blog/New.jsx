import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>

        <form style={styles.container} action="/blog" method="POST">
          <h3>Create a new Blog</h3>

          <input type="text" name="title" placeholder="title" />
          <br />
          <br />
          <textarea
            name="body"
            placeholder="body"
            cols="50"
            rows="24"
          ></textarea>
          <br />
          {/* <input type="text" name="author" placeholder='author' /> */}

          <button>like</button>

          <div>
            <label>sponsored?</label>
            <input type="checkbox" name="sponsored" />
          </div>

          <input type="submit" value="post blog" />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};