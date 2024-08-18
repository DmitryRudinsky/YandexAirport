import React from 'react';
import Transition from "@/shared/ui/Transition/Transition";
import * as classes from "./MainPageTransitions.module.scss";

type Direction = "horizontal" | "vertical"

interface MainPageTransitionsProps{
    setHoverElem: React.Dispatch<React.SetStateAction<string>> | null;
    direction: Direction;
}

const MainPageTransitions: React.FC<MainPageTransitionsProps> = ({setHoverElem, direction}) => {
    return (
        <div className={direction === "horizontal" ? classes.transitions__inner__horizontal : classes.transitions__inner__vertical}>
            <Transition direction={direction} keyWord="departure" setHoverElem={setHoverElem} mainString="Вылет" subString="Вылетающим и провожающим"/>
            <Transition direction={direction} keyWord="arrivals" setHoverElem={setHoverElem} mainString="Прилёт" subString="Прилетающим и встречающим"/>
            <Transition direction={direction} keyWord="transfer" setHoverElem={setHoverElem} mainString="Пересадка" subString="Совершающим пересадку"/>
        </div>
    );
};

export default MainPageTransitions;