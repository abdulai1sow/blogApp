import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    const {loggedInUser } = this.props;

    return (
      <div>
        {/* <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head> */}

        {/* <Navbar /> */}
        <Navbar loggedInUser={loggedInUser} />

        <section style={styles.headSection}>
          <h1 style={styles.headH1}>Blog App</h1>

          <img
            src="https://images.pexels.com/photos/9651000/pexels-photo-9651000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={styles.headerImg}
          />

          <p style={styles.headP}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            ea molestias, adipisci, nihil qui quisquam rem a assumenda tempora
            nemo eius delectus placeat! Cum saepe doloribus eius repellendus ea
            reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Doloremque ea molestias, adipisci, nihil qui quisquam rem a
            assumenda tempora nemo eius delectus placeat! Cum saepe doloribus
            eius repellendus ea reprehenderit.
          </p>
        </section>

        <section className="margin-section" style={styles.bioSection}>
          <h1 style={styles.h1Section}>Bio </h1>
          <div style={styles.intro}>
            <img
              src="https://images.pexels.com/photos/12815067/pexels-photo-12815067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={styles.me}
            />
            <div style={styles.bioDiv}>
              <h2 style={styles.p}>Developer</h2>
              <p style={styles.bioP}>
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

        <section className="margin-section" style={styles.featSection}>
          <div style={styles.introJS}>
            <h1 style={styles.featH1}>Feature Blog</h1>
            <div>
              <h3>Intro to JS</h3>
              <p style={styles.featP}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
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
  headerImg: {
    width: "500px",
    height: "400px",
    objectFit: "fill",
    float: "right",
    marginRight: "10px",
  },
  me: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    // objectFit: "contain",
    marginRight: "5px",
    marginLeft: "40px",
    float: "left",
  },
  intro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },
  p: {
    marginLeft: "30px",
  },
  headSection: {
    height: "100vh",
    backgroundColor: "#FF731D",
    borderRadius: "15px 50px 5px 30px",
    overflow: "hidden",
    marginTop: "30px",
  },
  headP: {
    width: "500px",
    // alignItems: 'center',
    marginLeft: "50px",
    // margingTop: "200px",
    position: "absolute",
    fontSize: "20px",
  },
  headH1: {
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "900",
    fontSize: "40px",
    padding: "40px",
  },

  ////////////////////////////BIO//////////
  bioSection: {
    height: "100vh",
    backgroundColor: "#5F9DF7",
    borderRadius: "15px 50px 5px 30px",
    overflow: "hidden",
    marginTop: "30px",
  },
  h1Section: {
    textAlign: "center",
    marginBottom: "5px",
    fontWeight: "900",
    fontSize: "40px",
    padding: "20px",
  },
  bioDiv: {
    textAlign: "center",
    width: "500px",
    marginLeft: "200px",
  },
  bioP: {
    fontSize: "20px",
  },
  /////////////////////////FEATURE///////////
  featSection: {
    height: "100vh",
    backgroundColor: "#FFF7E9",
    borderRadius: "15px 50px 5px 30px",
    overflow: "hidden",
    marginTop: "30px",
  },
  introJS: {
    textAlign: "center",
  },
  featP: {
    fontSize: "20px",
  },
  featH1: {
    marginBottom: "5px",
    fontWeight: "900",
    fontSize: "40px",
    padding: "20px",
  },
};