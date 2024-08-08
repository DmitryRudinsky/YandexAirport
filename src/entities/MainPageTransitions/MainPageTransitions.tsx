import React from 'react';
import Transition from "@/shared/ui/Transition/Transition";
import * as classes from "./MainPageTransitions.module.scss";

interface MainPageTransitionsProps{
    setHoverElem: React.Dispatch<React.SetStateAction<string>>;
}

const MainPageTransitions: React.FC<MainPageTransitionsProps> = ({setHoverElem}) => {
    return (
        <div className={classes.transitions__inner}>
            <Transition keyWord="departure" setHoverElem={setHoverElem} mainString="Вылет" subString="Вылетающим и провожающим"/>
            <Transition keyWord="arrivals" setHoverElem={setHoverElem} mainString="Прилёт" subString="Прилетающим и встречающим"/>
            <Transition keyWord="delay" setHoverElem={setHoverElem} mainString="Задержки" subString="Задерживающиеся рейсы"/>
        </div>
    );
};

export default MainPageTransitions;