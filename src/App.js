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
                    Olá! Meu nome é Yago Lopes, e sou formado em Análise e
                    Desenvolvimento de Sistemas. Conclui meu estágio em uma das
                    melhores empresa de desenvolvimento da minha cidade, lá
                    aprendi a trabalhar remoto, e conheci algumas ferramentas
                    que utilizo em meu leque de soft skills. Eu tenho um
                    conjunto diversificado de habilidades, desde o design, HTML
                    + CSS + Javascript, JSX, até o node.js. Administro e
                    personalizo minhas aplicações em servidores Linux, com
                    padronização em containers Docker e versionamento Git.
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
