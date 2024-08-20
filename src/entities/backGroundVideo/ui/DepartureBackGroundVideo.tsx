import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import DepartureVideoBG from "@/entities/backGroundVideo/assets/departure.mp4";

const MainBackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={DepartureVideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default MainBackGroundVideo;