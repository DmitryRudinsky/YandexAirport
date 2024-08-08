import React, {useState} from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import {MainPageNavigation} from "@/entities/MainpageNavigation/index";
import HeaderTitle from "@/shared/ui/HeaderTitle/HeaderTitle";
import MainPageTransitions from "@/entities/MainPageTransitions/MainPageTransitions";
import BackgroundChanging from "@/features/BackgroundChanging/BackgroundChanging";

const MainPageHeader: React.FC = () => {
    const [hoverElem, setHoverElem] = useState<string>("main");
    return (
        <header className="mainPage__header">
            <BackgroundChanging hoverElem={hoverElem}/>
            <div className={globalClasses.container}>
                <MainPageNavigation/>
                <HeaderTitle hoverElem={hoverElem}/>
                <MainPageTransitions setHoverElem={setHoverElem}/>
            </div>
        </header>
    );
};

export default MainPageHeader;