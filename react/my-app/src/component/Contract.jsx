function Contact() {
  return (
    <section id="contact" className="contact-bar"> 
      
      <div className="cb-left"> 
        <h2>
          Let's build
          <br />
          something <em>good.</em>
        </h2> 
        <p>Available for new projects starting soon.</p> 
      </div> 

      <div className="cb-right"> 
        <a href="mailto:your@email.com" className="cb-btn prim">
          Email me
        </a> 
        <a href="#" className="cb-btn">GitHub</a> 
        <a href="#" className="cb-btn">LinkedIn</a> 
        <a href="#" className="cb-btn">Resume</a> 
      </div> 

    </section>
  );
}

export default Contact;