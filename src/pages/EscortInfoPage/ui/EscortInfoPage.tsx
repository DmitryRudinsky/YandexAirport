import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";
import {Footer} from "@/widgets/Footer";
import {InfoBlock} from "@/widgets/InfoBlock";

const EscortInfoPage = () => {
    return (
        <main>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Провожающим`}/>
            <InfoBlock
                mainText="Вы можете проводить вылетающего пассажира до аэропорта и провести с ним время в общей зоне терминала. Помните, что после этого пассажиру перед вылетом нужно будет успеть пройти контроль и досмотр - поэтому рекомендуем приезжать в аэропорт заранее."/>
            <Footer/>
        </main>
    );
};

export default EscortInfoPage;