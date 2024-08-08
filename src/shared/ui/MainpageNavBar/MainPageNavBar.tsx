import React from 'react';
import * as classes from "@/shared/ui/MainpageNavBar/mainPageNavBar.module.scss";

interface MainPageNavBarProps {
    content: string[];
    needFirst: boolean;
    needLast: boolean;
}

const MainPageNavBar: React.FC<MainPageNavBarProps> = ({content, needFirst, needLast}) => {
    return (
        <nav>
            <ul className={classes.navigation__list}>
                {content.map((list__elem: string, index: number) => {
                    if (index === 0 && needFirst) {
                        return <li key={index} className={classes.navigation__item__first}>{list__elem}</li>
                    }else if(index === content.length - 1 && needLast) {
                        return <li key={index} className={classes.navigation__item__last}>{list__elem}</li>
                    }else return <li key={index} className={classes.navigation__item}>{list__elem}</li>
                })}
            </ul>
        </nav>
    );
};

export default MainPageNavBar;