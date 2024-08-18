import React from 'react';
import {MainPageHeader} from "@/widgets/MainPageHeader";
import {MainPageSlider} from "@/widgets/MainPageSlider";
import {Footer} from "@/widgets/Footer";

const MainPage: React.FC = () => {

    return (
        <main>
            <MainPageHeader/>
            <MainPageSlider/>
            <Footer/>
        </main>
    );
};

export default MainPage;
