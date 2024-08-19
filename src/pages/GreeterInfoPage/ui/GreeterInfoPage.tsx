import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlock} from "@/widgets/InfoBlock";

const GreeterInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Встречающим`}/>
            <InfoBlock
                mainText="В ожидании пассажира вы можете провести время в общей зоне аэропорта: купить цветы, посетить магазины или поесть в ресторанах."/>
            <Footer/>
        </main>
    );
};

export default GreeterInfoPage;