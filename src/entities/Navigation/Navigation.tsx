import React from 'react';
import * as classes from "./Navigation.module.scss";
import {Link} from "react-router-dom";
import Logo from "@/shared/assets/logos/LogoAirLight.svg";
import NavBar from "@/shared/ui/NavBar/NavBar";

interface NavigationProps{
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({setDrawer}) => {
    return (
        <div className={classes.header__nav}>
            <Link style={{zIndex: '10'}} to={"/"}>
                <Logo/>
            </Link>
            <NavBar direction={"horizontal"} content={["Меню"]} needFirst={false}
                    needLast={true} setDrawer={setDrawer}/>
        </div>
    );
};

export default Navigation;