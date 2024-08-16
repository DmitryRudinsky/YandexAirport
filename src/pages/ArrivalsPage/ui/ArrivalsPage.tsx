import React, {useState, useEffect} from 'react';
import {useQuery} from "react-query";
import {getArr} from "@/pages/ArrivalsPage/func/getArr";
import {Spin} from "antd";
import * as classes from "./ArrivalsPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {getDates} from "@/shared/functions/getDate";
import {getTimeInterval} from "@/shared/functions/getTimeInterval";


const ArrivalsPage: React.FC = () => {
    const [today] = getDates();
    const [startInterval, endInterval] = getTimeInterval();

    const [currentDate, setCurrentDate] = useState<string>(today);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);

    const {
        data: arrTableData,
        isLoading: arrTableIsLoading,
        isError: arrTableIsError,
        refetch
    } = useQuery("arrTableData", () => getArr(currentDate, currentInterval));

    useEffect(() => {
        setIsRefetching(true);  // Устанавливаем состояние "загрузка"
        refetch().then(() => setIsRefetching(false)); // После завершения refetch снимаем состояние "загрузка"
    }, [currentDate, refetch]);


    console.log(arrTableData);

    if (arrTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (arrTableIsError) return <h1>Error</h1>;
    else if (arrTableData !== undefined) {
        return (
            <main className={classes.arrivalsPage}>
                <Header/>
                <SelectingInformation header={"Прилёт"} setCurrentDate={setCurrentDate}/>
            </main>
        );
    }
};

export default ArrivalsPage;