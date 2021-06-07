import '../styles/styles.css';
import profilePicture from '../assets/images/hibban.jpg';

import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Automatic Data Master Server",
    stack: ["Express.js", "MySQL"],
    desc: "",
    url: "https://github.com/donbasta"
  },
  {
    title: "Avatar GUI Card Game",
    stack: ["Java", "Gradle", "JavaFX"],
    desc: "",
    url: "https://github.com/donbasta"
  },
  {
    title: "Automatic Data Master Server",
    stack: ["Express.js", "MySQL"],
    desc: "",
    url: "https://github.com/donbasta"
  }
];

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="header-section">
          <h1>Personal Page</h1>
          <h2>Farras Mohammad Hibban Faddila</h2>
        </div>
      </div>
      <ul id="navigation" className="navbar">
        <li className="navbar-list"> <a href="#projects">Projects</a> </li>
        <li className="navbar-list"> <a href="#experience">Experience</a> </li>
        <li className="navbar-list"> <a href="#contacts">Contacts</a> </li>
      </ul>
      <div className="wrapper">
        <div id = "content" className="body-content">
          <div className="sub-body-container img-container" style={{backgroundColor: "#353e45"}}>
            <div id="about-me" className="sub-body">
              <img className="avatar" src={profilePicture} alt="hibban"/>
              <div className="bio">
                <div className="info">
                  Competitive Programming and Math Enthusiast
                </div>
                <br/>
                <div className="info">
                  <strong>Informatics Engineering </strong>
                </div>
                <div className="info">
                  Institut Teknologi Bandung 2018
                </div>
              </div>
            </div>
          </div>
          <div className="sub-body-container" style={{backgroundColor: "#fcb61d"}}>
            <div id="projects" className="sub-body">
              <h1> Projects </h1>
              <div className="project-card-container">
                {projects.map(project => {
                  const {title, stack, desc, url} = project;
                  return <ProjectCard title={title} stack={stack} desc={desc} url={url} />
                })}
              </div>
            </div>
          </div>
          <div className="sub-body-container" style={{backgroundColor: "#353e45"}}>
            <div id="experience" className="sub-body" style={{color: "white"}}>
              <h1> Experience </h1>
              <p>More like history, I guess.</p>
              <div className="timeline">
                <ul>
                  <li>
                    <div>
                      <time>28 Februari 2001</time>
                      Born in Bukittinggi, West Sumatra.
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>2006 - 2012</time>
                      Elementary School Student at SDN Pondok Ranggon 01
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>2012 - 2015</time>
                      Junior High School Student at SMP Kharisma Bangsa
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>2015 - 2018</time>
                      Senior High School Student at SMA Kharisma Bangsa
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>2017 - 2018</time>
                      President of TOSKA Kharisma Bangsa (Tim Olimpiade Sains Kharisma Bangsa)
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>2018 - now</time>
                      Undergraduate at ITB
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>September 2019 - December 2019</time>
                      Programming Assistant at Comlabs ITB
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>June 2020 - August 2020</time>
                      Software Development Engineer Intern at GDP Labs
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>April 2020 - now</time>
                      Staff of Tech Issues and Exploration at HMIF ITB
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>July 2020 - now</time>
                      Vice head of Competitive Programming Division at Arkavidia
                    </div>
                  </li>
                  <li>
                    <div>
                      <time>August 2000 - now</time>
                      Graphics and Artificial Intelligence Laboratory Assistant
                      Assistant Coordinator for Computational Logic course
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sub-body-container" style={{backgroundColor: "#fcb61d"}}>
            <div id="contacts" className="sub-body">
              <h1>Contacts</h1>
              <div className="social-media-card-container">
                <div className="social-media-card">
                  <div className="icon"></div>
                  <a className="platform" href="https://github.com/donbasta">Github</a>
                </div>
                <div className="social-media-card">
                  <div className="icon"></div>
                  <a className="platform" href="https://www.facebook.com/farrashibban.faddila/">Facebook</a>
                </div>
                <div className="social-media-card">
                  <div className="icon"></div>
                  <a className="platform" href="https://www.linkedin.com/in/farrasfaddila/">LinkedIn</a>
                </div>
                <div className="social-media-card">
                  <div className="icon"></div>
                  <a className="platform" href="https://www.instagram.com/faddilafarras/">Instagram</a>
                </div>
                <div className="social-media-card">
                  <div className="icon"></div>
                  <a className="platform" href="mailto:faddilafarras@gmail.com">Mail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;