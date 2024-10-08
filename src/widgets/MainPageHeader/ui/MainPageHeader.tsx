import React, {useState} from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import {MainPageNavigation} from "@/entities/MainpageNavigation/index";
import HeaderTitle from "@/shared/ui/HeaderTitle/HeaderTitle";
import MainPageTransitions from "@/entities/MainPageTransitions/MainPageTransitions";
import BackgroundChanging from "@/features/BackgroundChanging/BackgroundChanging";
import { Drawer } from "antd";
import DrawerContent from "@/entities/DrawerContent/DrawerContent";
import * as classes from "@/widgets/MainPageHeader/ui/MainPage.module.scss"


const MainPageHeader: React.FC = () => {
    const [hoverElem, setHoverElem] = useState<string>("main");
    const [drawer, setDrawer] = useState<boolean>(false);

    return (
        <header className={classes.header}>
            <div className={classes.backgroundVideoWrapper}>
                <BackgroundChanging hoverElem={hoverElem} />
            </div>
            <div className={globalClasses.container}>
                <MainPageNavigation setDrawer={setDrawer} />
                <HeaderTitle hoverElem={hoverElem} />
                <MainPageTransitions direction="horizontal" setHoverElem={setHoverElem} />
            </div>
            <Drawer title="Меню" onClose={() => setDrawer(false)} open={drawer}>
                <DrawerContent />
            </Drawer>
        </header>
    );
};

export default MainPageHeader;
