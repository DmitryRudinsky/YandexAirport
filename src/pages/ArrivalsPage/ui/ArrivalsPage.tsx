import React, {useState, useEffect} from 'react';
import {useQuery} from "react-query";
import {getArrivalInfo} from "@/pages/ArrivalsPage/func/getArrivalInfo";
import {Spin} from "antd";
import * as classes from "./ArrivalsPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {getDates} from "@/shared/functions/getDate";
import {getTimeInterval} from "@/shared/functions/getTimeInterval";
import {ArrivalTables} from "@/widgets/ArrivalTables";
import {Footer} from "@/widgets/Footer";


const ArrivalsPage: React.FC = () => {


    const [today, todayFormat] = getDates();
    let [startInterval, endInterval] = getTimeInterval();
    if (startInterval === "22:00" && endInterval === "00:00") endInterval = "24:00"
    const [daysName, setDaysName] = useState<string>(todayFormat);
    const [currentDate, setCurrentDate] = useState<string>(today);
    const [timeName, setTimeName] = useState<string>(`${startInterval} - ${endInterval}`);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    console.log(startInterval, endInterval)

    const {
        data: arrTableDataInfo,
        isLoading: arrTableIsLoading,
        isError: arrTableIsError,
        refetch
    } = useQuery("arrTableData", () => getArrivalInfo(currentDate, currentInterval));

    useEffect(() => {
        setIsRefetching(true);
        refetch().then(() => setIsRefetching(false));
    }, [currentDate, currentInterval, refetch]);


    if (arrTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (arrTableIsError) return <h1>Error</h1>;
    else if (arrTableDataInfo !== undefined) {
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
                                      setInput={setInput}
                />
                <ArrivalTables
                    input={input}
                    arrTableDataInfo={arrTableDataInfo}
                />
                <Footer/>
            </main>
        );
    }
};

export default ArrivalsPage;