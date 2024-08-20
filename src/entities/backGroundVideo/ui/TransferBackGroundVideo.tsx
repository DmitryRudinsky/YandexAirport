import React from 'react';
import * as classes from "./backgroundVideo.module.scss";
import TransferVideoBG from "@/entities/backGroundVideo/assets/transfer.mp4";

const MainBackGroundVideo: React.FC = () => {
    return (
        <div className={classes.fullscreenBg}>
            <div className={classes.overlay}></div>
            <video src={TransferVideoBG} className={classes.fullscreenBg__video} autoPlay loop muted/>
        </div>
    );
};

export default MainBackGroundVideo;