import React from "react";
import "./App.css";
import { FaVuejs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";
import intro from "./assets/img/intro.png";
import code from "./assets/img/code.png";
import sandbox from "./assets/img/sandbox.png";

function App() {
    return (
        <div id="container">
            <nav>
                <ul>
                    <li>
                        {" "}
                        <a href="##"> Landing </a>
                    </li>
                    <li>
                        <a href="##">GitHub</a>
                        <a href="##">Docs</a>
                        <a href="##">Pricing</a>
                    </li>
                </ul>
            </nav>
            <section id="intro">
                <h1>Drag and drop page building for any site</h1>
                <span>
                    One simple API integration turns everyone on your team into
                    a web developer
                </span>
                <a href="##">TRY IT FREE</a>
                <img src={intro} alt="img1"></img>
            </section>
            <section id="code">
                <span>How it Works</span>
                <ul>
                    <li>
                        <img src={img1} alt="img1"></img>
                        <span>1. Connect to your site</span>
                        <p>
                            Integrating Builder onto your existing site is as
                            easy as hooking up one API or SDK.
                        </p>
                    </li>
                    <li>
                        <img src={img2} alt="img2"></img>
                        <span>2. Create new pages</span>
                        <p>Create new pages visually with</p>
                    </li>
                    <li>
                        <img src={img3} alt="img3"></img>
                        <span>3. Publish</span>
                        <p>And your new page is live, instantly!</p>
                    </li>
                </ul>
            </section>
            <section id="tech">
                <header>Yep, it works for any site</header>
                <p>
                    Integration is as easy as any other headless CMS, and saves
                    you from endless static coding request
                </p>
                <ul id="items">
                    <li>
                        <a href="##"> REST API Example</a>
                    </li>
                    <li>
                        <a href="##"> React Example</a>
                    </li>
                    <li>
                        <a href="##">Vanilia JS Example</a>
                    </li>
                </ul>
                <img src={code} alt="code" id="code" />
                <a href="##" id="sandbox">
                    <img src={sandbox} alt="sandbox"></img>{" "}
                    <span>Try it in CodeSandbox</span>
                </a>
                <ul id="icons">
                    <li>
                        <FaCss3 />
                        <span>CSS3</span>
                    </li>
                    <li>
                        <FaHtml5 />
                        <span>HTML5</span>
                    </li>
                    <li>
                        <FaReact />
                        <span>React.js</span>
                    </li>
                    <li>
                        <FaNodeJs />
                        <span>Node.js</span>
                    </li>
                    <li>
                        <FaVuejs />
                        <span>Vue.js</span>
                    </li>
                </ul>

                <a href="##" id="view">
                    {" "}
                    View The Quick Start Guide{" "}
                </a>
            </section>
            <footer>
                <section id="avatar">
                    <header>Developer by</header>
                    <img
                        src="https://avatars2.githubusercontent.com/u/42846057?v=4"
                        alt="avatar"
                    ></img>
                    <p>
                        “We offloaded 100% of menial engineering tasks to
                        Builder. It allows our developers to focus on bigger
                        problems and has an immediate turnaround time.”
                    </p>
                    <span>John Necef, Founder and CEO @ The New Paper</span>
                </section>
                <section id="azul">
                    <header>
                        Did we mention this page was made with Builder?
                    </header>
                    <span>What will you create?</span>
                    <a href="##">START NOW</a>
                </section>
                <section id="links">
                    <div>
                        <span>Docs</span>
                        <span>Github</span>
                    </div>
                    <div>
                        <span>Pricing</span>
                        <span>Login</span>
                        <span>Signup</span>
                    </div>
                    <div>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default App;
