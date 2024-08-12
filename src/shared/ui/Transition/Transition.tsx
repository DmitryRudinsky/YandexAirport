import React, {useRef} from 'react';
import * as classes from "./Transition.module.scss"
import {Link} from "react-router-dom";

type Direction = "horizontal" | "vertical"

interface TransitionProps {
    keyWord: string;
    mainString: string;
    subString: string;
    setHoverElem: React.Dispatch<React.SetStateAction<string>> | null;
    direction: Direction;
}

const Transition: React.FC<TransitionProps> = ({mainString, subString, setHoverElem, keyWord, direction}) => {
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
    const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

    function MouseHoverEnter() {
        if (leaveTimeout.current) {
            clearTimeout(leaveTimeout.current);
            leaveTimeout.current = null;
        }
        hoverTimeout.current = setTimeout(() => {
            setHoverElem(keyWord);
        }, 750);
    }

    function MouseHoverLeave() {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
            hoverTimeout.current = null;
        }
        leaveTimeout.current = setTimeout(() => {
            setHoverElem("main");
        }, 750);
    }

    return (
        <Link to={keyWord}>
            <div onMouseEnter={setHoverElem !== null ? MouseHoverEnter : null}
                 onMouseLeave={setHoverElem !== null ? MouseHoverLeave : null}
                 className={direction === "horizontal" ? classes.transition__horizontal : classes.transition__vertical}>
                <div
                    className={direction === "horizontal" ? classes.transition__main__horizontal : classes.transition__main__vertical}>
                    <h3 className={classes.transition__main__title}>{mainString}</h3>
                    <div className={classes.parent}>
                        <div className={classes.line}>
                            <div className={classes.bullet}></div>
                        </div>
                    </div>
                </div>
                <h4 className={classes.transition__sub__title}>{subString}</h4>
            </div>
        </Link>
    );
};

export default Transition;