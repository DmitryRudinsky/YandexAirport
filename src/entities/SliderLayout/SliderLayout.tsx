import React, {ReactElement, useState} from 'react';
import Slider from "@/shared/ui/Slider/Slider";
import * as classes from "@/entities/SliderLayout/SliderContent.module.scss"

interface SliderContentProps {
    children: ReactElement[];
    __PAGEWIDTH__: number
}

const SliderLayout: React.FC<SliderContentProps> = ({children, __PAGEWIDTH__}) => {
    const [offset, setOffset] = useState<number>(0);


    return (
        <div className={classes.slider__layout}>
            <Slider offset={offset} setOffset={setOffset} __PAGEWIDTH__={__PAGEWIDTH__}>
                {children}
            </Slider>
            <div className={classes.slider__rightContent}>
                <h1>TEXT</h1>
                <div className={classes.slider__buttons}>
                    <button onClick={() => setOffset(0)}>1</button>
                    <button onClick={() => setOffset(-__PAGEWIDTH__)}>2</button>
                    <button onClick={() => setOffset(__PAGEWIDTH__ * -2)}>3</button>
                    <button onClick={() => setOffset(__PAGEWIDTH__ * -3)}>4</button>
                    <button onClick={() => setOffset(__PAGEWIDTH__ * -4)}>5</button>
                </div>
            </div>
        </div>
    );
};

export default SliderLayout;