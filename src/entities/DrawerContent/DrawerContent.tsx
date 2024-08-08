import React from 'react';
import MainPageNavBar from "@/shared/ui/MainpageNavBar/MainPageNavBar";
import MainPageTransitions from "@/entities/MainPageTransitions/MainPageTransitions";

const DrawerContent: React.FC = () => {
    return (
        <div>
            <MainPageNavBar direction={'vertical'} setDrawer={null} needFirst={false} needLast={false} content={["Купить билет", "Табло рейсов", "Услуги", "Схема аэропорта", "Парковка", "Как добраться", "Вакансии"]}/>
            <MainPageTransitions direction={"vertical"} setHoverElem={null}/>
            <MainPageNavBar direction={'vertical'} setDrawer={null} needFirst={false} needLast={false} content={["О компании", "Партнёрам", "Пресс-центр", "Контакты"]}/>
        </div>
    );
};

export default DrawerContent;