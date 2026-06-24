import './App.css';
import Navbar from './components/navbar.jsx';


import Card from './components/card.jsx'
function App() {
  return (
    
    <>
  <Navbar />

  <section id="Welcome" className="Welcome">
        <div>
          <h1>Welcome!</h1>  
          <p>Hi, I'm Niranjana P.A. — an aspiring engineer, passionate learner, and technology enthusiast. Explore my journey, projects, skills, and experiences as I continue learning, growing, and building solutions that make a positive impact.</p>
        
        </div>
      </section>
      <section id="About" className="About">
        <div>
          
        <h2>About Me</h2>
    <p>I'm a B.Tech Computer Science (AI) student at Mar Baselios Christian College of Engineering and Technology, Peermade. Curious by nature, I enjoy learning new things, exploring different ideas, and taking on challenges that help me grow both personally and academically.

I believe that every experience offers an opportunity to learn something valuable. Whether it's working on a project, developing a new skill, or exploring a topic that interests me, I am always eager to expand my knowledge and improve myself. I enjoy stepping out of my comfort zone, embracing new opportunities, and continuously growing through every experience.
 Always learning, always growing, and always looking forward to what's next. </p>
 </div>
 <div>
        <p> Learning...Growing....Evolving </p>
        </div>
        </section>  

<section id="Skills" className="Skills">
  <div>
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-item">HTML</div>
      <div className="skill-item">CSS</div>
      <div className="skill-item">JavaScript</div>
      <div className="skill-item">Python</div>
    </div>
  </div>
</section>

<section id="Projects" className="Projects">
  <div>
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-card">
        <h3>Library Management System</h3>
        <p>A comprehensive system designed to track book inventories, manage student checkout histories, and streamline library operations.</p>
      </div>
      <div className="project-card">
        <h3>Personal Portfolio Website</h3>
        <p>A responsive, modern single-page application built to display my engineering track record, specialized technical skills, and core builds.</p>
      </div>
    </div>
  </div>
</section>

        {/* Contact Section */}
<section id="Contact" className="Contact">
  <div>
    <h2>Contact Me</h2>
    
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Your Message Here..." required></textarea>
      </div>

      <button type="submit" className="form-submit-btn">Submit</button>
    </form>
  </div>
</section>

        </>
      
  );
}
export default App;
