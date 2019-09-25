import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import {
    card,
    btn,
    header,
    img,
    strong,
    small,
    ul,
    li,
    tsmall
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

    const chevronWidth = 40;
    return (
        <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button style={btn}>{"<"}</button>}
            rightChevron={<button style={btn}>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
        >
            {repositories.map(repository => (
                <div style={card} key={repository.id}>
                    <header style={header}>
                        <img
                            style={img}
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <strong style={strong}>{repository.name}</strong>
                        <small style={small}>{repository.owner.login}</small>
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
                        <li style={li}>
                            {repository.lastCommit}
                            <small style={tsmall}>last comit</small>
                        </li>
                    </ul>
                </div>
            ))}
        </ItemsCarousel>
    );
};
