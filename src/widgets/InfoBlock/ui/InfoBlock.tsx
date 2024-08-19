import React from 'react';
import * as classes from "./InfoBlock.module.scss"
import * as globalClasses from "@/shared/global_styles/_global.module.scss"

interface InfoBlockProps{
    mainText: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({mainText}) => {
    return (
        <section className={classes.section}>
            <div className={globalClasses.container}>
                <div className={classes.line}/>
                <p className={classes.main__text}>
                    {mainText}
                </p>
            </div>
        </section>
    );
};

export default InfoBlock;