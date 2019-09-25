import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { card, btn } from "./Styles";
export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
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
            <div style={card}>First card</div>
            <div style={card}>Second card</div>
            <div style={card}>Third card</div>
            <div style={card}>Fourth card</div>
        </ItemsCarousel>
    );
};
