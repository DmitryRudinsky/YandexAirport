import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, Hydrate, dehydrate } from 'react-query';


import { MainPage } from '@/pages/MainPage';
import { DeparturePage } from '@/pages/DeparturePage';
import { ArrivalsPage } from '@/pages/ArrivalsPage';
import { TransferPage } from '@/pages/TransferPage';
import { DepartingInfoPage } from '@/pages/DepartingInfoPage';
import { EscortInfoPage } from '@/pages/EscortInfoPage';
import { DepartingOVZInfoPage } from '@/pages/DepartingOVZInfoPage';
import { ArrivingInfoPage } from '@/pages/ArrivingInfoPage';
import { GreeterInfoPage } from '@/pages/GreeterInfoPage';
import { ArrivingOVZInfoPage } from '@/pages/ArrivingOVZInfoPage';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const queryClient = new QueryClient();

    const dehydratedState = dehydrate(queryClient);


    const appHtml = renderToString(
        <QueryClientProvider client={queryClient}>
            <StaticRouter location={req.url}>
                <Hydrate state={dehydratedState}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/departure" element={<DeparturePage />} />
                        <Route path="/arrivals" element={<ArrivalsPage />} />
                        <Route path="/transfer" element={<TransferPage />} />
                        <Route path="/departure/d-for-departing-passengers" element={<DepartingInfoPage />} />
                        <Route path="/departure/d-provozhayushchim" element={<EscortInfoPage />} />
                        <Route path="/departure/d-passazhiram-s-ovz" element={<DepartingOVZInfoPage />} />
                        <Route path="/arrival/a-vyletayushchim" element={<ArrivingInfoPage />} />
                        <Route path="/arrival/a-provozhayushchim" element={<GreeterInfoPage />} />
                        <Route path="/arrival/a-passazhiram-s-ovz" element={<ArrivingOVZInfoPage />} />
                    </Routes>
                </Hydrate>
            </StaticRouter>
        </QueryClientProvider>
    );

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>YandexAirport</title>
        </head>
        <body>
            <div id="root">ЫЛЩЗЛОЛЩЗОЫ</div>
            <script src="./build/main.js"></script>
        </body>
        </html>
    `;

    res.status(200).send(html);
});

app.listen(3000, () => {
    console.log('SSR Server is running on http://localhost:3000');
});
