import React, { useEffect } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from './logo.jpeg';
import data from './data';
import { Container } from './Styles';

import Animation from './Animate';

export default function App() {
  useEffect(() => {
    Animation();
  }, []);
  return (
    <Container>
      <ul className="icons">
        <a href={data.instagram}>
          <li id="insta">
            <FaInstagram />
          </li>
        </a>
        <a href={data.github}>
          <li id="git">
            <FaGithub />
          </li>
        </a>
        <a href={data.linkedim}>
          <li id="linke">
            <FaLinkedin />
          </li>
        </a>
      </ul>

      <ul className="squares" />

      <img src={logo} alt={data.nome} />
      <header>{data.nome}</header>

      <p>{data.description}</p>

      <a id="button" href={data.codesandbox}>
                Go!
      </a>
    </Container>
  );
}
