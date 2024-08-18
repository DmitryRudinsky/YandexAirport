import React from 'react';
import * as classes from "./TopicSelecting.module.scss"

type HeaderType = "Вылет" | "Прилёт" | "Пересадка";

interface TopicSelectingProps {
    header: HeaderType;
}


const TopicSelecting: React.FC<TopicSelectingProps> = ({header}) => {
    const objOfElems = {
        "Вылет": ["Табло вылета", "Вылетающим", "Провожающим"],
        "Прилёт": ["Табло прилета", "Прилетающим", "Встречающим"],
        "Пересадка": [""]
    }
    const elems: string[] = objOfElems[header];
    return (
        <div className={classes.topic__selecting}>
            {
                header === "Пересадка"
                    ?
                    <h1 className={`${classes.elem} ${classes.elem__trans}`}>Выбор рейса прилёта</h1>
                    :
                    <ul className={classes.list}>
                        <li className={`${classes.elem} ${classes.elem__active}`}>{elems[0]}</li>
                        <li className={classes.elem}>{elems[1]}</li>
                        <li className={classes.elem}>{elems[2]}</li>
                        <li className={classes.elem}>Пассажирам с ОВЗ</li>
                    </ul>
            }
        </div>
    );
};

export default TopicSelecting;