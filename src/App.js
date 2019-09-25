import React from "react";
import "./App.css";
import logo from "./assets/img/logo.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Corusel from "./components/Coursel";

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

            <Corusel />
            <footer>
                <a href="https://www.instagram.com/yagolopeslazaro/">
                    <FaInstagram />
                </a>

                <a href="https://github.com/YagoLopes">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/yago-lopes-l%C3%A1zaro-917536140/">
                    <FaLinkedin />
                </a>
            </footer>
        </div>
    );
}
