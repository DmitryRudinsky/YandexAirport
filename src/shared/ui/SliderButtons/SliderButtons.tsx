import React, {useState} from 'react';
import * as classes from "@/shared/ui/SliderButtons/SliderButtons.module.scss";
import Img1 from "@/shared/assets/SliderImg/img1.jpg";
import Img2 from "@/shared/assets/SliderImg/img2.jpg";
import Img3 from "@/shared/assets/SliderImg/img3.jpg";

interface SliderButtonsProps {
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    setImageCnt: React.Dispatch<React.SetStateAction<number>>;
    __PAGEWIDTH__: number;
}


const SliderButtons: React.FC<SliderButtonsProps> = ({
                                                         setOffset,
                                                         setImageCnt,
                                                         __PAGEWIDTH__,
                                                     }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);


    const handleClick = (index: number, offset: number) => {
        setOffset(offset);
        setImageCnt(index);
        setActiveIndex(index);
    };

    return (
        <div className={classes.slider__buttons}>
            <button
                type="button"
                className={`${classes.slider__buttons__elem} ${activeIndex === 0 ? classes.active : ''}`}
                onClick={() => handleClick(0, 0)}
            >
                <img src={Img1} alt="Button Image" className={classes.buttons__img}/>
            </button>
            <button
                type="button"
                className={`${classes.slider__buttons__elem} ${activeIndex === 1 ? classes.active : ''}`}
                onClick={() => handleClick(1, -__PAGEWIDTH__)}
            >
                <img src={Img2} alt="Button Image" className={classes.buttons__img}/>
            </button>
            <button
                type="button"
                className={`${classes.slider__buttons__elem} ${activeIndex === 2 ? classes.active : ''}`}
                onClick={() => handleClick(2, __PAGEWIDTH__ * -2)}
            >
                <img src={Img3} alt="Button Image" className={classes.buttons__img}/>
            </button>

        </div>
    );
};

export default SliderButtons;
