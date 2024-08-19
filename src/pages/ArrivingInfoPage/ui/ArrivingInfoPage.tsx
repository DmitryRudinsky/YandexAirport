import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlock} from "@/widgets/InfoBlock";

const ArrivingInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Прилетающим`}/>
            <InfoBlock
                mainText="По прилёте пассажиры международных рейсов проходят пограничный и таможенный контроль, а затем получают багаж. Пассажиры внутренних рейсов сразу проходят в зону выдачи багажа."/>
            <Footer/>
        </main>
    );
};

export default ArrivingInfoPage;