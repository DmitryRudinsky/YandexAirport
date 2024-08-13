import React from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss";
import * as classes from "./SelectingInformation.module.scss"
import TopicNames from "@/shared/ui/TopicNames/TopicNames";
import TopicSelecting from "@/shared/ui/TopicSelecting/TopicSelecting";

type HeaderType = "Вылет" | "Прилёт" | "Задержки"

interface SelectingInformationProps{
    header: HeaderType;
}

const SelectingInformation: React.FC<SelectingInformationProps> = ({header}) => {
    return (
        <section>
            <div className={globalClasses.container}>
                <h4 className={classes.h4__title}>{header}</h4>
                <TopicNames header={header}/>
                <TopicSelecting header={header}/>
            </div>
        </section>
    );
};

export default SelectingInformation;