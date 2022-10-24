import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { FcLike } from 'react-icons/fc'

export default class Blog extends Component {
  render() {
    const { BlogModel, loggedInUser } = this.props;
    const timeStamp = Date.now()
    // console.log(loggedInUser);
    return (
      <div>
        <Navbar loggedInUser={loggedInUser} />

        <head>
          <link rel="stylesheet" href="./CSS/blog.css" />
        </head>
        {/* <div className="createBtn">
            <a href="/blog/New">CREATE</a>
          </div> */}
        <div className="container">
          {BlogModel.map((blog, idx) => (
            <div className="card" key={idx}>
           
              <img
                src="https://wallpapers.com/images/file/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.jpg"
                alt=""
              />
              <div className="title">
                <a href={`/blog/${blog._id}`}>
                  {" "}
                  <h2>{blog.title}</h2>
                </a>
              </div>

              <p className="body">{blog.body}</p>

              <div className="author">
                <h4>Written by:</h4> <p>{blog.author}</p>
              </div>

              <div className="likes">
                <h6>
                  {" "}
                  <FcLike className="like" />
                  {blog.likes}{" "}
                </h6>

                {/* <input type="checkbox" name="sponsored" id="" /> */}
                {blog.sponsored ? "sponsored" : null}

                <p> {blog.created_at.getHours()}</p>
              </div>

              <div className="buttons ">
                {blog.author === loggedInUser ? (
                  <a href={`/blog/${blog._id}/edit`}>Edit</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
