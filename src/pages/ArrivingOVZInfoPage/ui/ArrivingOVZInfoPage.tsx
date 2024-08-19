import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlockOVZ} from "@/widgets/InfoBlockOVZ";

const ArrivingOVZInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Прилетающим пассажирам с ОВЗ`}/>
            <InfoBlockOVZ needSmallText={true}></InfoBlockOVZ>
            <Footer/>
        </main>
    );
};

export default ArrivingOVZInfoPage;