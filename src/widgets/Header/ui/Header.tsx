import React, {useState} from 'react';
import * as classes from "./Header.module.scss";
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import Navigation from "@/entities/Navigation/Navigation";
import {Drawer} from "antd";
import DrawerContent from "@/entities/DrawerContent/DrawerContent";

const Header = () => {
    const [drawer, setDrawer] = useState<boolean>(false);
    return (
        <header className={classes.header}>
            <div className={globalClasses.container}>
                <Navigation setDrawer={setDrawer}/>
            </div>
            <Drawer title="Меню" onClose={() => setDrawer(false)} open={drawer}>
                <DrawerContent />
            </Drawer>
        </header>
    );
};

export default Header;