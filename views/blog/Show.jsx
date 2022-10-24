import React, { Component } from 'react'
import Navbar from "../components/Navbar";

export default class Show extends Component {
  render() {
    console.log(this.props.blog);
    const { blog, loggedInUser } = this.props;
    const presentDate = this.props.date
    return (
      <div className="show">
        <Navbar loggedInUser={loggedInUser} />
        

        <div className="showContainer">
          <h3>Show Blog</h3>

          <p>{blog.body}</p>

          <div className="likes">
            <h6>4{blog.likes} </h6>

            {/* <input type="checkbox" name="sponsored" id="" /> */}
            {blog.sponsored ? "sponsored" : null}

            <h5>Written by: {blog.author}</h5>
            <p>{blog.timestamps} time</p>
          </div>
        </div>
      </div>
    );
  }
}
