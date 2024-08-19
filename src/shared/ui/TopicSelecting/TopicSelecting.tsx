import React from 'react';
import * as classes from "./TopicSelecting.module.scss"
import {Link} from "react-router-dom";

type HeaderType = "Вылет" | "Прилёт" | "Пересадка" | "Вылетающим" | "Провожающим" | "Вылетающим пассажирам с ОВЗ";

interface TopicSelectingProps {
    header: HeaderType;
}


const TopicSelecting: React.FC<TopicSelectingProps> = ({header}) => {
    const listElems = {
        "Вылет": ["Табло вылета", "Вылетающим", "Провожающим"],
        "Прилёт": ["Табло прилета", "Прилетающим", "Встречающим"],
        "Пересадка": [""],
        "Вылетающим": ["Табло вылета", "Вылетающим", "Провожающим"],
        "Провожающим" : ["Табло вылета", "Вылетающим", "Провожающим"],
        "Вылетающим пассажирам с ОВЗ": ["Табло вылета", "Вылетающим", "Провожающим"]
    }

    const linksElems = {
        "Вылет": ["/departure", "/departure/d-for-departing-passengers", "/departure/d-provozhayushchim", "/departure/d-passazhiram-s-ovz"],
        "Прилёт": ["/arrival/a-vyletayushchim", "/arrival/a-provozhayushchim", "/arrival/a-passazhiram-s-ovz"],
        "Пересадка": [""],
        "Вылетающим":  ["/departure", "/departure/d-for-departing-passengers", "/departure/d-provozhayushchim", "/departure/d-passazhiram-s-ovz"],
        "Провожающим": ["/departure", "/departure/d-for-departing-passengers", "/departure/d-provozhayushchim", "/departure/d-passazhiram-s-ovz"],
        "Вылетающим пассажирам с ОВЗ": ["/departure", "/departure/d-for-departing-passengers", "/departure/d-provozhayushchim", "/departure/d-passazhiram-s-ovz"],
    }

    const elems: string[] = listElems[header];
    const links: string[] = linksElems[header];

    return (
        <div className={classes.topic__selecting}>
            {
                header === "Пересадка"
                    ?
                    <h1 className={`${classes.elem} ${classes.elem__trans}`}>Выбор рейса прилёта</h1>
                    :
                    <ul className={classes.list}>
                        <Link to={links[0]}>
                            <li className={`${classes.elem} ${header === "Вылет" || header === "Прилёт" ? classes.elem__active : ""}`}>
                                {elems[0]}
                            </li>
                        </Link>
                        <Link to={links[1]}>
                            <li className={`${classes.elem} ${header === "Вылетающим" ? classes.elem__active : ""}`}>{elems[1]}</li>
                        </Link>
                        <Link to={links[2]}>
                            <li className={`${classes.elem} ${header === "Провожающим" ? classes.elem__active : ""}`}>{elems[2]}</li>
                        </Link>
                        <Link to={links[3]}>
                            <li className={`${classes.elem} ${header === "Вылетающим пассажирам с ОВЗ" ? classes.elem__active : ""} ${classes.last__elem}`}>Пассажирам с ОВЗ</li>
                        </Link>
                    </ul>
            }
        </div>
    );
};

export default TopicSelecting;