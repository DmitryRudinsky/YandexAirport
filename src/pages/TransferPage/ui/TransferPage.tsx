import React, {useEffect, useState} from 'react';
import * as classes from "./TransferPage.module.scss";
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {getDates} from "@/shared/functions/getDate";
import {getTimeInterval} from "@/shared/functions/getTimeInterval";
import {useQuery} from "react-query";
import {getTransferInfo} from "@/pages/TransferPage/func/getTransferInfo";
import {Spin} from "antd";
import {Footer} from "@/widgets/Footer";
import {TransferTables} from "@/widgets/TransferTables";

const TransferPage: React.FC = () => {

    const [today, todayFormat] = getDates();
    const [startInterval, endInterval] = getTimeInterval();
    const [daysName, setDaysName] = useState<string>(todayFormat);
    const [currentDate, setCurrentDate] = useState<string>(today);
    const [timeName, setTimeName] = useState<string>(`${startInterval} - ${endInterval}`);
    const [currentInterval, setCurrentInterval] = useState<string[]>([startInterval, endInterval]);
    const [isRefetching, setIsRefetching] = useState<boolean>(false);


    const {
        data: transferTableDataInfo,
        isLoading: transferTableIsLoading,
        isError: transferTableIsError,
        refetch
    } = useQuery("transferTableData", () => getTransferInfo(currentDate, currentInterval));

    useEffect(() => {
        setIsRefetching(true);
        refetch().then(() => setIsRefetching(false));
    }, [currentDate, currentInterval, refetch]);

    console.log(transferTableDataInfo);

    if (transferTableIsLoading || isRefetching) return <Spin fullscreen={true}/>;
    else if (transferTableIsError) return <h1>Error</h1>;
    else if (transferTableDataInfo !== undefined) {
        return (
            <main className={classes.delayPage}>
                <Header/>
                <SelectingInformation timeName={timeName} setTimeName={setTimeName} daysName={daysName}
                                      setDaysName={setDaysName} setCurrentDate={setCurrentDate}
                                      setCurrentInterval={setCurrentInterval} header={"Пересадка"}/>
                <TransferTables transferTableDataInfo={transferTableDataInfo}/>
                <Footer/>
            </main>
        );
    }
};

export default TransferPage;