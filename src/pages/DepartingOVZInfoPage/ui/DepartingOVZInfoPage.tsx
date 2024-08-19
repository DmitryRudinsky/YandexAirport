import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";

const DepartingOVZInfoPage = () => {
    return (
        <section>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Вылетающим пассажирам с ОВЗ`}/>
        </section>
    );
};

export default DepartingOVZInfoPage;