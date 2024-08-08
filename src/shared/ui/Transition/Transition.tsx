import React from 'react';
import * as classes from "./Transition.module.scss"

interface TransitionProps {
    keyWord: string;
    mainString: string;
    subString: string;
    setHoverElem: React.Dispatch<React.SetStateAction<string>>;
}

const Transition: React.FC<TransitionProps> = ({mainString, subString, setHoverElem, keyWord}) => {

    function MouseHoverEnter() {
        setTimeout(() => setHoverElem(keyWord), 100);
    }

    function MouseHoverLeave() {
        setTimeout(() => setHoverElem("main"), 100);
    }

    return (
        <div onMouseEnter={MouseHoverEnter} onMouseLeave={MouseHoverLeave} className={classes.transition}>
            <div className={classes.transition__main}>
                <h3 className={classes.transition__main__title}>{mainString}</h3>
                <div className={classes.parent}>
                    <div className={classes.line}>
                        <div className={classes.bullet}></div>
                    </div>
                </div>
            </div>
            <h4 className={classes.transition__sub__title}>{subString}</h4>
        </div>
    );
};

export default Transition;