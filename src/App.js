import React from "react";
import "./App.css";
import logo from "./assets/img/logo.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function App() {
    return (
        <div id="container">
            <main>
                <img src={logo} alt="Yago Lopes"></img>
                <header>Yago Lopes</header>
                <p>
                    I was gonna take the time to sit down and write you a little
                    letter. But I thought a song would probably be a little
                    better. Instead of a ,letter. That you'd probably just shred
                    up--yeah. I stumbled on your picture yesterday and it made
                    me stop and think of. How much of a waste it'd ,be for me to
                    put some ink to, a stupid piece a. Paper, I'd rather let you
                    see how. Much I fucking hate you in a freestyle.
                </p>
            </main>

            <div id="corusel">
                <aside>your content</aside>
                <aside>your content</aside>
                <aside>your content</aside>
            </div>

            <footer>
                <a href="##">
                    <FaInstagram />
                </a>

                <a href="##">
                    <FaGithub />
                </a>

                <a href="##">
                    <FaLinkedin />
                </a>
            </footer>
        </div>
    );
}
