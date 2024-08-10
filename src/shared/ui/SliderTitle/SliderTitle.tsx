import React, { useEffect, useState } from 'react';
import * as classes from "./SliderTitle.module.scss";
import { animated, useSpring } from "react-spring";

interface SliderTitleProps {
    imageCnt: number;
    isHover: boolean;
}

const SliderTitle: React.FC<SliderTitleProps> = ({ imageCnt, isHover }) => {

    const titles = ["Электронный посадочный талон", "А.С. Пушкин", "Новая функция сайта"];
    const subTitles = ["Как воспользоваться услугой", "Слушайте любимые произведения в полёте", "Информация о вашем рейсе в 2 клика"];

    const [titleProps, setTitleProps] = useSpring(() => ({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
    }));

    const [subTitleProps, setSubTitleProps] = useSpring(() => ({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(20px)' },
    }));

    useEffect(() => {
        setTitleProps({
            opacity: 1,
            transform: 'translateY(0px)',
            from: { opacity: 0, transform: 'translateY(-20px)' },
            reset: true,
        });
        setSubTitleProps({
            opacity: 1,
            transform: 'translateY(0px)',
            from: { opacity: 0, transform: 'translateY(20px)' },
            reset: true,
        });
    }, [imageCnt]);

    return (
        <div className={classes.slider__title__container}>
            <animated.h2
                style={titleProps}
                className={`${classes.slider__title} ${isHover ? classes.slider__title__act : ""}`}
            >
                {titles[imageCnt]}
            </animated.h2>
            <animated.p style={subTitleProps}>
                {subTitles[imageCnt]}
            </animated.p>
        </div>
    );
};

export default SliderTitle;