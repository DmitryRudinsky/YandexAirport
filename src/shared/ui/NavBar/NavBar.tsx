import React from 'react';
import * as classes from "@/shared/ui/NavBar/NavBar.module.scss";

type Direction = "horizontal" | "vertical"

interface MainPageNavBarProps {
    content: string[];
    needFirst: boolean;
    needLast: boolean;
    setDrawer: React.Dispatch<React.SetStateAction<boolean>> | null;
    direction: Direction
}

const NavBar: React.FC<MainPageNavBarProps> = ({content, needFirst, needLast, setDrawer, direction}) => {
    return (
        <nav>
            <ul className={direction === "horizontal" ? classes.navigation__list__horizontal : classes.navigation__list__vertical}>
                {content.map((list__elem: string, index: number) => {
                    if (index === 0 && needFirst) {
                        return <li key={index} className={classes.navigation__item__first}>{list__elem}</li>
                    }else if(index === content.length - 1 && needLast) {
                        return <li key={index} className={classes.navigation__item__last} onClick={() => setDrawer(true)}>{list__elem}</li>
                    }else return <li key={index} className={classes.navigation__item}>{list__elem}</li>
                })}
            </ul>
        </nav>
    );
};

export default NavBar;