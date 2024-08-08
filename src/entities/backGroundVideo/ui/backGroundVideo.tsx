import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import VideoBG from "@/entities/backGroundVideo/assets/background-video.mp4";

const BackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={VideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default BackGroundVideo;