import "./Education.css";
import galvanize_logo from "../assets/galvanize_logo.jpg";

const Education = () => {
  const educationTitle = "Galvanize Inc";
  const fieldOfStudy = "Computer Software Engineering";
  const duration = "Dec 2022 - Apr 2023";
  const description =
    "Fully immersive course learning full stack application development using JavaScript, HTML, CSS, NodeJS, RESTful APIs with CRUD functionality, and relational databases with PostgreSQL.";
  const skills =
    "JavaScript · Front-End Development · Back-End Web Development · React.js · Node.js · Express.js · SQL · Relational Databases · Object-Oriented Programming (OOP) · p5.js · jQuery · Bootstrap · REST APIs · Hypertext Transfer Protocol (HTTP) · File Systems · AJAX · Document Object Model (DOM) · HTML · Cascading Style Sheets (CSS)";

  return (
    <div id="education" className="component section-container">
      <h2>Education</h2>
      <div className="entry-container">
        <div className="entry-img-sidebar">
          <img className="entry-img" src={galvanize_logo} alt="" />
        </div>
        <div className="entry-main">
          <h3>{educationTitle}</h3>
          <div className="edu-field">{fieldOfStudy}</div>
          <div className="font-light edu-field dates">{duration}</div>
          <div className="edu-body">{description}</div>
          <div className="skills">
            <span className="bold skills">Skills: </span>
            {skills}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
