import React from 'react';
import * as classes from "./DeparturePage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";

const DeparturePage: React.FC = () => {
    return (
        <main className={classes.departurePage}>
            <Header/>
            <SelectingInformation header={"Вылет"}/>
        </main>
    );
};

export default DeparturePage;