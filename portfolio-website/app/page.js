"use client"
import {useState} from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className = "logo">L</div>
            <div className = "logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#skills">Skills</a>
                </li>
                <li>
                    <a href = "#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto: damienherlnata@gmail.com" className="button">Contact</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>     
            </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1>
                        <small>Hi I'm</small>
                        Damien Herlnata
                    </h1>
                    <p>
                        Software Engineer and a Data Scientist in Indonesia who creates many projects on his free time.
                        <span>
                            I like problem solving and critical thinking which is why I'm really interested in Competitive Programming problems.
                        </span>
                    </p>
                    <div className="call-to-action">
                        <a href="#" className="button black">
                            View Resume
                        </a>
                        <a href="mailto: damienherlnata@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="#">
                            <img src="./images/github.png" alt="Github" width="48" />
                        </a>
                        <a href="#">
                            <img src="./images/linkedin.png" alt="LinkedIn" width="48" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./images/profile-pic.jpeg" alt="Damien Herlnata" width = "100%" />
            </div>
        </section>

        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./images/html.png" alt="HTML" width="128" />
                    <img src="./images/css.png" alt="CSS" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/azure.png" alt="Azure" width="128" />
                    <img src="./images/vscode.png" alt="VS Code" width="128" />
                    <img src="./images/python.png" alt="Python" width="128" />
                    <img src="./images/c++.png" alt="C++" width="128" />
                    <img src="./images/cSharp.png" alt="C#" width="128" />
                    <img src="./images/unity.png" alt="Unity" width="128" />

                    <img src="./images/html.png" alt="HTML" width="128" />
                    <img src="./images/css.png" alt="CSS" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/azure.png" alt="Azure" width="128" />
                    <img src="./images/vscode.png" alt="VS Code" width="128" />
                    <img src="./images/python.png" alt="Python" width="128" />
                    <img src="./images/c++.png" alt="C++" width="128" />
                    <img src="./images/cSharp.png" alt="C#" width="128" />
                    <img src="./images/unity.png" alt="Unity" width="128" />

                    <img src="./images/html.png" alt="HTML" width="128" />
                    <img src="./images/css.png" alt="CSS" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/azure.png" alt="Azure" width="128" />
                    <img src="./images/vscode.png" alt="VS Code" width="128" />
                    <img src="./images/python.png" alt="Python" width="128" />
                    <img src="./images/c++.png" alt="C++" width="128" />
                    <img src="./images/cSharp.png" alt="C#" width="128" />
                    <img src="./images/unity.png" alt="Unity" width="128" />

                    <img src="./images/html.png" alt="HTML" width="128" />
                    <img src="./images/css.png" alt="CSS" width="128" />
                    <img src="./images/javascript.png" alt="JS" width="128" />
                    <img src="./images/azure.png" alt="Azure" width="128" />
                    <img src="./images/vscode.png" alt="VS Code" width="128" />
                    <img src="./images/python.png" alt="Python" width="128" />
                    <img src="./images/c++.png" alt="C++" width="128" />
                    <img src="./images/cSharp.png" alt="C#" width="128" />
                    <img src="./images/unity.png" alt="Unity" width="128" />
                </div>
            </div>
        </section>
        
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>BackEnd</h3>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Unity</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>
                        Hi I'm Damien Herlnata, a software engineer
                        and developer who creates projects for self educational purpose.
                        I'm interested in making optimal algorithm for software which is 
                        why I also like to make lots of projects to look at a lot more problems.
                    </p>
                    <p>
                        I'm currently working on a project that includes skills for data science
                        because I'm about to take a course of data science for my university. I'm
                        also working on a game project at my free time to gain even more knowledge
                        about good ways of applying object oriented programming.
                    </p>
                </div>
            </div>
        </section>

        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <img src="./images/workplace-1.jpg" alt="Workplace - 1" width="100%" />
                            <figcaption>
                                Workplace - 1
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Workplace - 1</h3>
                    <div>2000 - 2020</div>
                    <p>This is an example description for a workplace</p>
                </article>

                <article>
                    <figure>
                        <div>
                            <img src="./images/workplace-2.jpg" alt="Workplace - 2" width="100%" />
                            <figcaption>
                                Workplace - 2
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Workplace - 2</h3>
                    <div>2000 - 2020</div>
                    <p>This is an example description for a workplace</p>
                </article>

                <article>
                    <figure>
                        <div>
                            <img src="./images/workplace-3.jpg" alt="Workplace - 3" width="100%" />
                            <figcaption>
                                Workplace - 3
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Workplace - 3</h3>
                    <div>2000 - 2020</div>
                    <p>This is an example description for a workplace</p>
                </article>
            </div>
        </section>

        <section id="projects" className="bento container">
            <h2>
                <small>
                    Previous
                </small>
                Completed Projects
            </h2>
            <div className="bento-grid">
                <a href="#" className="bento-item">
                    <img src="./images/bento-1.jpg" alt="BGCCI" width="100%" />
                </a>
                <a href="#" className="bento-item">
                    <img src="./images/bento-2.jpg" alt="Churhview" width="100%" />
                </a>
                <a href="#" className="bento-item">
                    <img src="./images/bento-3.jpg" alt="Harley" width="100%" />
                </a>
                <a href="#" className="bento-item">
                    <img src="./images/bento-5.jpg" alt="Bunbury" width="100%" />
                </a>
                <a href="#" className="bento-item">
                    <img src="./images/bento-6.jpg" alt="Running" width="100%" />
                </a>
                <a href="#" className="bento-item">
                    <img src="./images/bento-7.jpg" alt="School" width="100%" />
                </a>
            </div>
        </section>

        <section className="chatbot container">
            <h2>
                <small>
                    Talk to me
                </small>
                Chatbot
            </h2>
            <div className="chatbot-blue">
                <div className="chat-info">
                    <h3>Azure AI Chatbot</h3>
                    <p>
                        I've put together a chatbot here which knows all my skills,
                        work experience and has a copy of my CV/Resume. You can use it
                        to ask questions about me to get a better idea of who I am and 
                        what I've done.
                    </p>
                    <p>
                        You can also download my resume here if you want to take a look at it.
                        I'm currently looking for a new opportunity. So if you have a project
                        you think I'd be a good fit for, please feel free to get in touch with me!
                    </p>
                    <a href="#" className="button black">Download Resume</a>
                </div>
                <div className="chat-box">
                    <div className="scroll-area">
                        <ul id="chat-log">
                            <li>
                                <span className="avatarbot">AI</span>
                                <div className="message">
                                    Hi, I'm a friendly chatbot that lets you interact with
                                    this portfolio and CV. How can I help?
                                </div>
                            </li>
                            <li>
                                <span className="avataruser">User</span>
                                <div className="message">
                                    I have a question to ask you about this resume
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-message">
                        <input type="text" placeholder="Hey Damien, what skills are you best at?" />
                        <button className="button black">Send</button>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
