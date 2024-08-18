import React from 'react';
import * as classes from "./DepartureTables.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import TableCell from "@/shared/ui/TableCell/TableCell";
import {DepartureInfo, axiosRequest} from "@/shared/interfaces/DepartureInterface";

interface ArrivalTablesProps {
    departureTableDataInfo: axiosRequest;
    input: string;
}

const DepartureTables: React.FC<ArrivalTablesProps> = ({departureTableDataInfo, input}) => {
    const arrivalData: DepartureInfo[] = departureTableDataInfo.items;

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
                    const city = data.mar2.city;
                    const gate_id = data.gate_id;
                    if (input === "" || flt.includes(input) || city.includes(input)) {
                        return (
                            <TableCell gate_id={gate_id} city={city} time={time} status={status} term={term} code={code}
                                       flt={flt} key={index}/>
                        )
                    }
                })}
            </div>
        </section>
    );
};

export default DepartureTables;