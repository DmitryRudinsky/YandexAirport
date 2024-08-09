import React, {useEffect} from 'react';
import * as classes from "./header-title.module.scss";
import {useSpring, animated} from "react-spring";

interface HeaderTitleProps {
    hoverElem: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({hoverElem}) => {
    const obj = {
        main: ["Яндекс"," ", "Эйр"],
        departure: ["Вылет"],
        arrivals: ["Прилёт"],
        delay: ["Задержки"]
    };

    const title = obj[hoverElem as keyof typeof obj];

    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: {opacity: 0, transform: 'translateY(-40px)'},
        reset: true,
        config: {tension: 40, friction: 10}
    });

    return (
        <animated.h1 style={props} className={classes.header__title}>
                <h1 className={classes.header__title}>{title}</h1>
        </animated.h1>
    );
};

export default HeaderTitle;
