import React, {useState, useEffect} from 'react';
import {useQuery} from "react-query";
import { getArrivalInfo} from "@/pages/ArrivalsPage/func/getArrivalInfo";
import {Spin} from "antd";
import * as classes from "./ArrivalsPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {getDates} from "@/shared/functions/getDate";
import {getTimeInterval} from "@/shared/functions/getTimeInterval";


const ArrivalsPage: React.FC = () => {


    const [today, todayFormat] = getDates();
    const [startInterval, endInterval] = getTimeInterval();
    const [daysName, setDaysName] = useState<string>(todayFormat);
    const [currentDate, setCurrentDate] = useState<string>(today);
    const [timeName, setTimeName] = useState<string>(`${startInterval} - ${endInterval}`);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);

    console.log(currentDate, currentInterval);

    const {
        data: arrTableData,
        isLoading: arrTableIsLoading,
        isError: arrTableIsError,
        refetch
    } = useQuery("arrTableData", () => getArrivalInfo(currentDate, currentInterval));

    useEffect(() => {
        setIsRefetching(true);
        refetch().then(() => setIsRefetching(false));
    }, [currentDate, currentInterval, refetch]);


    console.log(arrTableData);

    if (arrTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (arrTableIsError) return <h1>Error</h1>;
    else if (arrTableData !== undefined) {
        return (
            <main className={classes.arrivalsPage}>
                <Header/>
                <SelectingInformation header={"Прилёт"}
                                      setCurrentDate={setCurrentDate}
                                      setCurrentInterval={setCurrentInterval}
                                      daysName={daysName}
                                      setDaysName={setDaysName}
                                      timeName={timeName}
                                      setTimeName={setTimeName}
                />
            </main>
        );
    }
};

export default ArrivalsPage;