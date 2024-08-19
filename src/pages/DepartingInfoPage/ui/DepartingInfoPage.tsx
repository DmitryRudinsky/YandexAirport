import React from 'react';
import {Header} from "@/widgets/Header";
import {SelectingInformation} from "@/widgets/SelectingInformation";

const DepartingInfoPage = () => {
    return (
        <section>
            <Header/>
            <SelectingInformation timeName={null} setTimeName={null}
                                  needInput={false} setInput={null}
                                  setCurrentInterval={null} setCurrentDate={null}
                                  setDaysName={null} daysName={null} header={`Вылетающим`}/>
        </section>
    );
};

export default DepartingInfoPage;