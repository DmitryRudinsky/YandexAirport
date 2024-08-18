import React from 'react';
import * as classes from "./ArrivalTables.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import TableCell from "@/shared/ui/TableCell/TableCell";
import {ArrivalInfo, axiosRequest} from "@/shared/interfaces/ArrivalInterface";

interface ArrivalTablesProps {
    arrTableDataInfo: axiosRequest;
    input: string;
}

const ArrivalTables: React.FC<ArrivalTablesProps> = ({arrTableDataInfo, input}) => {
    const arrivalData: ArrivalInfo[] = arrTableDataInfo.items;

    return (
        <section className={classes.arrivalTables}>
            <div className={globalClasses.container}>
                {arrivalData.map((data, index) => {
                    const flt = data.flt;
                    const code = data.co.code;
                    const term = data.term;
                    const status = data.vip_status_rus;
                    let time;
                    let delTime = null;
                    if (data.t_otpr !== null) {
                        time = data.t_otpr.split("T")[1].slice(0, 5);
                        delTime = data.t_st.split("T")[1].slice(0, 5);
                    } else if (data.t_at !== null) {
                        time = data.t_at.split("T")[1].slice(0, 5);
                        delTime = data.t_st.split("T")[1].slice(0, 5);
                    } else time = data.t_st.split("T")[1].slice(0, 5);

                    const city = data.mar1.city;
                    if (input === "" || flt.includes(input) || city.includes(input)) {
                        return (
                            <TableCell delTime={delTime} gate_id={null} city={city} time={time} status={status}
                                       term={term} code={code}
                                       flt={flt} key={index}/>
                        )
                    }
                })}
            </div>
        </section>
    );
};

export default ArrivalTables;