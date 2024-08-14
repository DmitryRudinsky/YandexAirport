import axios from "axios";

export async function getArr() {
    const config = {
        method: 'get',
        url: 'https://www.svo.aero/bitrix/timetable/?direction=arrival&dateStart=2024-08-16T12:00&dateEnd=2024-08-16T14:00&perPage=9999&page=1&&locale=ru',
    };

    try {
        const ArrData = await axios.request<any>(config);
        return ArrData.data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}