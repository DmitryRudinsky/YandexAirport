import React from 'react';
import * as classes from "@/shared/ui/MainpageNavBar/mainPageNavBar.module.scss";
import {Link} from "react-router-dom";
import YandexLogo from "@/shared/assets/YandexLogo";
import MainPageNavBar from "@/shared/ui/MainpageNavBar/MainPageNavBar";

const MainPageNavigation: React.FC = () => {
    return (
        <div className={classes.navBar__inner}>
            <Link to={"/"}>
                <YandexLogo width="12em" height="4em" color="#FF0000"/>
            </Link>
            <MainPageNavBar needFirst={true} needLast={true} content={["Купить билет", "Табло рейсов", "Услуги", "Схема аэропорта", "Парковка", "Как добраться", "Вакансии", "Меню"]}/>
        </div>
    );
};

export default MainPageNavigation;