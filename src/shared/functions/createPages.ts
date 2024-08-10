import {Children, cloneElement, ReactElement} from "react";


export const createPages = (children: ReactElement[], __PAGEWIDTH__: number) => {
    return (
        Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    ...child.props.style,
                    height: "100%",
                    minWidth: `${__PAGEWIDTH__}px`,
                    maxWidth: `${__PAGEWIDTH__}px`
                }
            })
        })
    )
}