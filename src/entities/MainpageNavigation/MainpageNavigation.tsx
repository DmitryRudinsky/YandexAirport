import React from 'react';
import * as classes from "@/shared/ui/MainpageNavBar/mainPageNavBar.module.scss";
import {Link} from "react-router-dom";
import YandexLogo from "@/shared/assets/YandexLogo";
import MainpageNavBar from "@/shared/ui/MainpageNavBar/MainpageNavBar";

const MainPageNavigation: React.FC = () => {
    return (
        <div className={classes.navBar__inner}>
            <Link to={"/"}>
                <YandexLogo width="12em" height="4em" color="#FF0000"/>
            </Link>
            <MainpageNavBar/>
        </div>
    );
};

export default MainPageNavigation;