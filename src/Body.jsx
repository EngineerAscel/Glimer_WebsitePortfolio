import profilePic from './assets/niki.png'
import Cplus from './assets/C++.png'
import Css from './assets/Css.png'
import Html from './assets/Html.png'
import Java from './assets/java.png'
import JavaScript from './assets/js.webp'
import Mysql from './assets/Mysql.png'
import Node from './assets/Node.png'
import Php from './assets/Php.png'
import Python from './assets/Python.png'
import React from './assets/React.png'
import Supabase from './assets/Supabase.webp'

function Body() {
    return (
        <>
            {/* Section 1: Home */}
            <section id="home" className="Section-Wrapper">
                <div className="Main-Container">
                    <div className="Hero-Panel">
                        <div className="Home-content">
                            <div className="Home-container">
                                <h2>Welcome to my website</h2>
                                <p className="Home-description">Ascel Ray D. Glimer / 20</p>
                                <p className="Home-description">4th year Student of RTU</p>
                                <h2 className="Home-description">Aspiring Software Engineer</h2>
                            </div>
                            <a href="/Ascel_Ray_Glimer_CV.pdf" download="Glimer_CV.pdf">
                                <button className="Home-Button">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="Image-Card">
                        <img className="Main-Picture" src={profilePic} alt="Profile" />
                    </div>
                </div>
            </section>

            {/* Section 2: Who Am I */}
            <section id="whoami" className="Section-Wrapper WhoAmI-Section">
                <h1>Who Am I</h1>
                <div className="WhoAmI-Grid">
                    <div className="WhoAmI-Panel WhoAmI-Profile">
                        <div className="Profile-Header">
                            <p className="Profile-Name">Ascel Ray Glimer</p>
                            <p className="Profile-Details">09686465621 • Pasig City</p>
                        </div>
                        <p className="Profile-Intro">
                            I'm Ascel Ray Glimer, a 4th-year BSIT student with a strong passion for creating meaningful digital experiences. My journey in tech began with curiosity — taking apart old computers and learning how websites were made. I enjoy building clean, modern interfaces and solving real problems through thoughtful code.
                        </p>
                        <div className="Profile-Stats">
                            <div className="Profile-Stat">
                                <span>Education</span>
                                <strong>4th-year BSIT</strong>
                            </div>
                            <div className="Profile-Stat">
                                <span>Focus</span>
                                <strong>Web Development</strong>
                            </div>
                            <div className="Profile-Stat">
                                <span>Status</span>
                                <strong>Open to internship roles</strong>
                            </div>
                        </div>
                    </div>
                    <div className="WhoAmI-Panel WhoAmI-Details">
                        <div className="Work-Section">
                            <h2>Experience</h2>
                            
                            <div className="Work-Item">
                                <span className="Work-Period">2025</span>
                                <strong>168 FCC Formula Callcenter</strong>
                                <p>Accounting Clerk</p>
                                <p>Data Encoder</p>
                            </div>
                        </div>
                        <div className="Work-Section">
                            <h2>Education</h2>
                            <div className="Work-Item">
                                <strong>Bachelor of Science in Information Technology</strong>
                                <p>Rizal Technological University | 2023 - Present</p>
                            </div>
                            <div className="Work-Item">
                                <strong>Information Communication Technology - ICT Programming</strong>
                                <p>Arellano University Pasig Campus | 2021 - 2023</p>
                            </div>
                        </div>
                        <div className="Work-Section">
                            <h2>Interests</h2>
                            <div className="Interest-Chips">
                                <span className="Interest-Chip">Web Development</span>
                                <span className="Interest-Chip">UI/UX Design</span>
                                <span className="Interest-Chip">Computer Hardware</span>
                                <span className="Interest-Chip">Mobile Application</span>
                                <span className="Interest-Chip">Technical Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: About Me */}
            <section id="about" className="Section-Wrapper">
                <div className="Text-Container">
                    <div className="Skill-Section">
                        <h1>Tech Stack Familiar With:</h1>
                        <div className="Skill-Columns">
                            <div className="Skill-Block">
                                <ul>
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div className="Skill-Block">
                                <ul>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>Php</li>
                                    <li>SupaBase</li>
                                    <li>MySql (Xampp)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Skill-Section">
                        <h1>Tools and AI</h1>
                        <div className="Skill-Columns">
                            <div className="Skill-Block">
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>ChatGPT</li>
                                    <li>Gemini</li>
                                    <li>Co Pilot</li>
                                </ul>
                            </div>
                            <div className="Skill-Block">
                                <p>Comfortable using modern workflows, version control, and AI assistance for faster development.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Icon-Slider">
                    <div className="Icon-Track">
                        <img className="Mini-Icon" src={Cplus} alt="C++" />
                        <img className="Mini-Icon" src={Css} alt="CSS" />
                        <img className="Mini-Icon" src={Html} alt="HTML" />
                        <img className="Mini-Icon" src={Java} alt="Java" />
                        <img className="Mini-Icon" src={JavaScript} alt="JavaScript" />
                        <img className="Mini-Icon" src={Mysql} alt="MySQL" />
                        <img className="Mini-Icon" src={Node} alt="Node.js" />
                        <img className="Mini-Icon" src={Php} alt="Php" />
                        <img className="Mini-Icon" src={Python} alt="Python" />
                        <img className="Mini-Icon" src={React} alt="React" />
                        <img className="Mini-Icon" src={Supabase} alt="Supabase" />
                        <img className="Mini-Icon" src={Cplus} alt="C++" />
                        <img className="Mini-Icon" src={Css} alt="CSS" />
                        <img className="Mini-Icon" src={Html} alt="HTML" />
                        <img className="Mini-Icon" src={Java} alt="Java" />
                        <img className="Mini-Icon" src={JavaScript} alt="JavaScript" />
                        <img className="Mini-Icon" src={Mysql} alt="MySQL" />
                        <img className="Mini-Icon" src={Node} alt="Node.js" />
                        <img className="Mini-Icon" src={Php} alt="Php" />
                        <img className="Mini-Icon" src={Python} alt="Python" />
                        <img className="Mini-Icon" src={React} alt="React" />
                        <img className="Mini-Icon" src={Supabase} alt="Supabase" />
                    </div>
                </div>
                
            </section>

           {/* Section 3: Projects */}
            <section id="projects" className="Section-Wrapper Project-Section">
                <h1>My Projects</h1>
                {/* Add your project cards here later */}

                <div className="Project-Card">
                    <h2>1D GARAGE SYSTEM</h2>

                    {/* YouTube Video Embed */}
                    <div className="Video-Container">
                        <iframe
                            src="https://www.youtube.com/embed/xBex4Ri0KD8"
                            title="1D GARAGE SYSTEM Video Showcase"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p><a href="https://www.youtube.com/embed/xBex4Ri0KD8" target="_blank" rel="noreferrer">View on Youtube</a></p>
                </div>
            </section>
        </>
    );
}

export default Body;