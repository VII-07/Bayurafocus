/* eslint-disable @typescript-eslint/ban-types */
export type displayTimeType = { 
    time: number, 
    isRunning: boolean, 
    handleSkipTime: Function,
};

export type ButtonTimmerTypes = {
    selectWorkType: string,
    workTypes: string[],
    handleSkipTime: Function
}

export type IsNumberOrNull = number | null;

export type NumberInputTypes = {
    title: string,
    defaultValue: number,
    onChange: ((value: number | null) => void),
}