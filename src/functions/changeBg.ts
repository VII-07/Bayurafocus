export type ButtonTimmerTypes = {
    selectWorkType: string,
    workTypes: string[],
    styles: CSSModuleClasses,
}

const changeBg = ({selectWorkType, workTypes,  styles} : ButtonTimmerTypes) => {
    const workTypeStyles = {
        [workTypes[0]]: styles.work__bg,
        [workTypes[1]]: styles.short__break__bg,
        [workTypes[2]]: styles.long__break__bg
    };
    return workTypeStyles[selectWorkType];
}


export default changeBg;