export const calculateElapsedTimeInPercent = (mainTime: number, elapsedTime: number) => {
    const elapsedTimeInPercent = (1 - ((elapsedTime - 1) / mainTime)) * 100;
    return elapsedTimeInPercent;
};