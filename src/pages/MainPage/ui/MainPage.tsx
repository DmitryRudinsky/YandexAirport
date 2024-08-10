import React from 'react';
import {MainPageHeader} from "@/widgets/MainPageHeader";
import {MainPageSlider} from "@/widgets/MainPageSlider";

const MainPage: React.FC = () => {

    return (
        <main>
            <MainPageHeader/>
            <MainPageSlider/>
        </main>
    );
};

export default MainPage;
