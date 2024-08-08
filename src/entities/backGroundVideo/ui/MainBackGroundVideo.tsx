import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import MainVideoBG from "@/entities/backGroundVideo/assets/main.mp4";

const MainBackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={MainVideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default MainBackGroundVideo;