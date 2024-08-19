import React from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss";
import * as classes from "./SelectingInformation.module.scss"
import TopicNames from "@/shared/ui/TopicNames/TopicNames";
import TopicSelecting from "@/shared/ui/TopicSelecting/TopicSelecting";
import Input from "@/entities/Input/Input";

type HeaderType = "Вылет" | "Прилёт" | "Пересадка" | "Вылетающим" | "Провожающим" | "Вылетающим пассажирам с ОВЗ";

interface SelectingInformationProps {
    header: HeaderType;
    setCurrentDate: React.Dispatch<React.SetStateAction<string>> | null;
    daysName: string | null;
    setDaysName: React.Dispatch<React.SetStateAction<string>> | null;
    setCurrentInterval: React.Dispatch<React.SetStateAction<string[]>> | null;
    timeName: string | null;
    setTimeName: React.Dispatch<React.SetStateAction<string>> | null;
    setInput: React.Dispatch<React.SetStateAction<string>> | null;
    needInput: boolean;
}

const SelectingInformation: React.FC<SelectingInformationProps> = ({
                                                                       header,
                                                                       setCurrentDate,
                                                                       setDaysName,
                                                                       daysName,
                                                                       setCurrentInterval,
                                                                       timeName,
                                                                       setTimeName,
                                                                       setInput,
                                                                       needInput
                                                                   }) => {
    return (
        <section className={classes.selection}>
            <div className={globalClasses.container}>
                <TopicNames header={header}/>
                <TopicSelecting header={header}/>
                {needInput
                    ?
                    <Input
                        setCurrentInterval={setCurrentInterval}
                        setCurrentDate={setCurrentDate}
                        daysName={daysName}
                        setDaysName={setDaysName}
                        timeName={timeName}
                        setTimeName={setTimeName}
                        setInput={setInput}
                    />
                    :
                    <></>
                }
            </div>
        </section>
    );
};

export default SelectingInformation;