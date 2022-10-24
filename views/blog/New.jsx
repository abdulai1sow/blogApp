import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class New extends Component {
  render() {
    const { loggedInUser } = this.props;

    return (
      <div >

        <Navbar loggedInUser={loggedInUser} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: '20px'
            // background: "#5F9DF7",
          }}
        >
          <form style={styles.container} action="/blog" method="POST">
            <h3 style={{marginTop: '10px', textAlign: 'center'}}>Create a New Blog</h3>

            <input style={styles.title} type="text" name="title" placeholder="title" />
            <br />
            <br />
            <textarea
              style={styles.textArea}
              name="body"
              placeholder="body"
              cols="50"
              rows="24"
            ></textarea>
            <br />
            {/* <input type="text" name="author" placeholder='author' /> */}

            <button style={styles.like}>Like</button>

            <div>
              <label>sponsored?</label>
              <input type="checkbox" name="sponsored" />
              <br />
              {/* {blog.sponsored ? 'sponsored' : null} */}
            </div>

            <input style={styles.post} type="submit" value="post blog" />
          </form>
        </div>
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
  textArea: {
    borderColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    fontFamily: "Times New Roman, Times, serif",
    fontSize: "20px",
  },
  title: {
    borderColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    fontFamily: "Times New Roman, Times, serif",
    fontSize: "20px",
  },
  like: {
    height: "30px",
    fontSize: "20px",
    background: "#FF731D",
    borderRadius: "10px",
    marginBottom: "5px",
  },
  post: {
    height: "30px",
    fontSize: "20px",
    background: "#5F9DF7",
    borderRadius: "10px",
    marginTop: "5px",
  },
};

