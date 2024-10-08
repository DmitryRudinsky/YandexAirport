import React from 'react';
import * as classes from "./TopicNames.module.scss"
import {Link} from "react-router-dom";

type HeaderType = "Вылет" | "Прилёт" | "Пересадка" |
    "Вылетающим" | "Провожающим" | "Вылетающим пассажирам с ОВЗ" |
    "Прилетающим" | "Встречающим" | "Прилетающим пассажирам с ОВЗ";

interface TopicNameProps {
    header: HeaderType;
}

const TopicNames: React.FC<TopicNameProps> = ({header}) => {
    const tableNames = {
        "Вылет": "Табло вылета",
        "Прилёт": "Табло прилёта",
        "Пересадка": "Выбор рейса прилёта",
        "Вылетающим": "Вылетающим",
        "Провожающим": "Провожающим",
        "Вылетающим пассажирам с ОВЗ": "Вылетающим пассажирам с ОВЗ",
        "Прилетающим": "Прилетающим",
        "Встречающим": "Встречающим",
        "Прилетающим пассажирам с ОВЗ": "Прилетающим пассажирам с ОВЗ"
    }
    return (
        <div className={classes.topic__names}>
            <ul className={classes.list}>
                <Link to={"/"}>
                    <li className={classes.elem}>Главная</li>
                </Link>
                <li className={classes.slash}>/</li>
                <li className={classes.elem}>{header}</li>
                <li className={classes.slash}>/</li>
                <li style={{color: "#000000"}} className={classes.elem}>{tableNames[header]}</li>
            </ul>
        </div>
    );
};

export default TopicNames;