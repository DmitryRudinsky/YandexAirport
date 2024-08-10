import React, { useEffect, useState, ReactElement, Dispatch, SetStateAction } from 'react';
import * as classes from "@/shared/ui/Slider/slider.module.scss";
import { createPages } from "@/shared/functions/createPages";

// Определяем тип для пропсов
interface SliderProps {
    children: ReactElement[];
    __PAGEWIDTH__: number;
    offset: number;
    setIsHover: Dispatch<SetStateAction<boolean>>;
}

// Основной компонент Slider
const Slider: React.FC<SliderProps> = ({ children, __PAGEWIDTH__, offset, setIsHover }) => {
    const [pages, setPages] = useState<ReactElement[]>([]);

    useEffect(() => {
        setPages(createPages(children, __PAGEWIDTH__));
    }, [children, __PAGEWIDTH__]);

    return (
        <div className={classes.mainContainer} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className={classes.window}>
                <div style={{ transform: `translateX(${offset}px)` }} className={classes.all__pages__container}>
                    {pages}
                </div>
            </div>
        </div>
    );
};

export default Slider;
