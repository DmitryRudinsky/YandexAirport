import React from 'react';
import * as classes from "./MainPageFooter.module.scss";
import * as globalClasses from "@/shared/global_styles/_global.module.scss"

const Footer: React.FC = () => {
    return (
        <footer className={classes.mainPage__footer}>
            <div className={globalClasses.container}>
                <div className={classes.line}/>
                <div className={classes.links__container}>
                    <div>
                        <a className={classes.link} href="tel: +78002509639">8 800 250-96-39</a>
                        <a className={classes.link} href="#">Telegram-бот</a>
                        <a className={classes.link} href="#">Telegram-чат</a>
                    </div>
                    <div>
                        <a className={classes.link} href="https://vk.com/yandex?offset=25&own=1">VK</a>
                        <a className={classes.link} href="https://t.me/s/yandex">Telegram</a>
                    </div>
                </div>
                <div className={classes.links__container}>
                    <p className={classes.copy}>&copy; 2024 ООО «Яндекс»</p>
                    <p className={classes.copy}>Made by <span>Dimka</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;