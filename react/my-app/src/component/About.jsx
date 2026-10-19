function About() {
  return (
    <div id="about" className="bottom-grid"> 

      <div className="about-panel"> 
        <h2>Who <em>I am</em></h2> 

        <p>
          A frontend developer passionate about building responsive and user-friendly web applications. 
          I focus on writing clean and maintainable code while continuously learning new technologies.
        </p>

        <p>
          Currently a student working on projects to improve my skills and gain practical experience in web development.
        </p> 
      </div> 

      <div className="skills-panel"> 
        <h2>What I use</h2> 

        <div className="sk-row">
          <span className="sk-cat">Languages</span>
          <span className="sk-list">HTML, CSS, JavaScript</span>
        </div> 

        <div className="sk-row">
          <span className="sk-cat">Frontend</span>
          <span className="sk-list">React, Responsive Design</span>
        </div> 

        <div className="sk-row">
          <span className="sk-cat">Tools</span>
          <span className="sk-list">Git, GitHub, VS Code</span>
        </div> 

      </div> 

    </div>
  );
}

export default About;