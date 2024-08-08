import React from 'react';
import { animated, useTransition } from 'react-spring';
import MainBackGroundVideo from "@/entities/backGroundVideo/ui/MainBackGroundVideo";
import ArrivalsBackGroundVideo from "@/entities/backGroundVideo/ui/ArrivalsBackGroundVideo";
import DepatureBackGroundVideo from "@/entities/backGroundVideo/ui/DepatureBackGroundVideo";
import DelayBackGroundVideo from "@/entities/backGroundVideo/ui/DelayBackGroundVideo";

interface BackgroundChangingProps {
    hoverElem: string;
}

const BackgroundChanging: React.FC<BackgroundChangingProps> = ({ hoverElem }) => {
    const componentMap: { [key: string]: React.FC } = {
        main: MainBackGroundVideo,
        departure: DepatureBackGroundVideo,
        arrivals: ArrivalsBackGroundVideo,
        delay: DelayBackGroundVideo
    };
    const SelectedComponent = componentMap[hoverElem] || null;
    const transitions = useTransition(SelectedComponent, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 } // Длительность анимации в миллисекундах
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
