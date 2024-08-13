import React, {useState} from 'react';
import {useQuery} from "react-query";
import {getArr} from "@/pages/ArrivalsPage/func/getArr";
import {Spin} from "antd";
import * as classes from "./ArrivalsPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";

const ArrivalsPage: React.FC = () => {
    const {
        data: arrTableData,
        isLoading: arrTableIsLoading,
        isError: arrTableIsError
    } = useQuery("arrTableData", () => getArr());
    console.log(arrTableData);

    if (arrTableIsLoading) return <Spin fullscreen={true}/>;
    else if (arrTableIsError) return <h1>Error</h1>;
    else if (arrTableData !== undefined) {
        return (
            <main className={classes.arrivalsPage}>
                <Header/>
                <SelectingInformation header={"Прилёт"}/>
            </main>
        );
    }
};

export default ArrivalsPage;