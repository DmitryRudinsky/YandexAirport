import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import DelayVideoBG from "@/entities/backGroundVideo/assets/delay.mp4";

const MainBackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={DelayVideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default MainBackGroundVideo;