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

const DeparturePage: React.FC = () => {

    const {
        data: arrTableData,
        isLoading: arrTableIsLoading,
        isError: arrTableIsError,
        refetch
    } = useQuery("arrTableData", () => getDepartureInfo(currentDate, currentInterval));

    const [today, todayFormat] = getDates();
    const [startInterval, endInterval] = getTimeInterval();
    const [daysName, setDaysName] = useState<string>(todayFormat);
    const [currentDate, setCurrentDate] = useState<string>(today);
    const [timeName, setTimeName] = useState<string>(`${startInterval} - ${endInterval}`);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);

    useEffect(() => {
        setIsRefetching(true);
        refetch().then(() => setIsRefetching(false));
    }, [currentDate, currentInterval, refetch]);

    console.log(arrTableData);

    if (arrTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (arrTableIsError) return <h1>Error</h1>;
    else if (arrTableData !== undefined) {
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
                />
                <Footer/>
            </main>
        );
    }
}
export default DeparturePage;