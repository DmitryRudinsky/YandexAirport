import axios from "axios";

export async function getArrivalInfo(currentDate: string, currentInterval: string[]) {
    const config = {
        method: 'get',
        url: `https://www.svo.aero/bitrix/timetable/?direction=arrival&dateStart=${currentDate}T${currentInterval[0]}&dateEnd=${currentDate}T${currentInterval[1]}&perPage=9999&page=1&&locale=ru`,
    };

    try {
        const ArrData = await axios.request<any>(config);
        return ArrData.data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}