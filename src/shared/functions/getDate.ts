export function getDates() {
    const today = new Date();
    const dateFormat1 = today.toISOString().split('T')[0];
    //@ts-ignore
    const options = {day: '2-digit', month: 'short'};
    //@ts-ignore
    const dateFormat2 = today.toLocaleDateString('ru-GB', options);
    //@ts-ignore
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    //@ts-ignore
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    //@ts-ignore
    const dateFormatYesterday = yesterday.toLocaleDateString('ru-GB', options);
    //@ts-ignore
    const dateFormatTomorrow = tomorrow.toLocaleDateString('ru-GB', options);
    return [dateFormat1, dateFormat2, dateFormatYesterday, dateFormatTomorrow];
}
