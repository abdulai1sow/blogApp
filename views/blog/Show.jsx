import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    console.log(this.props.blog);
    const { blog } = this.props
    const presentDate = this.props.date
    return (
      <div>
        <h3>Show Blog</h3>
        
        <p>{blog.body}</p>
        {/* <h4>{blog.author}</h4> */}
        <div className="likes">
          <h6>4{blog.likes} </h6>
          <input type="checkbox" name="sponsored" id="" />
          <h5>Written by: { blog.author}</h5>
          <p>{blog.timestamps} time</p>
        </div>
      </div>
    );
  }
}
