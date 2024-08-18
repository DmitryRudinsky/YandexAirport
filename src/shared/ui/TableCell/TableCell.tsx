import React from 'react';
import * as classes from "./TableCell.module.scss"

interface TableCellProps {
    flt: string | null;
    code: string | null;
    term: string | null;
    status: string | null;
    time: string | null;
    city: string | null;
    gate_id: string | null;
    delTime: string | null;
}

const TableCell: React.FC<TableCellProps> = ({delTime, flt, code, term, status, time, city, gate_id}) => {
    return (
        <div className={classes.cell}>
            <div className={classes.leftInner}>
                <p className={classes.del__elem}>{delTime}</p>
                <p className={classes.time}>{time}</p>
                <h4 className={classes.arrivalCity}>{city}</h4>
            </div>
            <div className={classes.rightInner}>
                <p className={classes.code}>{code}</p>
                <p className={classes.flt}>{flt}</p>
                <p className={classes.term}>{term}</p>
                {gate_id !== null ? <p className={classes.gate_id}>{gate_id}</p> : <></>}
                <h5 className={`${classes.status} ${status === "Отменён" || status === "Отменен" ? classes.cancel : ""}`}>{status}</h5>
            </div>
        </div>
    );
};

export default TableCell;