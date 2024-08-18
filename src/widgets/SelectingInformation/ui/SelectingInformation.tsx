import React from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss";
import * as classes from "./SelectingInformation.module.scss"
import TopicNames from "@/shared/ui/TopicNames/TopicNames";
import TopicSelecting from "@/shared/ui/TopicSelecting/TopicSelecting";
import Input from "@/entities/Input/Input";

type HeaderType = "Вылет" | "Прилёт" | "Пересадка"

interface SelectingInformationProps {
    header: HeaderType;
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
    daysName: string;
    setDaysName: React.Dispatch<React.SetStateAction<string>>;
    setCurrentInterval: React.Dispatch<React.SetStateAction<string[]>>;
    timeName: string;
    setTimeName: React.Dispatch<React.SetStateAction<string>>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const SelectingInformation: React.FC<SelectingInformationProps> = ({
                                                                       header,
                                                                       setCurrentDate,
                                                                       setDaysName,
                                                                       daysName,
                                                                       setCurrentInterval,
                                                                       timeName,
                                                                       setTimeName,
                                                                       setInput
                                                                   }) => {
    return (
        <section className={classes.selection}>
            <div className={globalClasses.container}>
                <h4 className={classes.h4__title}>{header}</h4>
                <TopicNames header={header}/>
                <TopicSelecting header={header}/>
                <Input
                    setCurrentInterval={setCurrentInterval}
                    setCurrentDate={setCurrentDate}
                    daysName={daysName}
                    setDaysName={setDaysName}
                    timeName={timeName}
                    setTimeName={setTimeName}
                    setInput={setInput}
                />
            </div>
        </section>
    );
};

export default SelectingInformation;