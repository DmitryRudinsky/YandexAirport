export function getTimeInterval(): [string, string] | null {
    const intervals = [
        { label: "00:00 – 02:00", key: '0' },
        { label: "02:00 – 04:00", key: '1' },
        { label: "04:00 – 06:00", key: '2' },
        { label: "06:00 – 08:00", key: '3' },
        { label: "08:00 – 10:00", key: '4' },
        { label: "10:00 – 12:00", key: '5' },
        { label: "12:00 – 14:00", key: '6' },
        { label: "14:00 – 16:00", key: '7' },
        { label: "16:00 – 18:00", key: '8' },
        { label: "18:00 – 20:00", key: '9' },
        { label: "20:00 – 22:00", key: '10' },
        { label: "22:00 – 00:00", key: '11' }
    ];

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    for (const interval of intervals) {
        const [start, end] = interval.label.split(" – ").map(time => {
            const [hours, minutes] = time.split(":").map(Number);
            return hours * 60 + minutes;
        });

        const currentTotalMinutes = currentHour * 60 + currentMinutes;
        if (end === 0) {
            if (currentTotalMinutes >= start || currentTotalMinutes < 24 * 60) {
                return ["22:00", "00:00"];
            }
        }

        if (currentTotalMinutes >= start && currentTotalMinutes < end) {
            return [interval.label.split(" – ")[0], interval.label.split(" – ")[1]];
        }
    }

    return null;
}