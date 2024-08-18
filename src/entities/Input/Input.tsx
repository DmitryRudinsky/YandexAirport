import React, {useState} from 'react';
import * as classes from "./Input.module.scss";
import {useSpring, animated} from "react-spring";
import DropDownTimes from "@/shared/ui/DropDownTimes/DropDownTimes";
import DropDownDays from "@/shared/ui/DropDownDays/DropDownDays";
import {getDates} from "@/shared/functions/getDate";

interface InputProps {
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
    daysName: string;
    setDaysName: React.Dispatch<React.SetStateAction<string>>;
    setCurrentInterval: React.Dispatch<React.SetStateAction<string[]>>;
    timeName: string;
    setTimeName: React.Dispatch<React.SetStateAction<string>>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
                                         setCurrentDate,
                                         setDaysName,
                                         daysName,
                                         setCurrentInterval,
                                         timeName,
                                         setTimeName,
                                         setInput
                                     }) => {

    const [dateFormat1, dateFormat2, dateFormatYesterday, dateFormatTomorrow, dateFormatYesterdayFull, dateFormatTomorrowFull] = getDates();
    const [active, setActive] = useState<boolean>(false);


    const setActiveHandle = () => {
        setActive(true);
    }

    const setUnActiveHandle = () => {
        setActive(false);
    }

    //@ts-ignore
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: {opacity: 0, transform: 'translateY(-40px)'},
        config: {tension: 40, friction: 10},
        reset: true,
    });


    return (
        <div className={`${classes.searchBar} ${active ? classes.searchBar__active : ""}`}>
            <input onChange={(e) => setInput(e.target.value)} className={`${classes.searchBar__input}`} onClick={setActiveHandle} type="text"
                   placeholder="Поиск по номеру рейса, городу и авиакомпании"/>
            <div className={classes.options}>
                {
                    !active
                        ?
                        <animated.div style={props}>
                            <div className={classes.dropCont}>
                                <DropDownDays dateFormat1={dateFormat1}
                                              dateFormatTomorrowFull={dateFormatTomorrowFull}
                                              dateFormatYesterdayFull={dateFormatYesterdayFull}
                                              setCurrentDate={setCurrentDate}
                                              dateFormat2={dateFormat2}
                                              setDaysName={setDaysName}
                                              dateFormatYesterday={dateFormatYesterday}
                                              dateFormatTomorrow={dateFormatTomorrow}
                                              daysName={daysName}
                                />
                                <DropDownTimes
                                    setCurrentInterval={setCurrentInterval}
                                    setTimeName={setTimeName}
                                    timeName={timeName}
                                />
                            </div>
                        </animated.div>
                        :
                        <animated.div style={props}>
                            <button className={classes.cancel} onClick={setUnActiveHandle}>Отменить</button>
                            <button className={classes.find}>Искать</button>
                        </animated.div>
                }
            </div>
        </div>
    );
};

export default Input;