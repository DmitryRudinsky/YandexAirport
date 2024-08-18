import React from 'react';
import * as classes from "./TransferTables.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import TableCell from "@/shared/ui/TableCell/TableCell";
import {TransferInfo, axiosRequest} from "@/shared/interfaces/TransferInterface";

interface ArrivalTablesProps {
    transferTableDataInfo: axiosRequest;
}

const TransferTables: React.FC<ArrivalTablesProps> = ({transferTableDataInfo}) => {
    const arrivalData: TransferInfo[] = transferTableDataInfo.items;

    return (
        <section className={classes.arrivalTables}>
            <div className={globalClasses.container}>
                {arrivalData.map((data, index) => {
                    const flt = data.flt;
                    const code = data.co.code;
                    const term = data.term;
                    const status = data.vip_status_rus;
                    let time;
                    if(data.t_at !== null) time = data.t_at.split("T")[1].slice(0, 5);
                    else time = data.t_st.split("T")[1].slice(0, 5);
                    const city = data.mar2.city !== "Москва" ? data.mar2.city : data.mar1.city;
                    return (
                        <TableCell gate_id={null} city={city} time={time} status={status} term={term} code={code} flt={flt} key={index}/>
                    )
                })}
            </div>
        </section>
    );
};

export default TransferTables;