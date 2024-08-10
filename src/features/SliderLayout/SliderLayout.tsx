import React, {ReactElement, useState} from 'react';
import Slider from "@/shared/ui/Slider/Slider";
import * as classes from "@/features/SliderLayout/SliderContent.module.scss"

import SliderRightContent from "@/entities/SliderRightContent/SliderRightContent";

interface SliderContentProps {
    children: ReactElement[];
    __PAGEWIDTH__: number
}

const SliderLayout: React.FC<SliderContentProps> = ({children, __PAGEWIDTH__}) => {
    const [offset, setOffset] = useState<number>(0);
    const [imageCnt, setImageCnt] = useState<number>(0);
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <div className={classes.slider__layout}>
            <Slider setIsHover={setIsHover} offset={offset} __PAGEWIDTH__={__PAGEWIDTH__}>
                {children}
            </Slider>
            <SliderRightContent __PAGEWIDTH__={__PAGEWIDTH__} isHover={isHover} setOffset={setOffset} setImageCnt={setImageCnt} imageCnt={imageCnt}/>
        </div>
    );
};

export default SliderLayout;