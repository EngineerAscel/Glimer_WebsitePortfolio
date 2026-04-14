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
                    <div className="Home-container">
                       <h2>Welcome to my website</h2>
                          <p className = "Home-description">Ascel Ray D. Glimer / 20</p>
                          <p className = "Home-description">3rd year Student of RTU</p>
                          <h2 className = "Home-description">Aspiring Software Engineer</h2>
                    </div>

                 <div>
                    <button className="Home-Button">Download CV</button>

                    </div>   
                    <img className="Main-Picture" src={profilePic} alt="Profile" />
                </div>
            </section>

            {/* Section 2: About Me */}
            <section id="about" className="Section-Wrapper">
                <div className="Text-Container" style={{position: 'relative', left: '0'}}>
                        <h1>Tech Stack Familliar With: </h1>
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <p></p>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>Php</li>
                                <p></p>
                                <li>SupaBase</li>
                                <li>MySql (Xampp)</li>
                            </ul>
                            <h1>Tools and AI</h1>
                            <ul>
                                <li>Visual Studio Code</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <p></p>
                                <li>ChatGPT</li>
                                <li>Gemini</li>
                                <li>Co Pilot</li>
                            </ul>
                </div>

                    <div className = "Icon-Slider">
                        <div className ="Icon-Track">
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
            <section id="projects" className="Section-Wrapper">
                <h2 style={{color: '#bc13fe'}}>My Projects</h2>
                {/* Add your project cards here later */}
            </section>
        </>
    );
}

export default Body;