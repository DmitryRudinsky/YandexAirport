import React, {useEffect, useState} from 'react';
import * as classes from "./DeparturePage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {getDates} from "@/shared/functions/getDate";
import {getTimeInterval} from "@/shared/functions/getTimeInterval";
import {useQuery} from "react-query";
import {Spin} from "antd";
import {getDepartureInfo} from "@/pages/DeparturePage/func/getDepartureInfo";
import {Footer} from "@/widgets/Footer";
import {DepartureTables} from "@/widgets/DepartureTables";

const DeparturePage: React.FC = () => {

    const {
        data: departureTableDataInfo,
        isLoading: departureTableIsLoading,
        isError: departureTableIsError,
        refetch
    } = useQuery("departureTableData", () => getDepartureInfo(currentDate, currentInterval));

    const [today, todayFormat] = getDates();
    let [startInterval, endInterval] = getTimeInterval();
    if (startInterval === "22:00" && endInterval === "00:00") endInterval = "24:00"
    const [daysName, setDaysName] = useState<string>(todayFormat);
    const [currentDate, setCurrentDate] = useState<string>(today);
    const [timeName, setTimeName] = useState<string>(`${startInterval} - ${endInterval}`);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");


    useEffect(() => {
        setIsRefetching(true);
        refetch().then(() => setIsRefetching(false));
    }, [currentDate, currentInterval, refetch]);

    console.log(departureTableDataInfo);

    if (departureTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (departureTableIsError) return <h1>Error</h1>;
    else if (departureTableDataInfo !== undefined) {
        return (
            <main className={classes.departurePage}>
                <Header/>
                <SelectingInformation header={"Вылет"}
                                      setCurrentDate={setCurrentDate}
                                      setCurrentInterval={setCurrentInterval}
                                      daysName={daysName}
                                      setDaysName={setDaysName}
                                      timeName={timeName}
                                      setTimeName={setTimeName}
                                      setInput={setInput}
                />
                <DepartureTables input={input} departureTableDataInfo={departureTableDataInfo}/>
                <Footer/>
            </main>
        );
    }
}
export default DeparturePage;