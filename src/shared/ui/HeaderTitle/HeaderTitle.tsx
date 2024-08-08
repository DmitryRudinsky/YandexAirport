import React from 'react';
import * as classes from "./header-title.module.scss"

interface HeaderTitle {
    hoverElem: string;
}

const HeaderTitle: React.FC<HeaderTitle> = ({hoverElem}) => {
    const obj = {
        main: ["Я", "ндекс", "A", "ir"],
        departure: ["В", "ылет"],
        arrivals: ["П", "рилёт"],
        delay: ["З", "адержки"]
    }
    const title = obj[hoverElem as keyof typeof obj];

    if (title.length === 4) {
        return (
            <h1 className={classes.header__title}>
                <span className={classes.span}>{title[0]}</span>{title[1]}<span className={classes.span}>{title[2]}</span>{title[3]}
            </h1>
        );
    }else{
        return (
            <h1 className={classes.header__title}>
                <span className={classes.span}>{title[0]}</span>{title[1]}
            </h1>
        );
    }
};

export default HeaderTitle;