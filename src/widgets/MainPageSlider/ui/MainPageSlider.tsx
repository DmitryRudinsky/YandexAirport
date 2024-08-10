import React from 'react';
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import SliderLayout from "@/features/SliderLayout/SliderLayout";
import Img1 from "@/shared/assets/SliderImg/img1.jpg";
import Img2 from "@/shared/assets/SliderImg/img2.jpg";
import Img3 from "@/shared/assets/SliderImg/img3.jpg";

const MainPageSlider = () => {
    const __PAGEWIDTH__ = 1100;
    return (
        <section style={{marginBottom: "200px"}} className="mainPage__slider">
            <div className={globalClasses.container}>
                <SliderLayout __PAGEWIDTH__={__PAGEWIDTH__}>
                    <div>
                        <img src={Img1} alt="slider photo"/>
                    </div>
                    <div>
                        <img src={Img2} alt="slider photo"/>
                    </div>
                    <div>
                        <img src={Img3} alt="slider photo"/>
                    </div>
                </SliderLayout>
            </div>
        </section>
    );
};

export default MainPageSlider;