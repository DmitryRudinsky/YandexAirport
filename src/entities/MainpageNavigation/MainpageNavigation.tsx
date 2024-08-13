import React from 'react';
import * as classes from "@/shared/ui/NavBar/NavBar.module.scss";
import {Link} from "react-router-dom";
import NavBar from "@/shared/ui/NavBar/NavBar";
import Logo from "@/shared/assets/logos/LogoAirDark.svg"

interface MainPageNavigationProps{
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const MainPageNavigation: React.FC<MainPageNavigationProps> = ({setDrawer}) => {
    return (
        <div className={classes.navBar__inner}>
            <Link style={{zIndex: '10'}} to={"/"}>
                <Logo/>
            </Link>
            <NavBar direction='horizontal' setDrawer={setDrawer} needFirst={true} needLast={true} content={["Купить билет", "Табло рейсов", "Услуги", "Схема аэропорта", "Парковка", "Как добраться", "Вакансии", "Меню"]}/>
        </div>
    );
};

export default MainPageNavigation;