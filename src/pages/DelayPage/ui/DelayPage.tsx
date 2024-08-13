import React from 'react';
import * as classes from "./DelayPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";

const DelayPage: React.FC = () => {
    return (
        <main className={classes.delayPage}>
            <Header/>
            <SelectingInformation header={"Задержки"}/>
        </main>
    );
};

export default DelayPage;