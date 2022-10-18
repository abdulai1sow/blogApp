import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Blog extends Component {
  render() {
    const { BlogModel, loggedInUser } = this.props;
    console.log(loggedInUser);
    return (
      <div>
        <Navbar loggedInUser={loggedInUser} />
        <head>
          <link rel="stylesheet" href="./CSS/blog.css" />
        </head>
        <div>
          <div className="createBtn">
            <a href="/blog/New">CREATE</a>
          </div>
          {BlogModel.map((blog, idx) => (
            <div className="container" key={idx}>
              <img
                src="https://wallpapers.com/images/file/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.jpg"
                alt=""
              />
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>

              <p>{blog.body}</p>

              <h4>Written by:</h4> <p>{blog.author}</p>

              <div className="likes">
                <h6>4{blog.likes} </h6>

                {/* <input type="checkbox" name="sponsored" id="" /> */}
                { blog.sponsored ? 'sponsored': null}

                <p> {blog.created_at.getHours()} </p>
              </div>

              <div className="buttons">
                
                {blog.author === loggedInUser ? (
                  <div className="button">
                    <a href={`/blog/${blog._id}/edit`}>Edit</a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
