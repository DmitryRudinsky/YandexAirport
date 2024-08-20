import axios from "axios";
import {axiosRequest} from "@/shared/interfaces/TransferInterface";

export async function getTransferInfo(currentDate: string, currentInterval: string[]) {
    const config = {
        method: 'get',
        url: `/bitrix/timetable/?direction=transit&dateStart=${currentDate}T${currentInterval[0]}&dateEnd=${currentDate}T${currentInterval[1]}&perPage=9999&page=1&&locale=ru`,
    };

    try {
        const ArrData = await axios.request<axiosRequest>(config);
        return ArrData.data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}