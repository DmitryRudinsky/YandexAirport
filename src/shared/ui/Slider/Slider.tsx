import React, {Children, cloneElement, ReactElement, useEffect, useState} from 'react';
import * as classes from "@/shared/ui/Slider/slider.module.scss"
import {createPages} from "@/shared/functions/createPages";

interface SliderProps {
    children: ReactElement[];
    __PAGEWIDTH__: number;
    offset: number;
    setOffset: React.Dispatch<React.SetStateAction<number>>
}

const Slider: React.FC<SliderProps> = ({children, __PAGEWIDTH__, offset, setOffset}) => {

    const [pages, setPages] = useState<ReactElement[]>([]);

    useEffect(() => {
       setPages(createPages(children, __PAGEWIDTH__));
    })

    return (
        <div className={classes.mainContainer}>
            <div className={classes.window}>
                <div style={{transform: `translateX(${offset}px)`}} className={classes.all__pages__container}>
                    {pages}
                </div>
            </div>
        </div>
    );
};

export default Slider;