import React, { useState, useEffect } from 'react';
import SliderTitle from "@/shared/ui/SliderTitle/SliderTitle";
import SliderButtons from "@/shared/ui/SliderButtons/SliderButtons";
import * as classes from "@/entities/SliderRightContent/SliderRightContent.module.scss";

interface SliderRightContentProps {
    isHover: boolean;
    imageCnt: number;
    setImageCnt: React.Dispatch<React.SetStateAction<number>>;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    __PAGEWIDTH__: number;
}

const SliderRightContent: React.FC<SliderRightContentProps> = ({ __PAGEWIDTH__, isHover, imageCnt, setImageCnt, setOffset }) => {


    return (
        <div className={classes.slider__rightContent}>
            <SliderTitle isHover={isHover} imageCnt={imageCnt} />
            <div>
                <SliderButtons
                    setImageCnt={setImageCnt}
                    setOffset={setOffset}
                    __PAGEWIDTH__={__PAGEWIDTH__}
                />
            </div>
        </div>
    );
};

export default SliderRightContent;
