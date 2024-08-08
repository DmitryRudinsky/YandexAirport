import React, {useState} from 'react';
import {BackGroundVideo} from "@/entities/backGroundVideo";
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import {MainPageNavigation} from "@/entities/MainpageNavigation/index";
import HeaderTitle from "@/shared/ui/HeaderTitle/HeaderTitle";
import MainPageTransitions from "@/entities/MainPageTransitions/MainPageTransitions";

const MainPageHeader: React.FC = () => {
    const [hoverElem, setHoverElem] = useState<string>("main");
    console.log(hoverElem);
    return (
        <header className="mainPage__header">
            <BackGroundVideo/>
            <div className={globalClasses.container}>
                <MainPageNavigation/>
                <HeaderTitle hoverElem={hoverElem}/>
                <MainPageTransitions setHoverElem={setHoverElem}/>
            </div>
        </header>
    );
};

export default MainPageHeader;