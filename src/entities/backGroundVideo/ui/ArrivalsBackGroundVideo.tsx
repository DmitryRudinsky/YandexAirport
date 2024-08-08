import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import ArrivalsVideoBG from "@/entities/backGroundVideo/assets/depature.mp4";

const MainBackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={ArrivalsVideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default MainBackGroundVideo;