export const playSound = (soundClickPath : string) => {
    const soundClick = new Audio(soundClickPath);
    soundClick.play();
};
