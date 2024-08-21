import React from 'react';
import { animated, useTransition } from 'react-spring';
import MainBackGroundVideo from "@/entities/backGroundVideo/ui/MainBackGroundVideo";
import ArrivalsBackGroundVideo from "@/entities/backGroundVideo/ui/ArrivalsBackGroundVideo";
import DepartureBackGroundVideo from "@/entities/backGroundVideo/ui/DepartureBackGroundVideo";
import TransferBackGroundVideo from "@/entities/backGroundVideo/ui/TransferBackGroundVideo";

interface BackgroundChangingProps {
    hoverElem: string;
}

const BackgroundChanging: React.FC<BackgroundChangingProps> = ({ hoverElem }) => {
    const componentMap: { [key: string]: React.FC } = {
        main: MainBackGroundVideo,
        departure: DepartureBackGroundVideo,
        arrivals: ArrivalsBackGroundVideo,
        transfer: TransferBackGroundVideo
    };
    const SelectedComponent = componentMap[hoverElem] || null;
    const transitions = useTransition(SelectedComponent, {
        from: { filter: 'brightness(0%)' },
        enter: { filter: 'brightness(100%)' },
        leave: { filter: 'brightness(0%)' },
        config: { duration: 500 }
    });

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {transitions((styles, item) =>
                item ? (
                    <animated.div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
                        {item ? React.createElement(item) : null}
                    </animated.div>
                ) : null
            )}
        </div>
    );
};

export default BackgroundChanging;
