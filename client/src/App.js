import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiChevronsDown, BiLinkExternal } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode
} from "@fortawesome/free-brands-svg-icons";
import MapComponent from "./Mapcomponent";
import axios from "axios";

function App() {
  // const [Name, setName] = useState("");
  // console.log(Name);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  console.log(setFormData);

  // const [text, setText] = useState("");
  // const words = ["eat.", "sleep.", "code.", "repeat."];
  // let direction = 0; // 0 for forwards, 1 for backwards
  // let wordIndex = 0;
  // let letterIndex = 0;
  // let wordTypeInterval;

  // useEffect(() => {
  //   startTyping();
  //   return () => clearInterval(wordTypeInterval);
  // }, []);

  //   function startTyping() {
  //     wordTypeInterval = setInterval(typeLetter, 75);
  //   }

  //   function typeLetter() {
  //     const word = words[wordIndex];

  //     if (direction === 0) {
  //       letterIndex++;

  //       if (letterIndex === word.length) {
  //         direction = 1;
  //         clearInterval(wordTypeInterval);
  //         setTimeout(startTyping, 2000);
  //       }
  //     } else if (direction === 1) {
  //       letterIndex--;

  //       if (letterIndex === 0) {
  //         nextWord();
  //       }
  //     }

  //     const textToType = word.substring(0, letterIndex);
  //     setfunction nextWord() {
  //     letterIndex = 0;
  //     direction = 0;
  //     wordIndex++;

  //     if (wordIndex === words.length) {
  //       wordIndex = 0;
  //     }
  //   }
  // Text(textToType);
  //   }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);
    // return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("test");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = response.data;
      console.log(data);
      alert("Email sent successfully");
      // Handle success or error, update UI as needed
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again.");
      // Handle error
    }
  };

  return (
    <div className="App ">
      <Container fluid>
        {/* Name Content */}
        <Row>
          <Col xs={12} md={6}>
            <div className="mt-5">
              <h1 className="color-white">
                <span className="hover-effect">H</span>
                <span className="hover-effect">i</span>
                <span className="hover-effect">,</span>
              </h1>
              <h1 className="color-white">
                <span className="hover-effect">I</span>
                <span className="hover-effect">'</span>
                <span className="hover-effect">m</span>
                <span className="hover-effect ms-3">S</span>
                <span className="hover-effect">a</span>
                <span className="hover-effect">r</span>
                <span className="hover-effect">a</span>
                <span className="hover-effect">n</span>
                <span className="hover-effect">,</span>
              </h1>
              <h1 className="color-white">
                <span className="hover-effect">w</span>
                <span className="hover-effect">e</span>
                <span className="hover-effect">b</span>
                <span className="hover-effect ms-3">d</span>
                <span className="hover-effect">e</span>
                <span className="hover-effect">v</span>
                <span className="hover-effect">e</span>
                <span className="hover-effect">l</span>
                <span className="hover-effect">o</span>
                <span className="hover-effect">p</span>
                <span className="hover-effect">e</span>
                <span className="hover-effect">r</span>
              </h1>
              <h2 className=" color_gray color_gray1 mt-5">
                <strong>Full Stack Web Developer</strong>
              </h2>
              <div className=" mt-5">
                <a
                  href="../Sarankumar.pdf"
                  className="btn41-43 btn-41 text-decoration-none "
                >
                  Resume
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span className=" d-flex justify-content-center align-items-center h-100">
              <p className="dreams">Dreams</p>
              <p className="setSize">.setSize</p>
              <p className="bracket">(</p>
              <p className="BIG">BIG</p>
              <p className="bracket">)</p>
            </span>
          </Col>
        </Row>
        {/* Side Scroll */}
        <Row>
          <span className=" d-flex justify-content-between align-items-center">
            <p className="fontwhite moving-text vertical-text mt-5">
              <span className="d-flex justify-content-center align-items-center scroll">
                <b>Scroll down </b>
                <BiChevronsDown className=" me-1" />
              </span>
            </p>{" "}
            <p className="fontwhite moving-text vertical-text mt-5">
              <span className="d-flex justify-content-center align-items-center scroll">
                <b>Scroll down </b>
                <BiChevronsDown className=" me-1" />
              </span>
            </p>
          </span>
        </Row>
        {/* Projects */}
        <Row>
          <Col xs={12} md={6}>
            <div className="fontwhite px-3">
              <h1 className="headings">Projects</h1>
              <p className="p-3 project-font">
                <strong>
                  Below are some of my recent projects where I've honed my
                  skills in modern web development technologies, particularly
                  focusing on the MERN stack (MongoDB, Express.js, React.js,
                  Node.js). Through these projects, I've gained hands-on
                  experience in building scalable and efficient web
                  applications.
                </strong>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className=" d-flex justify-content-center align-items-center h-100">
              {/*   <h1 className="typing-text type-text-body">
                {text}
                <span className="blink">|</span>
              </h1> */}
            </div>
          </Col>
        </Row>
        {/* Card_Caontainer */}
        <Row>
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://github.com/saran-softdev/Coffee-Shop.git"
              className=" text-decoration-none"
            >
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2 "
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Coffee Shop</Card.Title>
                  <Card.Text className="fontwhite">
                    Coffee shop selling coffee powder with a React frontend
                    using Bootstrap. Features user authentication via Google
                    Sign-In, CRUD operations, and admin panel integration.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="1">Bootstrap</small>
                  <small className="2">Express.js</small>
                  <small className="3">Node.js</small>
                </div>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://github.com/saran-softdev/MEAT-EAT.git"
              className=" text-decoration-none"
            >
              {" "}
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2"
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Meat&Eat</Card.Title>
                  <Card.Text className="fontwhite">
                    Meat and Eat React frontend with Bootstrap, React Bootstrap.
                    Features include animations and seamless cart management
                    integrated with Redux for a dynamic user experience.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="1">Bootstrap</small>
                  <small className="2">Responsive</small>
                  <small className="3">Router-Dom</small>
                </div>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://github.com/saran-softdev/E-commerce.git"
              className=" text-decoration-none"
            >
              {" "}
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2"
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Maxxi Clothing</Card.Title>
                  <Card.Text className="fontwhite">
                    Maxxi clothing store with a React frontend using Bootstrap
                    and React Bootstrap, selling clothing online. Features
                    animation, mobile responsiveness, and Router-Dom for page
                    navigation.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="1">Bootstrap</small>
                  <small className="2">Responsive</small>
                  <small className="3">Router-Dom</small>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
        {/* About me */}
        <Row className=" mt-3">
          <Col xs={12} md={6} className=" my-5">
            <h1 className="headings">About me</h1>
            <p className="skills about_content pt-3">
              To secure a challenging position as a MERN stack web developer,
              leveraging my skills in MongoDB, Express.js, React, and Node.js to
              contribute to the development of innovative and scalable web
              applications. With a strong foundation in full-stack development
              and a passion for staying updated with the latest technologies, my
              goal is to work collaboratively in a dynamic team environment. I
              aim to contribute my expertise in designing and implementing
              robust, efficient, and user-friendly solutions, while continuously
              learning and growing as a MERN stack developer. Through creative
              problem-solving and a commitment to delivering high-quality code,
              I aspire to contribute to the success of projects and enhance my
              proficiency in building modern web applications.
            </p>
            <div className=" d-flex social_links gap-3">
              <a href="https://www.linkedin.com/in/saran-softdev">
                <span>
                  <ImLinkedin className="fontwhite fs-3 " />
                </span>
              </a>
              <a href="https://github.com/saran-softdev">
                <span>
                  <AiOutlineGithub className="fontwhite fs-3 " />
                </span>
              </a>
              <a href="mailto:saran.softdev@gmail.com">
                <span>
                  <SiGmail className="fontwhite fs-3 " />
                </span>
              </a>
              <span></span>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span>
              <h1 className="headings skills_content py-5 ">Skills</h1>
            </span>
            <span className="skills_cards">
              <div className="container1">
                <div className="skills1">
                  <div className="each html">
                    <div className="box">
                      <div className="content">
                        <h2>
                          <strong>HTML | CSS</strong>
                        </h2>
                        <FontAwesomeIcon icon={faHtml5} className=" fs-1 m-2" />
                        <FontAwesomeIcon icon={faCss3} className=" fs-1 m-2" />
                      </div>
                    </div>
                  </div>
                  <div className="each css">
                    <div className="box">
                      <div className="content">
                        <h2>
                          <strong>JAVASCRIPT</strong>
                        </h2>
                        <FontAwesomeIcon icon={faJs} className=" fs-1 m-2" />
                      </div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="box mern_stack">
                      <h2 className=" ms-3 ">
                        <strong>MERN STACK</strong>
                      </h2>
                    </div>
                  </div>
                  <div className="each js">
                    <div className="box">
                      <div className="content">
                        <span className=" d-flex justify-content-center ">
                          <FontAwesomeIcon
                            icon={faReact}
                            className=" fs-1 m-2"
                          />
                          <SiRedux className=" fs-1 m-2" />
                        </span>

                        <h2 className=" pb-3">
                          <strong>REACT | REDUX</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="each ng">
                    <div className="box">
                      <div className="content content_nem">
                        <div className=" d-flex justify-content-center align-items-center sm_icons_nm">
                          <FontAwesomeIcon
                            icon={faNode}
                            className=" fs-1 ms-1 "
                          />
                          <DiMongodb className=" fs-1 ms-1" />
                        </div>

                        <h2>
                          <strong>NODE | EXPRESS | MONGO DB</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </Col>
        </Row>
        {/* Contact  */}
        <Row>
          <Col xs={12} md={6}>
            <span className="contact_body d-flex flex-column">
              <h1 className="headings" id="contact-id">
                Contact me
              </h1>
              <span>
                <div className="login-box mt-3">
                  <form>
                    <div className="user-box">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        className="bg-transparent"
                        required
                      />
                      <label>Name</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        id="email"
                        className="bg-transparent"
                        required
                      />
                      <label>Email</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        id="subject"
                        className="bg-transparent"
                        required
                      />
                      <label>Subject</label>
                    </div>
                    <div className="user-box">
                      <textarea
                        rows="4"
                        cols="35"
                        className="bg-transparent text-white"
                        placeholder="Message"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button onClick={handleSubmit} type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </span>
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center align-items-center flex-column"
          >
            <div className=" d-flex justify-content-center align-items-center">
              <GrLocation className=" text-danger fs-1 mb-3 me-2" />
              <p className="color_gray location_content">
                <strong>Panruti, Cuddalore Dist, Tamil Nadu.</strong>
              </p>
            </div>
            <MapComponent />
            <p className="skills">
              {" "}
              <strong>I am relocating anywhere for the job.</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
