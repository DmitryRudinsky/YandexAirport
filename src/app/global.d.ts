
declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// @ts-ignore
declare global {
    interface Window {
        __REACT_QUERY_STATE__?: any;
    }
}


declare module "*.mp4";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.woff";
declare module "*.woff2";
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: "desktop" | "mobile";