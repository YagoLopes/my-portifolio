import React, { useState, useEffect } from "react";
import api from "./service/api";
import "./App.css";
import logo from "./assets/img/logo.jpeg";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaGoogle,
    FaFacebook
} from "react-icons/fa";
import fork from "./assets/img/icons/fork.png"
import issues from "./assets/img/icons/issues.png"
import stars from "./assets/img/icons/star.png"
import github from "./assets/img/icons/github.png"
import Animation from "./Animate";

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        Animation();
        _push();
    }, []);
    async function _push() {
        try {
            const response = await api.get("/repos");

            setRepositories(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="container">
         <div id="card">
                <img src={logo} alt="Yago Lopes"></img>
                <header>Yago Lopes</header>
                </div>
                <p>
                    Olá! Meu nome é Yago Lopes, e sou formado em Análise e
                    Desenvolvimento de Sistemas. Conclui meu estágio em uma das
                    melhores empresas de desenvolvimento da minha cidade, lá
                    aprendi a trabalhar remoto, e conheci algumas ferramentas
                    que utilizo em meu leque de soft skills. Eu tenho um
                    conjunto diversificado de habilidades, desde o design, HTML
                    + CSS + Javascript, JSX, até o node.js. Administro e
                    personalizo minhas aplicações em servidores Linux, com
                    padronização em containers Docker e versionamento Git.
                </p>
        
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
                <a href="https://yagolopeslazaro@gmail.com">
                    <FaGoogle />
                </a>
                <a href="https://web.facebook.com/yago.lopes.1654700">
                    <FaFacebook />
                </a>
            </footer>
            <aside>
                <header>Projetos GitHub <img alt="github" src={github} ></img></header>
         
                {repositories.map(repository => (  
                   
                <div key={repository.id}>
                   
                    <span><a href={repository.html_url}> {repository.name}</a></span>
                    <ul>
                    <li><img alt="stars" src={stars} ></img>{repository.stargazers_count}</li>
                    <li><img alt="forks" src={fork} ></img>{repository.forks_count}</li>
                    <li><img alt="issues" src={issues} ></img>{repository.open_issues_count}</li>
                    </ul>
                    
                </div>
                
                ))}
            </aside>
            <ul className="squares" ></ul>
        </div>
    );
}
