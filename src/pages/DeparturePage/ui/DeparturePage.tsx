import React from 'react';
import * as classes from "./DeparturePage.module.scss";
import {Header} from "@/widgets/Header";

const DeparturePage: React.FC = () => {
    return (
        <main className={classes.departurePage}>
            <Header/>
        </main>
    );
};

export default DeparturePage;