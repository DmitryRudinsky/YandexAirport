import React, {useState} from 'react';
import {useQuery} from "react-query";
import {getArr} from "@/pages/ArrivalsPage/func/getArr";
import {Spin} from "antd";
import * as classes from "./ArrivalsPage.module.scss";
import * as globalClasses from "@/shared/global_styles/_global.module.scss";
import Logo from "@/shared/assets/logos/LogoAirLight.svg"
import {Link} from "react-router-dom";
import NavBar from "@/shared/ui/NavBar/NavBar";
import {Header} from "@/widgets/Header";

const ArrivalsPage: React.FC = () => {
    // const {
    //     data: arrTableData,
    //     isLoading: arrTableIsLoading,
    //     isError: arrTableIsError
    // } = useQuery("arrTableData", () => getArr());
    // console.log(arrTableData);

    // if (arrTableIsLoading) return <Spin fullscreen={true}/>;
    // else if (arrTableIsError) return <h1>Error</h1>;
    // else if (arrTableData !== undefined) {
        return (
            <main className={classes.arrivalsPage}>
                <Header/>
            </main>
        );
    // }
};

export default ArrivalsPage;