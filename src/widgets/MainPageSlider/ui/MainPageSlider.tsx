import React from 'react';
import Slider from "@/shared/ui/Slider/Slider";
import * as globalClasses from "@/shared/global_styles/_global.module.scss"
import SliderLayout from "@/entities/SliderLayout/SliderLayout";

const MainPageSlider = () => {
    const __PAGEWIDTH__ = 1250;
    return (
        <section className="mainPage__slider">
            <div className={globalClasses.container}>
                <SliderLayout __PAGEWIDTH__={__PAGEWIDTH__}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: "aqua"
                    }}>JOPA
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: "blue"
                    }}>JOPA
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: "red"
                    }}>JOPA
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: "bisque"
                    }}>JOPA
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: "crimson"
                    }}>JOPA
                    </div>
                </SliderLayout>
            </div>
        </section>
    );
};

export default MainPageSlider;