import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/index.css"; // Assuming you have a CSS file for styling



// Navigation Links Component
const NavigationLinks = () => (
  <nav>
    <ul>
      <li><Link to="/">Assignment1</Link></li>
      <li><Link to="/form">Assignment2</Link></li>
      <li><Link to="/table">Assignment3</Link></li>
      <li><Link to="/media">Assignment4</Link></li>
    </ul>
  </nav>
);

const Index = () => (
  <div>
    <header>
      <div role="navigation" id="top"></div>
      <NavigationLinks />
    </header>

    <main>
      {/* Student ID & Biography */}
      <section>
        <h1>STUDENT ID: ALT/SOE/024/1828</h1>
        <h2>Biography</h2>
        <p>
          My name is <strong>Alli Mariam</strong>, and I live in Lagos, Nigeria. I’m currently studying Software Engineering at Altsch Africa, focusing on the Frontend aspect of Software engineering. I am passionate about building intuitive websites, and web applications with appealing user experience. Outside of my studies, I am a full-time mum who enjoys watching k-drama series and spending time with my family. I aim to become a certified skilled front-end engineer and contribute to creating user-friendly web applications. I’m excited about the opportunity to grow and make a meaningful impact in the tech world.
        </p>
      </section>

      {/* Reason for Applying to AltSchool */}
      <section>
        <h2>Why Altsch School of Engineering Program</h2>
        <ol>
          <li>Frontend engineering aligns with my long-term career goals of building web and mobile applications that solve real-world problems. Joining this program provides the structured learning path and hands-on experience I need to succeed in this field.</li>
          <li>I am driven by the idea of creating intuitive and visually engaging user interfaces. I want to contribute to making technology more accessible and enjoyable for users.</li>
          <li>I found front-end engineering to be the perfect intersection of design visualization and functionality.</li>
          <li>Altschol Africa SOE program offers the opportunity to learn cutting-edge technologies and stay relevant.</li>
          <li>As technology evolves, I want to ensure I am equipped with the skills to contribute to and thrive in this fast-paced, ever-changing industry.</li>
        </ol>
      </section>

      {/* Goals to accomplish */}
      <section>
        <h2>Goals for the School of Engineering Tech Program</h2>
        <ol>
          <li>My primary goal is to gain a solid foundation in HTML, CSS, JavaScript, and frameworks like React or Vue.js in developing responsive and scalable web applications.</li>
          <li>I aim to acquire technical proficiency and a mindset for analyzing and solving complex problems creatively, an essential skill for any engineer.</li>
          <li>I want to participate in real-world projects, individually and in teams, to apply what I learn and build a portfolio showcasing my abilities to potential employers.</li>
          <li>By the end of the program, I aspire to be an active contributor to open-source projects and the broader tech community, sharing knowledge and collaborating with others.</li>
          <li>My ultimate goal is to land a role as a front-end engineer where I can grow professionally, continue learning, create meaningful, user-friendly digital experiences, and be a role model to my children.</li>
        </ol>
      </section>
    </main>

    <footer>
      <a href="#top">Back to the top</a>
    </footer>
  </div>
);

export default Index;