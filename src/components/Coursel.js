import React, { useState, useEffect } from "react";
import {
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaGithubAlt
} from "react-icons/fa";
import ItemsCarousel from "react-items-carousel";
import {
    card,
    header,
    icon,
    small,
    ul,
    li,
    tsmall,
    btnLeft,
    btnRight
} from "./Styles";
import api from "../service/api";
export default () => {
    useEffect(() => {
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
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [repositories, setRepositories] = useState([]);

    const chevronWidth = 10;
    return (
        <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2}
            gutter={10}
            leftChevron={
                <button style={btnLeft}>
                    <FaArrowAltCircleLeft />
                </button>
            }
            rightChevron={
                <button style={btnRight}>
                    <FaArrowAltCircleRight />
                </button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
        >
            {repositories.map(repository => (
                <div style={card} key={repository.id}>
                    <header style={header}>
                        <FaGithubAlt style={icon} />
                        <small style={small}>{repository.name}</small>
                    </header>

                    <ul style={ul}>
                        <li style={li}>
                            {repository.stargazers_count}
                            <small style={tsmall}>stars</small>
                        </li>
                        <li style={li}>
                            {repository.forks_count}
                            <small style={tsmall}>forks</small>
                        </li>
                        <li style={li}>
                            {repository.open_issues_count}
                            <small style={tsmall}>issues</small>
                        </li>
                    </ul>
                </div>
            ))}
        </ItemsCarousel>
    );
};
