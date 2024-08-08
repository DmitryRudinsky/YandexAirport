import React from 'react';
import * as classes from "@/shared/ui/MainpageNavBar/mainPageNavBar.module.scss";

const MainpageNavBar: React.FC = () => {
    return (
        <nav>
            <ul className={classes.navigation__list}>
                <li className={classes.navigation__item}>Купить билет</li>
                <li className={classes.navigation__item}>Табло рейсов</li>
                <li className={classes.navigation__item}>Услуги</li>
                <li className={classes.navigation__item}>Схема аэропорта</li>
                <li className={classes.navigation__item}>Парковка</li>
                <li className={classes.navigation__item}>Как добраться</li>
                <li className={classes.navigation__item}>Вакансии</li>
                <li className={classes.navigation__item}>Меню</li>
            </ul>
        </nav>
    );
};

export default MainpageNavBar;