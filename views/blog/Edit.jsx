import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
const {blog} = this.props
    return (
      <div>
        <h1>Edit Blog</h1>
        
        <form action={`/blog/${blog._id}?_method=PUT`} method="post">
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" defaultValue={blog.title} />
          <br />
          <label htmlFor="body">body</label>
          <br />
          <textarea
            type="text"
            name="body"
            id=""
            cols="50"
            rows="24"
            defaultValue={blog.body}
          ></textarea>
<br />
          {/* <input type="text" name="author" defaultValue={blog.author} /> */}
<br />
          <label htmlFor='sponsored'>Sponsored?</label>
          <input
            type="checkbox"
            name="sponsored"
            defaultChecked={blog.sponsored ? 'on': null}
          />
          <br />
          <input type="submit" value="Update Blog" />
          
        </form>

        <form action={`/blog/${blog._id}?_method=DELETE`} method='post'>
          <input type="submit" value="Delete" />
        </form>
      </div>
    );
  }
}
