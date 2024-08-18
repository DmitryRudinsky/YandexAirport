import React from 'react';
import * as classes from "./ArrivalTables.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import TableCell from "@/shared/ui/TableCell/TableCell";
import {ArrivalInfo, axiosRequest} from "@/shared/interfaces/ArrivalInterface";

interface ArrivalTablesProps {
    arrTableDataInfo: axiosRequest;
}

const ArrivalTables: React.FC<ArrivalTablesProps> = ({arrTableDataInfo}) => {
    const arrivalData: ArrivalInfo[] = arrTableDataInfo.items;
    console.log(arrivalData);

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
                    const city = data.mar1.city;
                    return (
                        <TableCell city={city} time={time} status={status} term={term} code={code} flt={flt} key={index}/>
                    )
                })}
            </div>
        </section>
    );
};

export default ArrivalTables;