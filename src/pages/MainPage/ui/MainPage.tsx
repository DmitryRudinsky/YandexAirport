import React from 'react';
import {MainPageHeader} from "@/widgets/MainPageHeader";
import {MainPageSlider} from "@/widgets/MainPageSlider";
import {MainPageFooter} from "@/widgets/MainPageFooter";

const MainPage: React.FC = () => {

    return (
        <main>
            <MainPageHeader/>
            <MainPageSlider/>
            <MainPageFooter/>
        </main>
    );
};

export default MainPage;
