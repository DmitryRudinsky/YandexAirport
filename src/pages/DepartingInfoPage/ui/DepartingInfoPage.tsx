import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlock} from "@/widgets/InfoBlock";

const DepartingInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Вылетающим`}/>
            <InfoBlock
                mainText="В аэропорту вылетающие пассажиры регистрируются на рейсы, сдают багаж и проходят предполетный досмотр. Рекомендуем приезжать заранее, чтобы успеть пройти все контроли. Регистрация и сдача багажа на рейсы закрывается за 40-60 минут до вылета в зависимости от авиакомпании и направления рейса. Внимательно изучите информацию при покупке билета."/>
            <Footer/>
        </main>
    );
};

export default DepartingInfoPage;