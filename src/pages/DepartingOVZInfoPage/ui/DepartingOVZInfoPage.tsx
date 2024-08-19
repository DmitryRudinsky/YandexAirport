import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlockOVZ} from "@/widgets/InfoBlockOVZ";

const DepartingOVZInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Вылетающим пассажирам с ОВЗ`}/>
            <InfoBlockOVZ needSmallText={false}></InfoBlockOVZ>
            <Footer/>
        </main>
    );
};

export default DepartingOVZInfoPage;