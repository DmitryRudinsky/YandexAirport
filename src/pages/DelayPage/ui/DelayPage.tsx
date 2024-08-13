import React from 'react';
import * as classes from "./DelayPage.module.scss";
import {Header} from "@/widgets/Header";

const DelayPage: React.FC = () => {
    return (
        <main className={classes.delayPage}>
            <Header/>
        </main>
    );
};

export default DelayPage;