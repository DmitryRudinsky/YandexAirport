import React from 'react';
import {BackGroundVideo} from "@/entities/backGroundVideo";
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import {MainPageNavigation} from "@/entities/MainpageNavigation";

const MainPageHeader: React.FC = () => {
    return (
        <header className="mainPage__header">
            <BackGroundVideo/>
            <div className={globalClasses.container}>
                <MainPageNavigation/>
            </div>
        </header>
    );
};

export default MainPageHeader;