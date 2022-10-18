import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <Navbar />
        <section>
          <h1>Blog App</h1>

          <img
            src="https://images.pexels.com/photos/9651000/pexels-photo-9651000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={styles.headerImg}
          />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            ea molestias, adipisci, nihil qui quisquam rem a assumenda tempora
            nemo eius delectus placeat! Cum saepe doloribus eius repellendus ea
            reprehenderit.
          </p>
        </section>

        <section className="margin-section">
          <h1>Bio</h1>
          <div style={styles.intro}>
            <img
              src="https://images.pexels.com/photos/12815067/pexels-photo-12815067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={styles.me}
            />
            <div>
              <h2>Developer</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus odit qui enim tempora rerum neque, repellendus
                debitis. Dicta modi expedita aliquam officiis neque laudantium
                asperiores at perferendis maiores, eos iure. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Necessitatibus odit qui
                enim tempora rerum neque, repellendus debitis. Dicta modi
                expedita aliquam officiis neque laudantium asperiores at
                perferendis maiores, eos iure. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Necessitatibus odit qui enim
                tempora rerum neque, repellendus debitis. Dicta modi expedita
                aliquam officiis neque laudantium asperiores at perferendis
                maiores, eos iure.
              </p>
            </div>
          </div>
        </section>

        <section className="margin-section">
          <div>
            <h1>Feature Blog</h1>
            <div>
              <h3>Intro to JS</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
              </p>
              <span>Author: Bill</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  headerImg: { width: "100%", height: "300px", objectFit: "fill" },
  me: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "fill",
    marginRight: "5px",
  },
  intro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },
};