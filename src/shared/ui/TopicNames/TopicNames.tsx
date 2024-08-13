import React from 'react';
import * as classes from "./TopicNames.module.scss"
import {Link} from "react-router-dom";

type HeaderType = "Вылет" | "Прилёт" | "Задержки"

interface TopicNameProps {
    header: HeaderType;
}

const TopicNames: React.FC<TopicNameProps> = ({header}) => {
    const tableNames = {
        "Вылет": "Табло вылета",
        "Прилёт": "Табло прилёта",
        "Задержки": "Табло задерживающихся"
    }
    return (
        <div className={classes.topic__names}>
            <ul className={classes.list}>
                <Link to={"/"}>
                    <li className={classes.elem}>Главная</li>
                </Link>
                <li className={classes.elem}>{header}</li>
                <li style={{color: "#ffcc00"}} className={classes.elem}>{tableNames[header]}</li>
            </ul>
        </div>
    );
};

export default TopicNames;