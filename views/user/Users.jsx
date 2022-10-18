import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    const { UserModel } = this.props
    console.log(this.props.user)
    return (
      <>
        <div>

          <header>
            <link rel="stylesheet" href="/CSS/app.css"/>    
          </header>
          <div>
            <a href="/user/register">Create User</a>
          </div>

          {UserModel.map((user, idx) => (
            <div className='container'>
              <img
                src="https://media.istockphoto.com/photos/colorful-artistic-monkey-in-eyeglasses-picture-id1226476849?s=612x612"
                alt=""
              />
              <h3 className='hh3'> {user.name}</h3>
              <h3> {user.email}</h3>
              <h3> {user.password}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
}
